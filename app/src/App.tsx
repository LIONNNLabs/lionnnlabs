import { useState } from 'react';
import { CartProvider } from '@/context/CartContext';
import { Footer } from '@/components/Footer';
import { CartSidebar } from '@/components/CartSidebar';
import { HeroSection } from '@/sections/HeroSection';
import { SFXPage } from '@/sections/SFXPage';
import { ColorPage } from '@/sections/ColorPage';
import { CheckoutPage } from '@/sections/CheckoutPage';
import './App.css';

type Page = 'home' | 'sfx' | 'color' | 'checkout';

function AppContent() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HeroSection onNavigate={handleNavigate} />;
      case 'sfx':
        return <SFXPage onNavigate={handleNavigate} />;
      case 'color':
        return <ColorPage onNavigate={handleNavigate} />;
      case 'checkout':
        return <CheckoutPage onNavigate={handleNavigate} />;
      default:
        return <HeroSection onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-neutral-100">
      {/* Main Content - Each page has its own navigation */}
      <main className={currentPage === 'home' ? '' : 'pt-0'}>
        {renderPage()}
      </main>

      {/* Footer - Only show on non-checkout pages */}
      {currentPage !== 'checkout' && <Footer />}

      {/* Cart Sidebar */}
      <CartSidebar onCheckout={() => handleNavigate('checkout')} />
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;

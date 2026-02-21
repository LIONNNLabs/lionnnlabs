import { useState, useEffect } from 'react';
import { CartProvider } from '@/context/CartContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { EmailModal } from '@/components/EmailModal';
import { CartSidebar } from '@/components/CartSidebar';
import { HeroSection } from '@/sections/HeroSection';
import { SFXPage } from '@/sections/SFXPage';
import { ColorPage } from '@/sections/ColorPage';
import { ScribblePage } from '@/sections/ScribblePage';
import { VHSPage } from '@/sections/VHSPage';
import { CheckoutPage } from '@/sections/CheckoutPage';
import './App.css';

type Page = 'home' | 'sfx' | 'color' | 'scribble' | 'vhs' | 'checkout';

function AppContent() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [showEmailModalOnLoad, setShowEmailModalOnLoad] = useState(true);

  useEffect(() => {
    // Show email modal after a short delay on first load
    if (showEmailModalOnLoad) {
      const timer = setTimeout(() => {
        setIsEmailModalOpen(true);
        setShowEmailModalOnLoad(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [showEmailModalOnLoad]);

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HeroSection 
            onNavigate={handleNavigate} 
            onOpenEmailModal={() => setIsEmailModalOpen(true)}
          />
        );
      case 'sfx':
        return <SFXPage onNavigate={handleNavigate} />;
      case 'color':
        return <ColorPage onNavigate={handleNavigate} />;
      case 'scribble':
        return <ScribblePage onNavigate={handleNavigate} />;
      case 'vhs':
        return <VHSPage onNavigate={handleNavigate} />;
      case 'checkout':
        return <CheckoutPage onNavigate={handleNavigate} />;
      default:
        return (
          <HeroSection 
            onNavigate={handleNavigate} 
            onOpenEmailModal={() => setIsEmailModalOpen(true)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-neutral-100">
      {/* Header - Only show on non-home pages */}
      {currentPage !== 'home' && currentPage !== 'checkout' && (
        <Header currentPage={currentPage} onNavigate={handleNavigate} />
      )}

      {/* Checkout has its own header */}
      {currentPage === 'checkout' && (
        <div className="fixed top-0 left-0 right-0 z-40 px-4 py-4 bg-white/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <button onClick={() => handleNavigate('home')} className="flex flex-col items-center">
              <div className="flex items-end gap-0.5">
                <div className="w-2 h-4 bg-blue-600 rounded-full" />
                <div className="w-3 h-6 bg-blue-600 rounded-full" />
                <div className="w-2 h-4 bg-blue-600 rounded-full" />
              </div>
              <span className="text-blue-600 text-xs font-medium tracking-wider">filmkid</span>
            </button>
            <div className="flex items-center gap-2 text-blue-600">
              <div className="w-5 h-5 rounded-full border-2 border-blue-600 flex items-center justify-center text-xs font-bold">
                ✓
              </div>
              <span className="text-sm font-medium">Checkout</span>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className={currentPage === 'home' ? '' : 'pt-20'}>
        {renderPage()}
      </main>

      {/* Footer - Only show on non-checkout pages */}
      {currentPage !== 'checkout' && <Footer />}

      {/* Email Modal */}
      <EmailModal 
        isOpen={isEmailModalOpen} 
        onClose={() => setIsEmailModalOpen(false)} 
      />

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

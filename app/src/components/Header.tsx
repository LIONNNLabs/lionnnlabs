import { User, Lock } from 'lucide-react';
import { useCart } from '@/context/CartContext';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const navItems = [
  { id: 'sfx', label: 'SFX' },
  { id: 'color', label: 'COLOR' },
];

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const { totalItems, setIsCartOpen } = useCart();

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-8 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => onNavigate('home')}>
          <img
            src="/logo.png"
            alt="LIONNN LABS"
            className="h-7 md:h-10 w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
          />
        </button>

        {/* Transparent Navigation */}
        <nav className="nav-pill hidden md:flex items-center">
          {navItems.map((item, index) => (
            <div key={item.id} className="flex items-center">
              <button
                onClick={() => onNavigate(item.id)}
                className={`hover:opacity-80 transition-opacity tracking-[0.2em] px-6 text-white/80 hover:text-white uppercase ${
                  currentPage === item.id ? 'underline underline-offset-4 text-white' : ''
                }`}
              >
                {item.label}
              </button>
              {index < navItems.length - 1 && (
                <span className="text-white/40 select-none">•</span>
              )}
            </div>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => setIsCartOpen(true)}
            className="text-white/70 hover:text-white transition-colors duration-300 flex items-center gap-2 text-xs tracking-wider uppercase"
          >
            <Lock className="w-4 h-4" />
            <span>CART</span>
            {totalItems > 0 && (
              <span className="bg-white/20 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
          <button className="text-white/70 hover:text-white transition-colors duration-300 flex items-center gap-2 text-xs tracking-wider uppercase">
            <User className="w-4 h-4" />
            <span>LOG IN</span>
          </button>
        </div>
      </div>
    </header>
  );
}

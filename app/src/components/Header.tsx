import React from 'react';
import { User, Lock } from 'lucide-react';
import { useCart } from '@/context/CartContext';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const { totalItems, setIsCartOpen } = useCart();

  const navItems = [
    { id: 'sfx', label: 'SFX' },
    { id: 'color', label: 'COLOR' },
    { id: 'scribble', label: 'SCRIBBLE' },
    { id: 'vhs', label: 'VHS' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => onNavigate('home')}
          className="flex flex-col items-center gap-1 group"
        >
          <div className="flex items-end gap-0.5">
            <div className="w-2 h-4 bg-white rounded-full" />
            <div className="w-3 h-6 bg-white rounded-full" />
            <div className="w-2 h-4 bg-white rounded-full" />
          </div>
          <span className="text-white text-xs font-medium tracking-wider">filmkid</span>
        </button>

        {/* Navigation Pill */}
        <nav className="nav-pill hidden md:flex">
          {navItems.map((item, index) => (
            <React.Fragment key={item.id}>
              <button
                onClick={() => onNavigate(item.id)}
                className={`hover:opacity-80 transition-opacity ${
                  currentPage === item.id ? 'underline underline-offset-4' : ''
                }`}
              >
                {item.label}
              </button>
              {index < navItems.length - 1 && (
                <span className="text-white/60">•</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setIsCartOpen(true)}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            <Lock className="w-4 h-4" />
            <span>CART</span>
            {totalItems > 0 && (
              <span className="cart-badge static ml-1">{totalItems}</span>
            )}
          </button>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
            <User className="w-4 h-4" />
            <span>LOG IN</span>
          </button>
        </div>
      </div>
    </header>
  );
}

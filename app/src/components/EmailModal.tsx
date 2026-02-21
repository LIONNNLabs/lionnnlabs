import { useState } from 'react';
import { X } from 'lucide-react';

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EmailModal({ isOpen, onClose }: EmailModalProps) {
  const [email, setEmail] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    alert(`Thank you! Your discount code will be sent to ${email}`);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="bg-white rounded-lg p-8 max-w-md w-full mx-4 relative"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 left-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="flex items-end gap-0.5 mb-6">
            <div className="w-2 h-4 bg-black rounded-full" />
            <div className="w-3 h-6 bg-black rounded-full" />
            <div className="w-2 h-4 bg-black rounded-full" />
          </div>
          <span className="text-black text-xs font-medium tracking-wider mb-6">filmkid</span>

          {/* Title */}
          <h2 className="font-sketchy text-3xl text-blue-600 mb-2">
            UNLOCK 10% OFF
          </h2>

          {/* Description */}
          <p className="text-blue-600 font-medium mb-8">
            Enter your email to unlock your first discount and get early access to new tools.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="w-full space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              CONTINUE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

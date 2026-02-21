import { Instagram, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 px-4 py-4 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left - Copyright */}
        <div className="pointer-events-auto">
          <div className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-xs font-medium">
            <span>© Filmkid 2024</span>
            <span className="text-white/60">•</span>
            <button className="hover:underline">TERMS AND CONDITIONS</button>
          </div>
        </div>

        {/* Right - Social */}
        <div className="pointer-events-auto">
          <div className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-xs font-medium">
            <button className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Instagram className="w-3 h-3" />
              <span>INSTAGRAM</span>
            </button>
            <span className="text-white/60">•</span>
            <button className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail className="w-3 h-3" />
              <span>MAIL</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

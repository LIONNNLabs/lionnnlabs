import { Instagram, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="fixed bottom-2 left-0 right-0 z-40 px-6 py-6 pointer-events-none">
      <div className="w-full flex justify-between">
        {/* Left - Copyright */}
        <div className="pointer-events-auto">
          <div className="flex items-center gap-2 text-white text-xs font-medium">
            <span>© LionnnLabs 2026</span>
            <span className="text-white/60">•</span>
            <button className="hover:underline">TERMS AND CONDITIONS</button>
          </div>
        </div>

        {/* Right - Social */}
        <div className="pointer-events-auto">
          <div className="flex items-center gap-2 text-white text-xs font-medium">
<a
  href="https://www.instagram.com/_lionnn_____/"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 hover:opacity-80 transition-opacity"
>
  <Instagram className="w-3 h-3" />
  <span>INSTAGRAM</span>
</a>
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

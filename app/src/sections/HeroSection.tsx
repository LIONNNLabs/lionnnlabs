import { motion } from 'framer-motion';
import { User, Lock } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useState, useEffect, useRef } from 'react';

type PageId = 'sfx' | 'color';

interface HeroSectionProps {
  onNavigate: (page: Exclude<PageId, 'color'>) => void;
}

const navItems: { id: PageId; label: string }[] = [
  { id: 'sfx', label: 'SFX' },
  { id: 'color', label: 'COLOR' },
];

const VIMEO_VIDEO_ID = '748944647';

export function HeroSection({ onNavigate }: HeroSectionProps) {
  const { totalItems, setIsCartOpen } = useCart();
  const [videoLoaded, setVideoLoaded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    return () => {
      if (iframeRef.current) {
        iframeRef.current.src = '';
      }
    };
  }, []);

  return (
    <section className="relative w-screen h-screen overflow-hidden bg-black">
      {/* FULLSCREEN VIDEO BACKGROUND */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          ref={iframeRef}
          src={`https://player.vimeo.com/video/${VIMEO_VIDEO_ID}?background=1&autoplay=1&loop=1&muted=1&controls=0`}
          className="absolute inset-0 w-full h-full scale-125"
          style={{ 
            opacity: videoLoaded ? 1 : 0,
            transition: 'opacity 0.8s ease'
          }}
          allow="autoplay; fullscreen; picture-in-picture"
          title="Background Video"
          onLoad={() => setVideoLoaded(true)}
        />
      </div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40 md:bg-black/30 z-10" />

      {/* Subtle bottom gradient for text readability */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)'
        }}
      />

      {/* TOP BAR - Actions only */}
      <div className="absolute top-0 right-0 z-30 flex items-center gap-6 py-6 px-8">
        <motion.div
          className="flex items-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
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
        </motion.div>
      </div>

      {/* CENTER CONTENT - Logo + Navigation */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
        {/* Centered Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <img
            src="/logo.png"
            alt="LIONNN LABS"
            className="h-12 md:h-20 lg:h-24 w-auto object-contain brightness-0 invert"
          />
        </motion.div>

        {/* Vertical Navigation */}
        <motion.nav
          className="flex flex-col items-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              disabled={item.id === 'color'}
              onClick={() => {
                if (item.id !== 'color') {
                  onNavigate(item.id);
                }
              }}
              className={`text-sm font-light tracking-[0.3em] uppercase transition-all duration-300 ${
                item.id === 'color'
                  ? 'text-white/20 cursor-not-allowed'
                  : 'text-white/60 hover:text-white hover:scale-[1.03]'
              }`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              title={item.id === 'color' ? 'Coming soon' : `Browse ${item.label}`}
            >
              {item.id === 'color' ? 'COLOR | COMING SOON' : item.label}
            </motion.button>
          ))}
        </motion.nav>
      </div>
    </section>
  );
}
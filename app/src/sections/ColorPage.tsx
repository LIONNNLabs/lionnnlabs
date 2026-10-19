import { useState, useRef, useEffect } from 'react';
import { Play, User, Lock } from 'lucide-react';
import { motion } from 'framer-motion';
import { products, colorFAQs, beforeAfterImages } from '@/data/products';
import { useCart } from '@/context/CartContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface BeforeAfterSliderProps {
  before: string;
  after: string;
  alt: string;
}

function BeforeAfterSlider({ before, after, alt }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative aspect-video rounded-lg overflow-hidden cursor-ew-resize select-none"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
      onTouchMove={handleTouchMove}
    >
      <img
        src={before}
        alt={`${alt} before`}
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={after}
          alt={`${alt} after`}
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />
      </div>
      <div className="absolute top-4 left-4 bg-black/60 text-white text-xs px-2 py-1 rounded font-medium">BEFORE</div>
      <div className="absolute top-4 right-4 bg-black/60 text-white text-xs px-2 py-1 rounded font-medium">AFTER</div>
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-lg"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
          <div className="flex gap-1">
            <div className="w-0.5 h-4 bg-neutral-400" />
            <div className="w-0.5 h-4 bg-neutral-400" />
          </div>
        </div>
      </div>
    </div>
  );
}

interface ColorPageProps {
  onNavigate?: (page: string) => void;
}

const VIMEO_VIDEO_ID = '1112585023';

const navItems = [
  { id: 'color', label: 'POWERGRADE' },
  { id: 'sfx', label: 'SFX · SOON' },
];

export function ColorPage({ onNavigate }: ColorPageProps) {
  const { addToCart, totalItems, setIsCartOpen } = useCart();
  const powergrade = products.find(p => p.id === 'color-powergrade')!;

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden bg-black">
        <iframe
          src={`https://player.vimeo.com/video/${VIMEO_VIDEO_ID}?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1&controls=0&playsinline=1&portrait=0`}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: '177.78vh',
            height: '100vh',
            minWidth: '100vw',
            minHeight: '56.25vw',
            pointerEvents: 'none',
            border: 'none',
          }}
          allow="autoplay; fullscreen; picture-in-picture"
          title="Background Video"
        />

        {/* Subtle dark gradient overlay */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.5) 100%)'
          }}
        />

        {/* TRANSPARENT FLOATING NAVIGATION */}
        <motion.nav
          className="absolute top-0 left-0 right-0 z-30 flex items-center justify-center gap-12 py-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          {navItems.map((item, index) => (
            <div key={item.id} className="flex items-center">
              {item.id === 'sfx' ? (
                <span className="relative text-white/30 tracking-[0.25em] text-sm font-light uppercase cursor-not-allowed select-none">
                  {item.label}
                </span>
              ) : (
                <button
                  onClick={() => onNavigate?.(item.id)}
                  className="group relative text-white/80 hover:text-white transition-all duration-500 tracking-[0.25em] text-sm font-light uppercase"
                >
                  {item.label}
                  <span className="absolute inset-0 -m-3 bg-white/0 rounded-full blur-lg transition-all duration-500 group-hover:bg-white/10" />
                </button>
              )}
              {index < navItems.length - 1 && (
                <span className="text-white/40 select-none ml-12">•</span>
              )}
            </div>
          ))}
        </motion.nav>

        {/* Right Actions - Cart & Login */}
        <motion.div
          className="absolute top-0 right-0 z-30 flex items-center gap-6 py-6 px-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
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

        {/* Logo - Top Left */}
        <motion.div
          className="absolute top-0 left-0 z-30 py-6 px-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <button onClick={() => onNavigate?.('home')}>
            <img
              src="/logo.png"
              alt="Lionnn Labs"
              className="h-7 md:h-10 w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
            />
          </button>
        </motion.div>

        {/* HERO CONTENT */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-extralight text-white tracking-[0.15em] uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Lionnn Labs 16
          </motion.h1>

          <motion.p
            className="font-sketchy text-2xl text-white/90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            DAVINCI RESOLVE POWERGRADE
          </motion.p>

          <motion.button
            onClick={() => {
              const productsSection = document.getElementById('color-products');
              productsSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-neutral-200 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            BUY NOW
          </motion.button>

          <motion.p
            className="text-white/80 max-w-xl mt-8 text-sm text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {powergrade.description}
          </motion.p>
        </div>
      </div>

      {/* Product Info Section */}
      <section className="py-16 px-4 max-w-3xl mx-auto">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">{powergrade.name}</h3>
          <p className="text-neutral-400 mb-8">{powergrade.description}</p>
          <div className="flex justify-center">
            <div className="grid grid-cols-3 gap-2">
              {['CST IN', 'EXPOSURE', 'WB', 'FILM LOOK', 'PRINT', 'GRAIN'].map((label, i) => (
                <div key={i} className="w-20 h-12 bg-neutral-900 border border-neutral-800 rounded flex items-center justify-center">
                  <span className="text-[10px] text-white">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {beforeAfterImages.map((image) => (
            <BeforeAfterSlider
              key={image.id}
              before={image.before}
              after={image.after}
              alt={image.alt}
            />
          ))}
        </div>
      </section>

      {/* Products Section */}
      <section id="color-products" className="py-16 px-4 max-w-xl mx-auto">
        <div className="product-card bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden">
          <div className="relative h-56">
            <img src={powergrade.image} alt={powergrade.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
            <div className="absolute top-4 left-4">
              <span className="bg-lion-red text-white text-xs px-2 py-1 rounded">DaVinci Resolve</span>
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-white font-bold text-xl">{powergrade.name}</h3>
            </div>
          </div>
          <div className="p-6">
            <ul className="text-neutral-300 text-sm space-y-1 mb-6">
              {powergrade.includes?.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
            <p className="text-white font-bold text-3xl mb-4 text-center">${powergrade.price.toFixed(2)}</p>
            <button
              onClick={() => addToCart(powergrade)}
              className="bg-lion-red text-white px-8 py-3 rounded-lg font-medium hover:bg-lion-red-dark transition-colors w-full"
            >
              BUY NOW
            </button>
          </div>
        </div>
      </section>

      {/* Tutorial Video Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-white text-4xl md:text-6xl font-bold text-center">
              How To Use<br />Lionnn Labs 16
            </h3>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
              <Play className="w-8 h-8 text-black ml-1" />
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 max-w-3xl mx-auto">
        <h2 className="text-center mb-8">
          <span className="font-sketchy text-lion-red text-xl block">FREQUENTLY ASKED</span>
          <span className="text-white text-3xl font-bold">Questions</span>
        </h2>
        <Accordion type="single" collapsible className="space-y-2">
          {colorFAQs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id} className="border-b border-neutral-800">
              <AccordionTrigger className="text-white font-semibold text-left hover:no-underline py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-neutral-400 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </>
  );
}
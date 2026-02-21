import { useState, useRef, useEffect } from 'react';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { products, testimonials, colorFAQs, beforeAfterImages } from '@/data/products';
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
      onTouchMove={handleTouchMove}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
    >
      {/* Before Image (full) */}
      <img 
        src={before} 
        alt={`${alt} before`}
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />
      
      {/* After Image (clipped) */}
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

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-black/60 text-white text-xs px-2 py-1 rounded font-medium">
        BEFORE
      </div>
      <div className="absolute top-4 right-4 bg-black/60 text-white text-xs px-2 py-1 rounded font-medium">
        AFTER
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-lg"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
          <div className="flex gap-1">
            <div className="w-0.5 h-4 bg-gray-400" />
            <div className="w-0.5 h-4 bg-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
}

interface ColorPageProps {
  onNavigate?: (page: string) => void;
}

export function ColorPage({ onNavigate: _onNavigate }: ColorPageProps) {
  const { addToCart } = useCart();
  const colorProducts = products.filter(p => p.category === 'color');

  return (
    <div className="min-h-screen bg-neutral-100">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1600&q=80)',
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        {/* Torn Edge Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-20">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full h-full" preserveAspectRatio="none">
            <path 
              d="M0,80 L0,40 Q60,50 120,30 T240,40 T360,30 T480,40 T600,30 T720,40 T840,30 T960,40 T1080,30 T1200,40 T1320,30 T1440,40 L1440,80 Z" 
              fill="#f5f5f5"
            />
          </svg>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Filmkid 16
          </motion.h1>
          <motion.p 
            className="font-sketchy text-2xl text-white/90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            POWERGRADE & LUT
          </motion.p>
          <motion.button
            onClick={() => {
              const productsSection = document.getElementById('color-products');
              productsSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            BUY NOW
          </motion.button>
          <motion.p 
            className="text-white/80 max-w-xl mt-8 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Filmkid 16 brings a classic 16mm film look to any editing software. Simply drag and drop to add cinematic grain and color to your footage, achieving a vintage aesthetic in modern digital formats.
          </motion.p>
        </div>
      </section>

      {/* Product Info Section */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* LUT Info */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Filmkid 16 LUT</h3>
            <p className="text-blue-500 mb-8">
              Simple drag and drop the LUT for any video editing software. Works with Premiere Pro, After Effects, Final Cut and Cap Cut.
            </p>
            <div className="flex justify-center">
              <div className="w-32 h-32 bg-blue-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="flex items-end gap-1 justify-center mb-2">
                    <div className="w-3 h-6 bg-blue-600 rounded" />
                    <div className="w-4 h-10 bg-blue-600 rounded" />
                    <div className="w-3 h-6 bg-blue-600 rounded" />
                  </div>
                  <span className="text-xs text-blue-600">Filmkid 16.Cube</span>
                </div>
              </div>
            </div>
          </div>

          {/* Powergrade Info */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Filmkid 16 Powergrade</h3>
            <p className="text-blue-500 mb-8">
              Our custom Davinci resolve powergrade made for even more control and customization over your final look.
            </p>
            <div className="flex justify-center">
              <div className="grid grid-cols-3 gap-2">
                {['CONV', 'EXP', 'WB', 'FK-LAB', 'FK-PRINT', 'SPLIT'].map((label, i) => (
                  <div key={i} className="w-16 h-12 bg-gray-800 rounded flex items-center justify-center">
                    <span className="text-xs text-white">{label}</span>
                  </div>
                ))}
              </div>
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

      {/* Testimonials Section */}
      <section className="bg-blue-600 py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {testimonials.slice(3, 6).map((testimonial) => (
            <div key={testimonial.id} className="text-center text-white">
              <img 
                src={testimonial.avatar} 
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="font-bold uppercase tracking-wider">{testimonial.handle}</h4>
              <p className="text-xs uppercase tracking-wider text-white/70 mb-4">{testimonial.role}</p>
              <p className="text-sm leading-relaxed">{testimonial.content}</p>
              <div className="mt-4">
                <div className="flex items-end gap-0.5 justify-center">
                  <div className="w-1.5 h-3 bg-white rounded-full" />
                  <div className="w-2 h-5 bg-white rounded-full" />
                  <div className="w-1.5 h-3 bg-white rounded-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Products Section */}
      <section id="color-products" className="py-16 px-4 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {colorProducts.map((product) => (
            <div key={product.id} className="product-card bg-gray-900 rounded-lg overflow-hidden">
              <div className="relative h-56">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                
                {/* Software Icons */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {product.id === 'color-lut' ? (
                    <>
                      <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">Ae</span>
                      <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded">Pr</span>
                      <span className="bg-pink-600 text-white text-xs px-2 py-1 rounded">Fc</span>
                    </>
                  ) : (
                    <span className="bg-orange-600 text-white text-xs px-2 py-1 rounded">DaVinci</span>
                  )}
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-xl mb-2">{product.name}</h3>
                  {product.includes && (
                    <ul className="text-gray-300 text-xs space-y-1">
                      {product.includes.slice(0, 4).map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              <div className="p-4 text-center">
                <p className="text-white text-3xl font-bold mb-4">$ {product.price.toFixed(2)}</p>
                <button
                  onClick={() => addToCart(product)}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  BUY NOW
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bundle Card */}
        <div className="mt-8">
          <div className="product-card bg-black rounded-lg overflow-hidden max-w-3xl mx-auto">
            <div className="p-8 text-center">
              <h3 className="text-white font-bold text-2xl mb-4">Filmkid 16 Complete Bundle</h3>
              <p className="text-gray-400 mb-6">Get both the LUT and Powergrade for the ultimate film look workflow</p>
              <div className="flex justify-center gap-8 mb-6">
                <div className="text-center">
                  <p className="text-gray-500 line-through">$218.00</p>
                  <p className="text-white text-4xl font-bold">$149.00</p>
                </div>
              </div>
              <button
                onClick={() => {
                  addToCart(colorProducts[0]);
                  addToCart(colorProducts[1]);
                }}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                BUY BUNDLE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tutorial Video Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-white text-4xl md:text-6xl font-bold text-center">
              How To Use<br />Filmkid 16
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
          <span className="font-sketchy text-blue-600 text-xl block">FREQUENTLY ASKED</span>
          <span className="text-blue-600 text-3xl font-bold">Questions</span>
        </h2>
        <Accordion type="single" collapsible className="space-y-2">
          {colorFAQs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id} className="border-b border-gray-300">
              <AccordionTrigger className="text-blue-600 font-semibold text-left hover:no-underline py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
}

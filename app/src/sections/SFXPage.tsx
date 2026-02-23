import { useState } from 'react';
import { Play, Pause, User, Lock } from 'lucide-react';
import { motion } from 'framer-motion';
import { products, audioSamples, testimonials, sfxFAQs } from '@/data/products';
import { useCart } from '@/context/CartContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface SFXPageProps {
  onNavigate?: (page: string) => void;
}

const VIMEO_VIDEO_ID = '1112585023';

const navItems = [
  { id: 'sfx', label: 'SFX' },
  { id: 'color', label: 'COLOR' },
];

export function SFXPage({ onNavigate }: SFXPageProps) {
  const { addToCart, totalItems, setIsCartOpen } = useCart();
  const [playingSample, setPlayingSample] = useState<string | null>(null);

  const togglePlay = (sampleId: string) => {
    if (playingSample === sampleId) {
      setPlayingSample(null);
    } else {
      setPlayingSample(sampleId);
    }
  };

  const sfxProducts = products.filter(p => p.category === 'sfx');

  return (
    <div className="min-h-screen bg-neutral-100">
      {/* CINEMATIC FULLSCREEN HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* FULLSCREEN VIDEO BACKGROUND */}
        <div className="absolute inset-0 w-full h-full bg-black">
          <iframe
            src={`https://player.vimeo.com/video/${VIMEO_VIDEO_ID}?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1&controls=0&playsinline=1&portrait=0&dnt=1`}
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
            title="SFX Background Video"
          />
        </div>

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
              <button
                onClick={() => onNavigate?.(item.id)}
                className={`group relative text-white/80 hover:text-white transition-all duration-500 tracking-[0.25em] text-sm font-light uppercase ${
                  item.id === 'sfx' ? 'text-white' : ''
                }`}
              >
                {item.label}
                <span className="absolute inset-0 -m-3 bg-white/0 rounded-full blur-lg transition-all duration-500 group-hover:bg-white/10" />
              </button>
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
            Lionnn Labs SFX
          </motion.h1>
          <motion.p 
            className="font-sketchy text-2xl text-white/90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            CUSTOM SOUND ELEMENTS
          </motion.p>
          <motion.button
            onClick={() => {
              const productsSection = document.getElementById('sfx-products');
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
            A drag and drop SFX pack that elevates any project with immersive, cinematic sound - seamlessly enhancing your visuals.
          </motion.p>
        </div>
      </section>

      {/* Audio Samples Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {audioSamples.map((sample) => (
            <div key={sample.id} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
              {/* Play Button */}
              <button
                onClick={() => togglePlay(sample.id)}
                className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors flex-shrink-0"
              >
                {playingSample === sample.id ? (
                  <Pause className="w-5 h-5" />
                ) : (
                  <Play className="w-5 h-5 ml-0.5" />
                )}
              </button>

              {/* Sample Info */}
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-blue-600">{sample.name}</h4>
                <p className="text-xs text-blue-400 uppercase tracking-wider">{sample.pack}</p>
              </div>

              {/* Waveform */}
              <div className="flex items-center gap-0.5 h-10 flex-1">
                {sample.waveform.map((height, i) => (
                  <div
                    key={i}
                    className={`flex-1 bg-blue-400 rounded-full transition-all duration-300 ${
                      playingSample === sample.id ? 'waveform-bar' : ''
                    }`}
                    style={{
                      height: `${height}%`,
                      animationDelay: `${i * 0.05}s`
                    }}
                  />
                ))}
              </div>

              {/* Duration */}
              <span className="text-sm text-blue-600 font-medium">{sample.duration}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200&q=80"
            alt="SFX Demo"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
              <Play className="w-8 h-8 text-black ml-1" />
            </button>
          </div>
          <div className="absolute bottom-4 left-4 right-4 text-center">
            <p className="text-white font-medium">Lionnn Labs Presents</p>
          </div>
        </div>
        <p className="text-center text-blue-600 font-medium mt-4">Lionnn Labs SFX Demo</p>
      </section>

      {/* Testimonials Section */}
      <section className="bg-blue-600 py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial) => (
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
      <section id="sfx-products" className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {sfxProducts.filter(p => p.id !== 'sfx-bundle').map((product) => (
            <div key={product.id} className="product-card bg-gray-900 rounded-lg overflow-hidden">
              <div className="relative h-48">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg">{product.name}</h3>
                  {/* Waveform decoration */}
                  <div className="flex items-center gap-0.5 h-6 mt-2 opacity-60">
                    {Array.from({ length: 20 }).map((_, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-white rounded-full"
                        style={{ height: `${Math.random() * 80 + 20}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-4 text-center">
                <p className="text-gray-400 text-sm mb-4">{product.description}</p>
                <p className="text-white text-2xl font-bold mb-4">$ {product.price.toFixed(2)}</p>
                <button
                  onClick={() => addToCart(product)}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors w-full"
                >
                  BUY NOW
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bundle Card */}
        {sfxProducts.filter(p => p.id === 'sfx-bundle').map((bundle) => (
          <div key={bundle.id} className="mt-6 max-w-2xl mx-auto">
            <div className="product-card bg-gray-800 rounded-lg overflow-hidden">
              <div className="relative h-48">
                <img 
                  src={bundle.image} 
                  alt={bundle.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  {/* Waveform decoration */}
                  <div className="flex items-center gap-0.5 h-8 mb-2 justify-center opacity-60">
                    {Array.from({ length: 30 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-1 bg-white rounded-full"
                        style={{ height: `${Math.random() * 80 + 20}%` }}
                      />
                    ))}
                  </div>
                  <h3 className="text-white font-bold text-xl">{bundle.name}</h3>
                  <p className="text-gray-300 text-sm">{bundle.description}</p>
                </div>
              </div>
              <div className="p-4 text-center">
                <p className="text-white text-3xl font-bold mb-4">$ {bundle.price.toFixed(2)}</p>
                <button
                  onClick={() => addToCart(bundle)}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  BUY NOW
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 max-w-3xl mx-auto">
        <h2 className="text-center mb-8">
          <span className="font-sketchy text-blue-600 text-xl block">FREQUENTLY ASKED</span>
          <span className="text-blue-600 text-3xl font-bold">Questions</span>
        </h2>
        <Accordion type="single" collapsible className="space-y-2">
          {sfxFAQs.map((faq) => (
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

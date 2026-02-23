import { motion } from 'framer-motion';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

interface ScribblePageProps {
  onNavigate?: (page: string) => void;
}

export function ScribblePage({ onNavigate: _onNavigate }: ScribblePageProps) {
  const { addToCart } = useCart();
  const scribbleProducts = products.filter(p => p.category === 'scribble');

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
            Lionnn Labs Scribble
          </motion.h1>
          <motion.p 
            className="font-sketchy text-2xl text-white/90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            HAND-DRAWN ELEMENTS
          </motion.p>
          <motion.button
            onClick={() => {
              const productsSection = document.getElementById('scribble-products');
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
            Add a personal, artistic touch to your videos with our collection of hand-drawn scribble elements and doodles.
          </motion.p>
        </div>
      </section>

      {/* Products Section */}
      <section id="scribble-products" className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scribbleProducts.map((product) => (
            <div key={product.id} className="product-card bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-48">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg">{product.name}</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                {product.features && (
                  <ul className="text-sm text-gray-500 space-y-1 mb-4">
                    {product.features.map((feature, i) => (
                      <li key={i}>• {feature}</li>
                    ))}
                  </ul>
                )}
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-bold text-gray-900">$ {product.price.toFixed(2)}</p>
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    BUY NOW
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon Card */}
        <div className="mt-8">
          <div className="bg-gray-200 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-600 mb-2">More Scribble Packs Coming Soon</h3>
            <p className="text-gray-500">Sign up for our newsletter to be the first to know!</p>
          </div>
        </div>
      </section>
    </div>
  );
}

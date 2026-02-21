import { useState } from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  onNavigate: (page: string) => void;
  onOpenEmailModal: () => void;
}

const categories = [
  {
    id: 'sfx',
    name: 'SFX',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80',
    description: 'Sound effects'
  },
  {
    id: 'color',
    name: 'COLOR',
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80',
    description: 'Color grading'
  },
  {
    id: 'scribble',
    name: 'SCRIBBLE',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80',
    description: 'Hand-drawn elements'
  },
  {
    id: 'vhs',
    name: 'VHS',
    image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&q=80',
    description: 'Retro effects'
  }
];

export function HeroSection({ onNavigate, onOpenEmailModal }: HeroSectionProps) {
  const [hoveredPanel, setHoveredPanel] = useState<string | null>(null);

  return (
    <section className="h-screen w-full relative overflow-hidden">
      {/* Four Panel Layout */}
      <div className="flex h-full">
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            className="relative flex-1 h-full cursor-pointer overflow-hidden hero-panel"
            style={{
              backgroundImage: `url(${category.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            onMouseEnter={() => setHoveredPanel(category.id)}
            onMouseLeave={() => setHoveredPanel(null)}
            onClick={() => onNavigate(category.id)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40 transition-all duration-300" 
              style={{
                backgroundColor: hoveredPanel === category.id ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.5)'
              }}
            />

            {/* Torn Edge Effect (between panels) */}
            {index < categories.length - 1 && (
              <div 
                className="absolute right-0 top-0 bottom-0 w-8 z-10"
                style={{
                  background: 'linear-gradient(to right, transparent, rgba(0,0,0,0.3) 50%, transparent)',
                  clipPath: 'polygon(0 0, 100% 5%, 0 10%, 100% 15%, 0 20%, 100% 25%, 0 30%, 100% 35%, 0 40%, 100% 45%, 0 50%, 100% 55%, 0 60%, 100% 65%, 0 70%, 100% 75%, 0 80%, 100% 85%, 0 90%, 100% 95%, 0 100%)'
                }}
              />
            )}

            {/* Category Label */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="relative"
                animate={{
                  scale: hoveredPanel === category.id ? 1.1 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Hand-drawn circle outline */}
                <svg 
                  className="absolute -inset-8 w-[calc(100%+64px)] h-[calc(100%+64px)]"
                  viewBox="0 0 200 80"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M10,40 Q10,10 50,10 Q100,5 150,10 Q190,10 190,40 Q190,70 150,70 Q100,75 50,70 Q10,70 10,40"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ 
                      pathLength: hoveredPanel === category.id ? 1 : 0,
                      opacity: hoveredPanel === category.id ? 1 : 0
                    }}
                    transition={{ duration: 0.5 }}
                  />
                </svg>
                <h2 className="text-white text-3xl md:text-4xl font-bold tracking-wider">
                  {category.name}
                </h2>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Center CTA Button */}
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <button
          onClick={onOpenEmailModal}
          className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium text-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg"
        >
          Get 10% Off
        </button>
      </motion.div>
    </section>
  );
}

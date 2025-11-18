import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: 'Spring Collection 2025',
    subtitle: 'Elegance Redefined',
    description: 'Discover timeless pieces that elevate your wardrobe',
    image: 'https://images.unsplash.com/photo-1613909671501-f9678ffc1d33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwbW9kZWx8ZW58MXx8fHwxNzYzMzkyMTcwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    cta: 'Shop Collection',
  },
  {
    id: 2,
    title: 'Premium Essentials',
    subtitle: 'Minimalist Luxury',
    description: 'Curated designs for the modern individual',
    image: 'https://images.unsplash.com/photo-1542219550-2da790bf52e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwZmFzaGlvbiUyMGNsb3RoaW5nfGVufDF8fHx8MTc2MzM3MTQxOHww&ixlib=rb-4.1.0&q=80&w=1080',
    cta: 'Explore Now',
  },
  {
    id: 3,
    title: 'Designer Exclusives',
    subtitle: 'Limited Edition',
    description: 'Unique pieces crafted for distinction',
    image: 'https://images.unsplash.com/photo-1759090988109-2ed7abd1eefc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGRyZXNzJTIwZWxlZ2FuY2V8ZW58MXx8fHwxNzYzNDI0OTgxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    cta: 'View Collection',
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen overflow-hidden bg-gray-50">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Background Image with Parallax */}
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: 'linear' }}
          >
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.3), rgba(0,0,0,0.1)), url(${slides[currentSlide].image})`,
              }}
            />
          </motion.div>

          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-2xl">
                {/* Floating Sparkle Icon */}
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Sparkles className="w-12 h-12 text-white" />
                  </motion.div>
                </motion.div>

                <motion.div
                  className="text-sm tracking-widest text-white/90 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  {slides[currentSlide].subtitle}
                </motion.div>

                <motion.h2
                  className="text-6xl md:text-7xl lg:text-8xl text-white mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  {slides[currentSlide].title}
                </motion.h2>

                <motion.p
                  className="text-xl text-white/90 mb-8 max-w-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  {slides[currentSlide].description}
                </motion.p>

                <motion.button
                  className="group relative px-8 py-4 bg-white text-gray-900 overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 tracking-wider">
                    {slides[currentSlide].cta}
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gray-900"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white z-20 tracking-wider">
                    {slides[currentSlide].cta}
                  </span>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 sm:px-6 lg:px-8 pointer-events-none">
        <motion.button
          className="p-3 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-colors pointer-events-auto"
          onClick={prevSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>
        <motion.button
          className="p-3 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-colors pointer-events-auto"
          onClick={nextSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-12 left-0 right-0 flex justify-center space-x-3">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'w-12 bg-white' : 'w-6 bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </div>
    </div>
  );
}

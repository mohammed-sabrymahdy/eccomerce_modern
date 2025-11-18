import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Fashion Enthusiast',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    rating: 5,
    text: 'Absolutely love the quality and style! Every piece I ordered exceeded my expectations. The attention to detail is remarkable.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Professional Stylist',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    rating: 5,
    text: 'As a stylist, I recommend LUXE to all my clients. The premium quality and timeless designs make it my go-to destination.',
  },
  {
    id: 3,
    name: 'Emma Williams',
    role: 'Boutique Owner',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    rating: 5,
    text: 'The customer service is outstanding, and the products are simply stunning. LUXE has become my favorite brand for luxury fashion.',
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <motion.div
        className="absolute top-10 right-10 w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-50"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-80 h-80 bg-pink-100 rounded-full blur-3xl opacity-50"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">What Our Clients Say</h2>
          <p className="text-xl text-gray-600">Trusted by fashion lovers worldwide</p>
        </motion.div>

        <div className="relative">
          {/* Quote Icon */}
          <motion.div
            className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-0"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 0.1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Quote className="w-32 h-32 text-gray-900" />
          </motion.div>

          {/* Testimonial Cards */}
          <div className="relative min-h-[400px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="w-full"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-8 md:p-12 relative border border-gray-100">
                  {/* Avatar with Glow */}
                  <div className="flex justify-center mb-8">
                    <div className="relative">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-lg"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                        }}
                      />
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="relative w-24 h-24 rounded-full object-cover border-4 border-white shadow-xl"
                      />
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex justify-center space-x-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Star className="w-6 h-6 text-yellow-400 fill-current" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-xl text-gray-700 text-center mb-8 leading-relaxed">
                    "{testimonials[currentIndex].text}"
                  </p>

                  {/* Author */}
                  <div className="text-center">
                    <h4 className="text-xl text-gray-900 mb-1">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-500">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <motion.button
              onClick={prev}
              className="p-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'w-8 bg-gray-900' : 'w-2 bg-gray-300'
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>

            <motion.button
              onClick={next}
              className="p-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}

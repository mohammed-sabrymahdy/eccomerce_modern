import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Tag, Zap, Gift } from 'lucide-react';

export function SpecialOffers() {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 32,
    seconds: 45,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const offers = [
    {
      icon: Tag,
      title: 'Flash Sale',
      discount: 'Up to 50% OFF',
      description: 'Limited time offer on selected items',
      gradient: 'from-pink-500 to-rose-500',
      glow: 'shadow-pink-500/50',
    },
    {
      icon: Zap,
      title: 'Season Sale',
      discount: '30% OFF',
      description: 'New arrivals at amazing prices',
      gradient: 'from-purple-500 to-indigo-500',
      glow: 'shadow-purple-500/50',
    },
    {
      icon: Gift,
      title: 'Free Shipping',
      discount: 'On orders $100+',
      description: 'Worldwide delivery available',
      gradient: 'from-cyan-500 to-blue-500',
      glow: 'shadow-cyan-500/50',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-white">Special Offers</h2>
          <p className="text-xl text-gray-300">Don't miss out on these exclusive deals</p>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <p className="text-gray-300 mb-4">Offer ends in</p>
            <div className="flex justify-center space-x-4">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Minutes', value: timeLeft.minutes },
                { label: 'Seconds', value: timeLeft.seconds },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 min-w-[100px]">
                    <motion.div
                      className="text-4xl md:text-5xl text-white mb-2"
                      key={item.value}
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {String(item.value).padStart(2, '0')}
                    </motion.div>
                    <div className="text-sm text-gray-400">{item.label}</div>
                  </div>
                  {/* Glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl blur-xl -z-10"
                    animate={{
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Offer Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              className={`relative bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 overflow-hidden group cursor-pointer`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${offer.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

              {/* Icon */}
              <motion.div
                className={`inline-flex p-4 bg-gradient-to-br ${offer.gradient} rounded-2xl mb-6`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <offer.icon className="w-8 h-8 text-white" />
              </motion.div>

              {/* Content */}
              <h3 className="text-2xl text-white mb-2">{offer.title}</h3>
              <div className={`text-3xl bg-gradient-to-r ${offer.gradient} bg-clip-text text-transparent mb-4`}>
                {offer.discount}
              </div>
              <p className="text-gray-400 mb-6">{offer.description}</p>

              {/* CTA Button */}
              <motion.button
                className="w-full py-3 bg-white/10 backdrop-blur-md text-white rounded-xl hover:bg-white/20 transition-colors border border-white/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Shop Now
              </motion.button>

              {/* Glow Effect */}
              <motion.div
                className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${offer.gradient} rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { Shirt, Watch, ShoppingBag, Gem } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: 'Apparel',
    count: '240+ Items',
    icon: Shirt,
    image: 'https://images.unsplash.com/photo-1655286881878-86ac4b984871?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXN1YWwlMjBmYXNoaW9uJTIwd2VhcnxlbnwxfHx8fDE3NjMzNjgxOTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    id: 2,
    name: 'Accessories',
    count: '180+ Items',
    icon: Gem,
    image: 'https://images.unsplash.com/photo-1569388330338-53ecda03dfa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYWNjZXNzb3JpZXMlMjBqZXdlbHJ5fGVufDF8fHx8MTc2MzM4MzM3Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    id: 3,
    name: 'Handbags',
    count: '120+ Items',
    icon: ShoppingBag,
    image: 'https://images.unsplash.com/photo-1758171692659-024183c2c272?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGhhbmRiYWclMjBsdXh1cnl8ZW58MXx8fHwxNzYzMzk3NDQyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    gradient: 'from-amber-500/20 to-orange-500/20',
  },
  {
    id: 4,
    name: 'Watches',
    count: '90+ Items',
    icon: Watch,
    image: 'https://images.unsplash.com/photo-1548171915-e79a380a2a4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwd2F0Y2glMjBsdXh1cnl8ZW58MXx8fHwxNzYzNDI0OTgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    gradient: 'from-emerald-500/20 to-teal-500/20',
  },
];

export function CategoryCards() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">Shop by Category</h2>
          <p className="text-xl text-gray-600">Explore our curated collections</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Glass Card */}
              <div className="relative h-96 overflow-hidden rounded-2xl">
                {/* Background Image */}
                <motion.div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${category.image})` }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />

                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} backdrop-blur-[2px]`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-6">
                  {/* Icon */}
                  <motion.div
                    className="self-start p-3 bg-white/20 backdrop-blur-md rounded-xl"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <category.icon className="w-6 h-6 text-white" />
                  </motion.div>

                  {/* Text */}
                  <div>
                    <h3 className="text-2xl text-white mb-2">{category.name}</h3>
                    <p className="text-white/90 text-sm">{category.count}</p>
                  </div>
                </div>

                {/* Hover Border Glow */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-white/0 group-hover:border-white/40 transition-colors duration-300"
                  initial={false}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

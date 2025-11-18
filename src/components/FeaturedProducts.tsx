import { motion } from 'motion/react';
import { ShoppingCart, Heart, Eye } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const products = [
  {
    id: 1,
    name: 'Classic White Sneakers',
    price: 129,
    category: 'Footwear',
    image: 'https://images.unsplash.com/photo-1759542890353-35f5568c1c90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwc25lYWtlcnMlMjB3aGl0ZXxlbnwxfHx8fDE3NjM0MjQ5ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tag: 'New',
  },
  {
    id: 2,
    name: 'Luxury Designer Dress',
    price: 499,
    category: 'Women',
    image: 'https://images.unsplash.com/photo-1759090988109-2ed7abd1eefc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGRyZXNzJTIwZWxlZ2FuY2V8ZW58MXx8fHwxNzYzNDI0OTgxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    tag: 'Exclusive',
  },
  {
    id: 3,
    name: 'Premium Leather Handbag',
    price: 349,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1758171692659-024183c2c272?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGhhbmRiYWclMjBsdXh1cnl8ZW58MXx8fHwxNzYzMzk3NDQyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    tag: 'Trending',
  },
  {
    id: 4,
    name: 'Minimalist Watch',
    price: 279,
    category: 'Watches',
    image: 'https://images.unsplash.com/photo-1548171915-e79a380a2a4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwd2F0Y2glMjBsdXh1cnl8ZW58MXx8fHwxNzYzNDI0OTgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    tag: 'Hot',
  },
  {
    id: 5,
    name: 'Gold Statement Necklace',
    price: 199,
    category: 'Jewelry',
    image: 'https://images.unsplash.com/photo-1569388330338-53ecda03dfa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYWNjZXNzb3JpZXMlMjBqZXdlbHJ5fGVufDF8fHx8MTc2MzM4MzM3Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    tag: 'Sale',
  },
  {
    id: 6,
    name: 'Casual Summer Outfit',
    price: 159,
    category: 'Clothing',
    image: 'https://images.unsplash.com/photo-1655286881878-86ac4b984871?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXN1YWwlMjBmYXNoaW9uJTIwd2VhcnxlbnwxfHx8fDE3NjMzNjgxOTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tag: 'New',
  },
];

export function FeaturedProducts() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">Featured Products</h2>
          <p className="text-xl text-gray-600">Handpicked favorites for you</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -12 }}
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden bg-gray-100">
                <motion.div
                  className="w-full h-full"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-900 text-sm rounded-full">
                    {product.tag}
                  </span>
                </div>

                {/* Hover Actions */}
                <motion.div
                  className="absolute top-4 right-4 flex flex-col space-y-2"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.button
                    className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-900 hover:text-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Heart className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-900 hover:text-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Eye className="w-5 h-5" />
                  </motion.button>
                </motion.div>

                {/* Add to Cart - Slides up on hover */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent"
                  initial={{ y: 100 }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.button
                    className="w-full py-3 bg-white text-gray-900 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-900 hover:text-white transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ShoppingCart className="w-5 h-5" />
                    <span>Add to Cart</span>
                  </motion.button>
                </motion.div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                <h3 className="text-xl text-gray-900 mb-3">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-2xl text-gray-900">${product.price}</span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

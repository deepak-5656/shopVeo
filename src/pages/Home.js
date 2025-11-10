import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaShippingFast,
  FaLock,
  FaUndo,
  FaHeadset,
  FaArrowRight,
  FaStar,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';
import { products } from '../data/mockData';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const featuredProducts = products.slice(0, 4);

  const features = [
    {
      icon: FaShippingFast,
      title: 'Free Shipping',
      description: 'On orders above ₹300',
      color: 'bg-green-500'
    },
    {
      icon: FaLock,
      title: 'Secure Payment',
      description: '100% secure transactions',
      color: 'bg-green-500',
    },
    {
      icon: FaUndo,
      title: 'Easy Returns',
      description: '10-day return policy',
      color: 'bg-orange-500',
    },
    {
      icon: FaHeadset,
      title: '24/7 Support',
      description: 'Dedicated support team',
      color: 'bg-purple-500',
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-500 to-primary-700 text-white overflow-hidden w-full">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-800"></div>
        </div>
        
        <div className="container mx-auto px-4 py-12 md:py-20 relative z-10 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center md:text-left w-full"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight break-words">
                Welcome to
                <span className="block text-accent mt-2">ShopVio</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-primary-100 break-words">
                Discover amazing products at unbeatable prices. Shop the latest trends with exclusive deals up to 70% OFF!
              </p>
              
              {/* Social Media Follow Section */}
              <div className="mb-6 md:mb-8">
                <p className="text-sm md:text-base text-white/90 mb-3">
                  Follow us for more updates:
                </p>
                <div className="flex gap-3 justify-center md:justify-start">
                  <motion.a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-primary-600 transition-all"
                  >
                    <FaFacebook size={18} />
                  </motion.a>
                  <motion.a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-primary-600 transition-all"
                  >
                    <FaTwitter size={18} />
                  </motion.a>
                  <motion.a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-primary-600 transition-all"
                  >
                    <FaInstagram size={18} />
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-primary-600 transition-all"
                  >
                    <FaLinkedin size={18} />
                  </motion.a>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start w-full">
                <Link to="/shop" className="w-full sm:w-auto">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto bg-white text-primary-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                  >
                    Shop Now
                    <FaArrowRight />
                  </motion.button>
                </Link>
                <Link to="/about" className="w-full sm:w-auto">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold hover:bg-white hover:text-primary-600 transition-all whitespace-nowrap"
                  >
                    Learn More
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden md:block"
            >
              <div className="relative">
                <svg viewBox="0 0 600 500" className="w-full h-auto drop-shadow-2xl">
                  {/* Background blob */}
                  <ellipse cx="300" cy="250" rx="280" ry="220" fill="#93C5FD" opacity="0.3"/>
                  
                  {/* Phone/Tablet */}
                  <rect x="80" y="120" width="180" height="280" rx="20" fill="#1E293B"/>
                  <rect x="95" y="145" width="150" height="230" rx="10" fill="#E0E7FF"/>
                  <text x="170" y="180" textAnchor="middle" fill="#6366F1" fontSize="14" fontWeight="bold">ONLINE</text>
                  <text x="170" y="200" textAnchor="middle" fill="#6366F1" fontSize="14" fontWeight="bold">SHOPPING</text>
                  
                  {/* Shopping Cart - main feature */}
                  <g transform="translate(320, 200)">
                    <path d="M 0 40 L 15 40 L 25 80 L 115 80 L 125 40 L 140 40" stroke="#4F46E5" strokeWidth="6" fill="none" strokeLinecap="round"/>
                    <line x1="30" y1="40" x2="110" y2="40" stroke="#4F46E5" strokeWidth="6" strokeLinecap="round"/>
                    <line x1="35" y1="55" x2="105" y2="55" stroke="#4F46E5" strokeWidth="6" strokeLinecap="round"/>
                    <circle cx="45" cy="100" r="12" fill="#4F46E5"/>
                    <circle cx="95" cy="100" r="12" fill="#4F46E5"/>
                    
                    {/* Boxes in cart */}
                    <rect x="35" y="20" width="30" height="30" rx="3" fill="#EF4444"/>
                    <rect x="70" y="25" width="28" height="28" rx="3" fill="#F59E0B"/>
                    <line x1="50" y1="20" x2="50" y2="50" stroke="#DC2626" strokeWidth="2"/>
                    <line x1="35" y1="35" x2="65" y2="35" stroke="#DC2626" strokeWidth="2"/>
                  </g>
                  
                  {/* Shopping Bags - colorful */}
                  <g transform="translate(420, 120)">
                    <rect x="0" y="30" width="70" height="90" rx="5" fill="#312E81"/>
                    <path d="M 15 30 Q 15 10, 35 10 Q 55 10, 55 30" stroke="#312E81" strokeWidth="4" fill="none"/>
                    <circle cx="35" cy="60" r="8" fill="white" opacity="0.3"/>
                  </g>
                  
                  <g transform="translate(360, 140)">
                    <rect x="0" y="30" width="60" height="80" rx="5" fill="#10B981"/>
                    <path d="M 12 30 Q 12 12, 30 12 Q 48 12, 48 30" stroke="#10B981" strokeWidth="4" fill="none"/>
                  </g>
                  
                  {/* Packages/Gift boxes */}
                  <g transform="translate(280, 80)">
                    <rect x="0" y="15" width="45" height="45" rx="4" fill="#F97316"/>
                    <rect x="18" y="0" width="9" height="60" fill="#EA580C"/>
                    <rect x="0" y="27" width="45" height="9" fill="#EA580C"/>
                  </g>
                  
                  <g transform="translate(340, 60)">
                    <rect x="0" y="10" width="38" height="38" rx="4" fill="#3B82F6"/>
                    <rect x="16" y="0" width="6" height="48" fill="#2563EB"/>
                    <rect x="0" y="22" width="38" height="6" fill="#2563EB"/>
                  </g>
                  
                  {/* Location Pin */}
                  <g transform="translate(500, 80)">
                    <path d="M 0 0 C -15 -25, 15 -25, 0 0 C 0 0, 0 15, 0 15 Z" fill="#EF4444"/>
                    <circle cx="0" cy="-12" r="6" fill="white"/>
                  </g>
                  
                  {/* Credit Card */}
                  <g transform="translate(90, 350)">
                    <rect x="0" y="0" width="100" height="60" rx="8" fill="#6366F1"/>
                    <rect x="0" y="15" width="100" height="12" fill="#312E81"/>
                    <rect x="10" y="35" width="30" height="5" rx="2" fill="#C7D2FE"/>
                    <rect x="10" y="45" width="40" height="5" rx="2" fill="#C7D2FE"/>
                    <circle cx="85" cy="42" r="8" fill="#FCD34D" opacity="0.7"/>
                  </g>
                  
                  {/* Decorative elements */}
                  <circle cx="520" cy="300" r="6" fill="#F59E0B" opacity="0.6"/>
                  <circle cx="100" cy="100" r="8" fill="#10B981" opacity="0.6"/>
                  <circle cx="550" cy="200" r="5" fill="#EF4444" opacity="0.6"/>
                </svg>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Wave Bottom */}
        <div className="absolute bottom-0 left-0 right-0 w-full">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 80C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 bg-gray-50 w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-4 md:p-6 shadow-md hover:shadow-xl transition-all text-center"
              >
                <div className={`w-12 h-12 md:w-16 md:h-16 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4`}>
                  <feature.icon className="text-xl md:text-3xl text-white" />
                </div>
                <h3 className="text-sm md:text-lg font-bold text-gray-900 mb-1 md:mb-2">{feature.title}</h3>
                <p className="text-xs md:text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 md:py-20 w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Featured Products
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">
              Handpicked items just for you
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8 md:mt-12"
          >
            <Link to="/shop">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-600 text-white px-6 sm:px-8 md:px-10 py-3 md:py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2 text-sm sm:text-base"
              >
                View All Products
                <FaArrowRight />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-primary-50 to-primary-100 w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              What Our Customers Say
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">
              Join thousands of happy shoppers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {[
              {
                name: 'Sarah Johnson',
                text: 'Amazing shopping experience! Quality products and fast delivery.',
              },
              {
                name: 'Michael Chen',
                text: 'Great deals and excellent customer service. Highly recommended!',
              },
              {
                name: 'Emma Williams',
                text: 'Found perfect items for my home. The variety is unbeatable!',
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-4 md:p-6 shadow-md hover:shadow-xl transition-all"
              >
                <div className="flex gap-1 mb-3 md:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-sm md:text-base" />
                  ))}
                </div>
                <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <h4 className="font-bold text-sm md:text-base text-gray-900">{testimonial.name}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              Ready to Start Shopping?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-primary-100 mb-6 md:mb-8">
              Join our community and get exclusive deals
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/50 text-sm sm:text-base"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full font-bold shadow-2xl hover:shadow-3xl transition-all text-sm sm:text-base"
              >
                Subscribe
              </motion.button>
            </div>
            <p className="text-xs sm:text-sm text-primary-200 mt-3 md:mt-4">
              🎁 Get 15% off on your first order
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

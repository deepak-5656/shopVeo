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
} from 'react-icons/fa';
import ProductCard from '../components/ProductCard';
import { products } from '../data/mockData';

const Home = () => {
  const featuredProducts = products.filter((p) => p.isFeatured).slice(0, 6);
  
  const features = [
    {
      icon: FaShippingFast,
      title: 'Free Shipping',
      description: 'On orders over $50',
    },
    {
      icon: FaLock,
      title: 'Secure Payment',
      description: '100% secure transactions',
    },
    {
      icon: FaUndo,
      title: 'Easy Returns',
      description: '30-day return policy',
    },
    {
      icon: FaHeadset,
      title: '24/7 Support',
      description: 'Dedicated customer service',
    },
  ];

  const offers = [
    {
      title: 'Electronics Sale',
      subtitle: 'Up to 40% OFF',
      image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&q=80',
      link: '/shop?category=electronics',
      color: 'from-blue-500 to-blue-700',
    },
    {
      title: 'Fashion Week',
      subtitle: 'New Arrivals',
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80',
      link: '/shop?category=fashion',
      color: 'from-pink-500 to-purple-700',
    },
    {
      title: 'Home Decor',
      subtitle: 'Transform Your Space',
      image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&q=80',
      link: '/shop?category=home-decor',
      color: 'from-green-500 to-teal-700',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 via-primary-700 to-purple-800 text-white overflow-hidden">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Discover Your
                <br />
                <span className="text-yellow-300">Perfect Style</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-primary-100">
                Shop the latest trends in fashion, electronics, and home decor.
                Unbeatable prices and quality guaranteed!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/shop">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary bg-white text-primary-600 hover:bg-gray-100"
                  >
                    Shop Now <FaArrowRight className="inline ml-2" />
                  </motion.button>
                </Link>
                <Link to="/about">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-secondary border-white text-white hover:bg-white/10"
                  >
                    Learn More
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80"
                  alt="Shopping Experience"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-yellow-300 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-purple-300 rounded-full opacity-20 blur-3xl"></div>
            </motion.div>
          </div>
        </div>

        {/* Wave Shape */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <feature.icon className="text-primary-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-title"
            >
              Special Offers
            </motion.h2>
            <p className="section-subtitle">
              Don't miss out on these amazing deals!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {offers.map((offer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <Link to={offer.link}>
                  <div className="relative h-80 rounded-2xl overflow-hidden group">
                    <img
                      src={offer.image}
                      alt={offer.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${offer.color} opacity-80`}></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                      <h3 className="text-3xl font-bold mb-2">{offer.title}</h3>
                      <p className="text-xl mb-4">{offer.subtitle}</p>
                      <button className="btn-primary bg-white text-gray-900 hover:bg-gray-100">
                        Shop Now
                      </button>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-title"
            >
              Featured Products
            </motion.h2>
            <p className="section-subtitle">
              Handpicked products just for you
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/shop">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                View All Products <FaArrowRight className="inline ml-2" />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-title"
            >
              What Our Customers Say
            </motion.h2>
            <p className="section-subtitle">
              Trusted by thousands of happy shoppers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Fashion Enthusiast',
                comment: 'Amazing quality and fast shipping! ShopSphere is now my go-to for online shopping.',
                rating: 5,
              },
              {
                name: 'Michael Chen',
                role: 'Tech Lover',
                comment: 'Great deals on electronics. The customer service is top-notch!',
                rating: 5,
              },
              {
                name: 'Emily Rodriguez',
                role: 'Home Decor Fan',
                comment: 'Found the perfect pieces for my home. Highly recommend!',
                rating: 5,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Shopping?
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Join thousands of satisfied customers today!
            </p>
            <Link to="/shop">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary bg-white text-primary-600 hover:bg-gray-100"
              >
                Explore Products <FaArrowRight className="inline ml-2" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaHeart, FaUsers, FaAward, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const About = () => {
  const values = [
    {
      icon: FaRocket,
      title: 'Innovation',
      description: 'We constantly innovate to provide the best shopping experience.',
    },
    {
      icon: FaHeart,
      title: 'Customer First',
      description: 'Your satisfaction is our top priority. Always.',
    },
    {
      icon: FaUsers,
      title: 'Community',
      description: 'Building a community of happy, satisfied shoppers.',
    },
    {
      icon: FaAward,
      title: 'Quality',
      description: 'Only the best products make it to our platform.',
    },
  ];

  const stats = [
    { number: '500+', label: 'Early Customers' },
    { number: '1K+', label: 'Products' },
    { number: '20+', label: 'Brands' },
    { number: '4.8★', label: 'Rating' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About ShopVio</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              We're revolutionizing online shopping by bringing you the best products,
              unbeatable prices, and an exceptional customer experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Our Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
    ShopVio is launching with a bold vision: to make online shopping
    accessible, enjoyable, and trustworthy for everyone. We're building a
    platform that combines the elegance of premium shopping with the affordability
    and variety that modern consumers deserve.
  </p>
  <p>
    Starting as a passionate team with big ambitions, we're creating an
    e-commerce platform designed to serve customers with excellence. We're
    partnering with top brands and emerging designers to bring you a curated
    selection of products across multiple categories.
  </p>
  <p>
    ShopVio represents our commitment to innovation, quality, and customer
    satisfaction. We're not just selling products; we're building relationships and
    creating memorable shopping experiences from day one.
  </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1556742111-a301076d9d18?w=600&q=80"
                alt="Our Story"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-primary-200 rounded-full opacity-20 blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Follow Us Section */}
      <section className="py-16 bg-gradient-to-r from-primary-50 to-purple-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Follow Us for More Updates
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Stay connected with ShopVio! Get the latest updates, exclusive deals, and be part of our growing community.
            </p>
            
            <div className="flex justify-center gap-4 flex-wrap">
              <motion.a
                href="https://www.facebook.com/profile.php?id=61583409579716&sk=live_videos"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-[#1877F2] hover:bg-[#1877F2] hover:text-white shadow-lg transition-all duration-300"
              >
                <FaFacebook size={24} />
              </motion.a>
              
              <motion.a
                href="https://x.com/shopveo30887"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white shadow-lg transition-all duration-300"
              >
                <FaTwitter size={24} />
              </motion.a>
              
              <motion.a
                href="https://www.instagram.com/shopvio76/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-[#E4405F] hover:bg-gradient-to-r hover:from-[#F58529] hover:via-[#E4405F] hover:to-[#833AB4] hover:text-white shadow-lg transition-all duration-300"
              >
                <FaInstagram size={24} />
              </motion.a>
              
              <motion.a
                href="https://www.linkedin.com/in/shop-vio-3a1046309"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white shadow-lg transition-all duration-300"
              >
                <FaLinkedin size={24} />
              </motion.a>
              
              <motion.a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-[#FF0000] hover:bg-[#FF0000] hover:text-white shadow-lg transition-all duration-300"
              >
                <FaYoutube size={24} />
              </motion.a>
            </div>

            <p className="text-sm text-gray-500 mt-6">
              Join thousands of happy shoppers in our community! 🎉
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-primary-600 text-3xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-primary-100 leading-relaxed">
              To empower people worldwide with access to quality products at fair prices,
              while delivering an unparalleled shopping experience that combines convenience,
              trust, and innovation. We believe everyone deserves to shop with confidence
              and joy.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;

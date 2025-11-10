import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const WelcomePopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
            onClick={handleClose}
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="fixed inset-4 sm:top-1/2 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 sm:inset-auto z-[101] sm:w-full max-w-md m-auto flex items-center justify-center"
          >
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden w-full max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="bg-gradient-to-r from-primary-600 to-purple-700 p-4 sm:p-6 relative">
                <button
                  onClick={handleClose}
                  className="absolute top-2 right-2 sm:top-4 sm:right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all z-10"
                >
                  <FaTimes size={16} />
                </button>
                <div className="text-center text-white pr-8 sm:pr-0">
                  <h2 className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2">Welcome to ShopVio! 🎉</h2>
                  <p className="text-primary-100 text-xs sm:text-sm">
                    Join our community for exclusive deals & updates
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 text-center">
                <p className="text-gray-700 text-base sm:text-lg font-semibold mb-1 sm:mb-2">
                  Follow us for more updates!
                </p>
                <p className="text-gray-500 text-xs sm:text-sm mb-4 sm:mb-6">
                  Stay connected and get exclusive offers, new arrivals, and special discounts
                </p>

                {/* Social Media Icons */}
                <div className="flex justify-center gap-2 sm:gap-4 mb-4 sm:mb-6 flex-wrap">
                  <motion.a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-11 h-11 sm:w-12 sm:h-12 bg-[#1877F2] rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all"
                  >
                    <FaFacebook size={18} />
                  </motion.a>

                  <motion.a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-11 h-11 sm:w-12 sm:h-12 bg-[#1DA1F2] rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all"
                  >
                    <FaTwitter size={18} />
                  </motion.a>

                  <motion.a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-11 h-11 sm:w-12 sm:h-12 bg-gradient-to-r from-[#F58529] via-[#E4405F] to-[#833AB4] rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all"
                  >
                    <FaInstagram size={18} />
                  </motion.a>

                  <motion.a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-11 h-11 sm:w-12 sm:h-12 bg-[#0A66C2] rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all"
                  >
                    <FaLinkedin size={18} />
                  </motion.a>
                </div>

                {/* Buttons */}
                <div className="flex gap-2 sm:gap-3">
                  <button
                    onClick={handleClose}
                    className="flex-1 bg-gray-100 text-gray-700 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-gray-200 transition-all"
                  >
                    Maybe Later
                  </button>
                  <button
                    onClick={handleClose}
                    className="flex-1 bg-gradient-to-r from-primary-600 to-purple-700 text-white py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold hover:shadow-lg transition-all"
                  >
                    Got it!
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default WelcomePopup;

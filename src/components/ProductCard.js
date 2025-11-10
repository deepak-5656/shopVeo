import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaStar, FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
  };

  const handleImageError = (e) => {
    e.target.src = `https://via.placeholder.com/500x500/6366f1/ffffff?text=${encodeURIComponent(product.name)}`;
  };

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="card group">
          {/* Image Container */}
          <div className="relative overflow-hidden aspect-square bg-gray-100">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
              onError={handleImageError}
              crossOrigin="anonymous"
            />
            {/* Badges */}
            <div className="absolute top-3 left-3 flex flex-col gap-2">
              {discount > 0 && (
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  -{discount}%
                </span>
              )}
              {product.isFeatured && (
                <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                  Featured
                </span>
              )}
            </div>
            {/* Add to Cart Button */}
            <motion.button
              onClick={handleAddToCart}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="absolute bottom-3 right-3 bg-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-label="Add to cart"
            >
              <FaShoppingCart className="text-primary-600 text-lg" />
            </motion.button>
          </div>

          {/* Product Info */}
          <div className="p-4">
            {/* Category */}
            <p className="text-xs text-primary-600 font-semibold mb-1">{product.category}</p>
            
            {/* Product Name */}
            <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 h-12">
              {product.name}
            </h3>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center">
                <FaStar className="text-yellow-400 text-sm" />
                <span className="ml-1 text-sm font-medium text-gray-700">{product.rating}</span>
              </div>
              <span className="text-xs text-gray-500">({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-gray-900">₹{product.price}</span>
              {product.originalPrice > product.price && (
                <span className="text-sm text-gray-400 line-through">
                  ₹{product.originalPrice}
                </span>
              )}
            </div>

            {/* Stock Status */}
            {!product.inStock && (
              <p className="text-red-500 text-sm font-semibold mt-2">Out of Stock</p>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;

import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaStar,
  FaShoppingCart,
  FaHeart,
  FaShare,
  FaCheck,
  FaTruck,
  FaUndo,
} from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { products, productReviews } from '../data/mockData';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart();
  
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [showNotification, setShowNotification] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Product Not Found</h2>
          <Link to="/shop" className="btn-primary">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const reviews = productReviews.filter((r) => r.productId === product.id);
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  // Mock images (in real scenario, product would have multiple images)
  const productImages = [product.image, product.image, product.image];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Notification */}
      {showNotification && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="fixed top-24 right-4 z-50 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3"
        >
          <FaCheck />
          <span>Added to cart successfully!</span>
        </motion.div>
      )}

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link to="/" className="hover:text-primary-600">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link to="/shop" className="hover:text-primary-600">
              Shop
            </Link>
            <span className="mx-2">/</span>
            <Link to={`/shop?category=${product.category.toLowerCase()}`} className="hover:text-primary-600">
              {product.category}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Product Main Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-4">
              <img
                src={productImages[selectedImage]}
                alt={product.name}
                className="w-full aspect-square object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {productImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`border-2 rounded-lg overflow-hidden ${
                    selectedImage === index ? 'border-primary-600' : 'border-gray-200'
                  }`}
                >
                  <img src={img} alt={`${product.name} ${index + 1}`} className="w-full aspect-square object-cover" />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl shadow-md p-8"
          >
            {/* Category & Stock */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-semibold text-primary-600 uppercase">
                {product.category}
              </span>
              {product.inStock ? (
                <span className="text-sm text-green-600 font-semibold flex items-center gap-1">
                  <FaCheck /> In Stock
                </span>
              ) : (
                <span className="text-sm text-red-600 font-semibold">Out of Stock</span>
              )}
            </div>

            {/* Product Name */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>

            {/* Rating & Reviews */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`${
                      i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-lg font-medium text-gray-700">{product.rating}</span>
              <span className="text-gray-500">({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-baseline gap-4">
                <span className="text-4xl font-bold text-gray-900">₹{product.price}</span>
                {product.originalPrice > product.price && (
                  <>
                    <span className="text-2xl text-gray-400 line-through">
                      ₹{product.originalPrice}
                    </span>
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      Save{' '}
                      {Math.round(
                        ((product.originalPrice - product.price) / product.originalPrice) * 100
                      )}
                      %
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>

            {/* Features */}
            <div className="mb-8">
              <h3 className="font-semibold text-gray-900 mb-3">Key Features:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700">
                    <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="block font-semibold text-gray-900 mb-2">Quantity:</label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border-2 border-gray-300 rounded-lg hover:border-primary-600 transition-colors font-semibold"
                >
                  -
                </button>
                <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border-2 border-gray-300 rounded-lg hover:border-primary-600 transition-colors font-semibold"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-8">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FaShoppingCart className="inline mr-2" />
                Add to Cart
              </motion.button>
              <button className="w-12 h-12 border-2 border-gray-300 rounded-lg hover:border-primary-600 hover:text-primary-600 transition-colors flex items-center justify-center">
                <FaHeart />
              </button>
              <button className="w-12 h-12 border-2 border-gray-300 rounded-lg hover:border-primary-600 hover:text-primary-600 transition-colors flex items-center justify-center">
                <FaShare />
              </button>
            </div>

            {/* Shipping Info */}
            <div className="border-t pt-6 space-y-3">
              <div className="flex items-center gap-3 text-gray-700">
                <FaTruck className="text-primary-600 text-xl" />
                <span>Free shipping on orders over ₹500</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <FaUndo className="text-primary-600 text-xl" />
                <span>30-day easy returns</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Reviews Section */}
        <div className="bg-white rounded-2xl shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Customer Reviews</h2>
          
          {reviews.length > 0 ? (
            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="border-b pb-6 last:border-b-0">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="font-semibold text-gray-900">{review.author}</p>
                      <p className="text-sm text-gray-500">{review.date}</p>
                    </div>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`${
                            i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-3">{review.comment}</p>
                  <button className="text-sm text-gray-500 hover:text-primary-600">
                    Helpful ({review.helpful})
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No reviews yet. Be the first to review!</p>
          )}
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;

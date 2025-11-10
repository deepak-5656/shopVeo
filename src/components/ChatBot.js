import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaComments, FaTimes, FaPaperPlane, FaRobot, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! 👋 I'm your ShopVio assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasShownSocialMessage, setHasShownSocialMessage] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && !hasShownSocialMessage) {
      setTimeout(() => {
        const socialMessage = {
          id: Date.now(),
          text: "📢 Stay connected with us! Follow ShopVio for exclusive deals, updates, and more:",
          sender: 'bot',
          timestamp: new Date(),
          showSocial: true,
        };
        setMessages((prev) => [...prev, socialMessage]);
        setHasShownSocialMessage(true);
      }, 1500);
    }
  }, [isOpen, hasShownSocialMessage]);

  const quickReplies = [
    '📦 Track my order',
    '🛍️ Product recommendations',
    '💳 Payment options',
    '🚚 Shipping info',
    '💬 Talk to support',
  ];

  const handleSendMessage = async (messageText) => {
    if (!messageText.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: messageText,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: getBotResponse(messageText),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const getBotResponse = (message) => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('track') || lowerMessage.includes('order')) {
      return "I can help you track your order! Please provide your order number, and I'll check the status for you. 📦";
    } else if (lowerMessage.includes('recommend') || lowerMessage.includes('product')) {
      return "I'd love to help you find the perfect product! What are you looking for? Fashion, Electronics, Home Decor, or something else? 🛍️";
    } else if (lowerMessage.includes('payment')) {
      return "We accept Credit/Debit Cards, UPI, Net Banking, and Cash on Delivery. All payments are secure and encrypted. 💳";
    } else if (lowerMessage.includes('shipping') || lowerMessage.includes('delivery')) {
      return "We offer FREE shipping on orders above ₹500! Standard delivery takes 3-5 business days. Express delivery is also available. 🚚";
    } else if (lowerMessage.includes('support') || lowerMessage.includes('help')) {
      return "I'm connecting you with our support team. They'll assist you shortly! In the meantime, you can also email us at support@shopvio.com 💬";
    } else {
      return "Thanks for your message! I'm here to help with orders, products, payments, and shipping. What would you like to know? 😊";
    }
  };

  const handleQuickReply = (reply) => {
    handleSendMessage(reply);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSendMessage(inputMessage);
  };

  return (
    <>
    
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-primary-600 to-primary-700 text-white p-4 rounded-full shadow-2xl hover:shadow-primary-500/50 transition-all"
      >
        {isOpen ? <FaTimes size={24} /> : <FaComments size={24} />}
        {!isOpen && (
          <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
        )}
      </motion.button>

    
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <FaRobot size={20} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold">ShopVio Assistant</h3>
                <p className="text-xs text-primary-100">Online • Ready to help</p>
              </div>
            </div>

  
            <div className="h-96 overflow-y-auto p-4 bg-gray-50">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-4 flex ${
                    message.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.sender === 'user'
                        ? 'bg-primary-600 text-white rounded-br-none'
                        : 'bg-white text-gray-800 rounded-bl-none shadow-sm'
                    }`}
                  >
                    <p className="text-sm break-words">{message.text}</p>
                    
                    {/* Social Media Icons in Message */}
                    {message.showSocial && (
                      <div className="flex gap-2 mt-3 justify-center">
                        <a
                          href="https://facebook.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 bg-[#1877F2] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
                        >
                          <FaFacebook size={14} />
                        </a>
                        <a
                          href="https://twitter.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 bg-[#1DA1F2] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
                        >
                          <FaTwitter size={14} />
                        </a>
                        <a
                          href="https://instagram.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 bg-gradient-to-r from-[#F58529] via-[#E4405F] to-[#833AB4] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
                        >
                          <FaInstagram size={14} />
                        </a>
                        <a
                          href="https://linkedin.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 bg-[#0A66C2] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
                        >
                          <FaLinkedin size={14} />
                        </a>
                      </div>
                    )}
                    
                    <p
                      className={`text-xs mt-1 ${
                        message.sender === 'user' ? 'text-primary-100' : 'text-gray-400'
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start mb-4"
                >
                  <div className="bg-white p-3 rounded-2xl rounded-bl-none shadow-sm">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></span>
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></span>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length <= 2 && (
              <div className="px-4 py-2 bg-white border-t flex gap-2 overflow-x-auto">
                {quickReplies.map((reply, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickReply(reply)}
                    className="px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-xs whitespace-nowrap hover:bg-primary-100 transition-colors"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 bg-white border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  disabled={!inputMessage.trim()}
                  className="bg-primary-600 text-white p-3 rounded-full hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <FaPaperPlane />
                </button>
              </div>
              
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;

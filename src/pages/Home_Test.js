import React from 'react';

const Home = () => {
  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1 style={{ color: '#4f46e5', fontSize: '48px' }}>Welcome to ShopSphere!</h1>
      <p style={{ fontSize: '24px', marginTop: '20px' }}>Your e-commerce platform is working!</p>
      <div style={{ marginTop: '40px' }}>
        <button style={{
          backgroundColor: '#4f46e5',
          color: 'white',
          padding: '15px 30px',
          fontSize: '18px',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer'
        }}>
          Start Shopping
        </button>
      </div>
    </div>
  );
};

export default Home;


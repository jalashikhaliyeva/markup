// components/LoadingAnimation.js
import React from 'react';
import Lottie from 'lottie-react';
import animationData from '@/shared/loading-animation/animationData.json';

const LoadingAnimation = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Full viewport height
        width: '100vw', // Full viewport width
        position: 'fixed', // Fixed position to overlay on the page
        top: 0,
        left: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.9)', // Optional: background overlay
        zIndex: 9999, // Ensure it stays on top
      }}
    >
      <div style={{ height: '400px', width: '600px' }}>
        <Lottie animationData={animationData} loop={true} />
      </div>
    </div>
  );
};

export default LoadingAnimation;

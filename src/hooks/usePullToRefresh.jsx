// src/hooks/usePullToRefresh.js
import { useEffect } from 'react';

const usePullToRefresh = () => {
  useEffect(() => {
    let startY = 0;

    const handleTouchStart = (event) => {
      startY = event.touches[0].clientY;
    };

    const handleTouchMove = (event) => {
      const currentY = event.touches[0].clientY;
      if (currentY > startY + 50 && window.scrollY === 0) {
        // Trigger refresh if user drags down more than 50 pixels and is at the top
        window.location.reload(); // Refresh the page
      }
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);
};

export default usePullToRefresh;

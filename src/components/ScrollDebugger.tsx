import React, { useEffect, useState } from 'react';

const ScrollDebugger: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    const testElement = document.querySelector('#scroll-test');
    if (testElement) {
      observer.observe(testElement);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  // Solo mostrar en desarrollo
  if (import.meta.env.MODE !== 'development') {
    return null;
  }

  return (
    <div className="fixed top-4 right-4 bg-black/80 text-white p-4 rounded-lg z-50 text-sm">
      <div>Scroll Y: {scrollY}px</div>
      <div>Intersection: {isVisible ? '✅' : '❌'}</div>
      <div id="scroll-test" className="mt-2">
        Test Element
      </div>
    </div>
  );
};

export default ScrollDebugger;

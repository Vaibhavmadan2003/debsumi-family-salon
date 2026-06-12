'use client';
import { useState, useEffect } from 'react';
const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  if (!isVisible) return null;
  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-40">
      <a href="https://wa.me/918777278351" className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition" title="WhatsApp"><span className="text-3xl">💬</span></a>
      <a href="tel:+918777278351" className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition" title="Call"><span className="text-3xl">📞</span></a>
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition" title="Top"><span className="text-3xl">⬆️</span></button>
    </div>
  );
};
export default FloatingButtons;

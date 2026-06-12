'use client';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => { setIsVisible(true); }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-white to-purple-100 pt-32 pb-20">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <span className="inline-block bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">💄 PROFESSIONAL BEAUTY SALON</span>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight mb-6"><span className="text-pink-600">Debsumi's</span> Family Salon</h1>
            <h2 className="text-xl md:text-2xl font-semibold text-pink-700 mb-6">Your Beauty Destination in Kolkata</h2>
            <p className="text-xl text-gray-600 mb-8">Professional makeup, hair styling, nail extensions, bridal services, face therapy, and complete beauty solutions in Kolkata.</p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center"><span className="text-pink-600">✓</span></div>
                <span className="text-gray-700 font-medium">Expert Stylists</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center"><span className="text-pink-600">✓</span></div>
                <span className="text-gray-700 font-medium">Quality Products</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center"><span className="text-pink-600">✓</span></div>
                <span className="text-gray-700 font-medium">Best Services</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center"><span className="text-pink-600">✓</span></div>
                <span className="text-gray-700 font-medium">Affordable Prices</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+918777278351" className="bg-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-pink-700 transition-all transform hover:-translate-y-1 shadow-lg text-center">📞 Call: +91 87772 78351</a>
              <a href="https://wa.me/918777278351" className="bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-700 transition-all transform hover:-translate-y-1 shadow-lg text-center">💬 WhatsApp</a>
            </div>
          </div>
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-gradient-to-br from-pink-400 to-purple-500 rounded-3xl p-8 shadow-2xl">
              <div className="text-center text-white">
                <div className="text-8xl mb-4">💄</div>
                <h3 className="text-2xl font-bold mb-2">Beauty Salon</h3>
                <p className="text-pink-100">Professional Services</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

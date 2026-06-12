'use client';
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Debsumi's Salon</h3>
            <p className="text-sm">Professional beauty salon in Kolkata offering makeup, hair styling, and complete beauty solutions.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-pink-400">About Us</a></li>
              <li><a href="#services" className="hover:text-pink-400">Services</a></li>
              <li><a href="#contact" className="hover:text-pink-400">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <p className="text-sm mb-2">📞 +91 87772 78351</p>
            <p className="text-sm">Jems long, Vidya sagor saroni<br />Bara Bagan, Nutan Pally<br />Purba Barisha, Kolkata<br />West Bengal 700063</p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p>© {year} Debsumi's Family Salon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

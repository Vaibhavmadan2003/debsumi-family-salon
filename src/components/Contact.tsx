'use client';
const Contact = () => (
  <section id="contact" className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Get in <span className="text-pink-600">Touch</span></h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-pink-50 p-6 rounded-lg">
            <p className="text-lg font-bold text-gray-800 mb-2">📞 Phone</p>
            <a href="tel:+918777278351" className="text-pink-600 font-semibold text-xl">+91 87772 78351</a>
          </div>
          <div className="bg-pink-50 p-6 rounded-lg">
            <p className="text-lg font-bold text-gray-800 mb-2">📍 Address</p>
            <p className="text-gray-600"><strong>Jems long, Vidya sagor saroni, Bara Bagan, Nutan Pally, Purba Barisha, Kolkata, West Bengal 700063</strong></p>
          </div>
          <div className="bg-pink-50 p-6 rounded-lg">
            <p className="text-lg font-bold text-gray-800 mb-2">🕐 Hours</p>
            <p className="text-gray-600">Open Daily - Closes 9:30 PM</p>
          </div>
          <a href="https://wa.me/918777278351" className="inline-block bg-green-600 text-white px-8 py-3 rounded-full font-bold hover:bg-green-700">💬 WhatsApp</a>
        </div>
        <div className="bg-pink-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Book Your Appointment</h3>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border rounded-lg" required />
            <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border rounded-lg" required />
            <input type="tel" placeholder="Your Phone" className="w-full px-4 py-2 border rounded-lg" required />
            <textarea placeholder="Message" rows={4} className="w-full px-4 py-2 border rounded-lg" required></textarea>
            <button type="submit" className="w-full bg-pink-600 text-white py-3 rounded-lg font-bold hover:bg-pink-700">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </section>
);
export default Contact;

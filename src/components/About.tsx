'use client';
const About = () => (
  <section id="about" className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">About <span className="text-pink-600">Debsumi's</span> Salon</h2>
      <p className="text-gray-600 text-lg mb-6 text-center max-w-3xl mx-auto">Professional beauty salon in Kolkata offering makeup, hair styling, nail extensions, bridal services, face therapy, body massage, and complete beauty solutions. Our expert team provides quality services at affordable prices.</p>
      <div className="grid md:grid-cols-4 gap-4 mt-12">
        <div className="bg-pink-50 p-6 rounded-lg text-center">
          <div className="text-3xl font-bold text-pink-600 mb-2">500+</div>
          <div className="text-gray-700 font-medium">Happy Clients</div>
        </div>
        <div className="bg-pink-50 p-6 rounded-lg text-center">
          <div className="text-3xl font-bold text-pink-600 mb-2">10+</div>
          <div className="text-gray-700 font-medium">Years Experience</div>
        </div>
        <div className="bg-pink-50 p-6 rounded-lg text-center">
          <div className="text-3xl font-bold text-pink-600 mb-2">100%</div>
          <div className="text-gray-700 font-medium">Quality Service</div>
        </div>
        <div className="bg-pink-50 p-6 rounded-lg text-center">
          <div className="text-3xl font-bold text-pink-600 mb-2">5.0/5</div>
          <div className="text-gray-700 font-medium">Customer Rating</div>
        </div>
      </div>
    </div>
  </section>
);
export default About;

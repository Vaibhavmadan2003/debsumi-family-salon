'use client';
const Services = () => {
  const services = [
    { icon: '💄', title: 'Makeup', desc: 'Professional makeup for all occasions' },
    { icon: '✂️', title: 'Hair Styling', desc: 'Hair cut, styling, and treatment' },
    { icon: '💅', title: 'Nail Extension', desc: 'Nail art and extension services' },
    { icon: '👰', title: 'Bridal Services', desc: 'Complete bridal makeup & hair' },
    { icon: '💆', title: 'Face Therapy', desc: 'Hydra therapy, glass facial' },
    { icon: '💅', title: 'Waxing', desc: 'Threading, waxing & bleach' },
    { icon: '💇', title: 'Hair Spa', desc: 'Hair treatment & protein therapy' },
    { icon: '🧖', title: 'Body Massage', desc: 'Relaxing body massage' },
  ];
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Our <span className="text-pink-600">Services</span></h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {services.map((s, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <div className="text-5xl mb-3">{s.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;

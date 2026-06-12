'use client';
import Header from '../src/components/Header';
import Hero from '../src/components/Hero';
import About from '../src/components/About';
import Services from '../src/components/Services';
import Contact from '../src/components/Contact';
import Footer from '../src/components/Footer';
import FloatingButtons from '../src/components/FloatingButtons';

export default function Home() {
  return (
    <div className="min-h-screen animate-fadeInUp">
      <Header />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
      <FloatingButtons />
    </div>
  );
}

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import DeviceShowcase from '@/components/DeviceShowcase';
import Customization from '@/components/Customization';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <Navbar />
      <Hero />
      <Features />
      <DeviceShowcase />
      <Customization />
      <Testimonials />
      <CallToAction />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}

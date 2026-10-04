import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import DeviceShowcase from '@/components/DeviceShowcase';
import Customization from '@/components/Customization';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#15171e]">
      <Navbar />
      <Hero />
      <Features />
      <DeviceShowcase />
      <Customization />
    </main>
  );
}

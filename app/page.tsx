import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import FeaturedProperties from '@/components/FeaturedProperties';
import Services from '@/components/Services';
import Industries from '@/components/Industries';
import Advisors from '@/components/Advisors';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <AboutSection />
      <FeaturedProperties />
      <Services />
      <Industries />
      <Advisors />
      <Testimonials />
      <Footer />
    </main>
  );
}

import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import WorkExperienceSection from '@/components/WorkExperienceSection';
import WhyHireMeSection from '@/components/WhyHireMeSection';
import PortfolioSection from '@/components/PortfolioSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ClientsSection from '@/components/ClientsSection';
import MovingWorkSection from '@/components/MovingWorkSection';
import FooterSection from '@/components/FooterSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WorkExperienceSection />
      <WhyHireMeSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ClientsSection />
      <MovingWorkSection />
      <FooterSection />
    </>
  );
}

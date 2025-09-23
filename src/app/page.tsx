import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import WorkExperienceSection from '@/components/WorkExperienceSection';
import WhyHireMeSection from '@/components/WhyHireMeSection';
import PortfolioSection from '@/components/PortfolioSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ClientsSection from '@/components/ClientsSection';
import MovingWorkSection from '@/components/MovingWorkSection';
import FooterSection from '@/components/FooterSection';
import Navbar from '@/components/Navbar';
import BackToTopButton from '@/components/BackToTopButton';
export default function Home() {
  return (
    <>
    <Navbar variant="dark" isAbsolute={false} currentPage="home" />
      <HeroSection />
      <ServicesSection />
      <WorkExperienceSection />
      <WhyHireMeSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ClientsSection />
      <MovingWorkSection />
      <FooterSection />
      <BackToTopButton />
    </>
  );
}

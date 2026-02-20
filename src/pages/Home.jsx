import HeroSection from "../components/home/HeroSection";
import QuickLinks from "../components/home/QuickLinks";
import NoticeBoard from "../components/home/NoticeBoard";
import ServiceHighlights from "../components/home/ServiceHighlights";
import Testimonials from "../components/home/Testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <QuickLinks />
      <NoticeBoard />
      <ServiceHighlights />
      <Testimonials />
    </>
  );
}

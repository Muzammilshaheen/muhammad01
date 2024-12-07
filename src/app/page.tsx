"Use client"
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import VideoSection from "@/components/VideoSection";
import Skill from "@/components/Skill";

export default function Home() {
  return (
   <main>
    <HeroSection />
    <VideoSection />
    <ServicesSection />
    <Skill />
   </main>
  );
}

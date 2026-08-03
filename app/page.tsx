import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/Hero";
import SectionDivider from "@/components/ui/SectionDivider";
import StorySection from "@/components/story/StorySection";
import SpecialtiesSection from "@/components/specialties/SpecialtiesSection";
import MenuSection from "@/components/menu/MenuSection";
import PriceSection from "@/components/pricing/PriceSection";
import ContactSection from "@/components/ContactSection";
import WhatsAppButton from "@/components/shared/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F1E5] text-[#333]">
      <Navbar />
      <Hero />
      <SectionDivider />

      <StorySection />
      <SectionDivider />

      <SpecialtiesSection />
      <SectionDivider />

      <MenuSection />
      <SectionDivider />

      <PriceSection />
      <SectionDivider />
      
      <ContactSection />
      <WhatsAppButton />
</main>
  );
}

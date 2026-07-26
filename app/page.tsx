import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/Hero";
import SpecialtiesSection from "@/components/specialties/SpecialtiesSection";
import MenuSection from "@/components/menu/MenuSection";
import PriceSection from "@/components/pricing/PriceSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F1E5] text-[#333]">
      <Navbar />

      <Hero />
<SpecialtiesSection />

<MenuSection />
<PriceSection />
<ContactSection />
</main>
  );
}
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import PracticeAreas from "@/components/sections/PracticeAreas";
import Results from "@/components/sections/Results";
import Contact from "@/components/sections/Contact";
import WhyChooseUs from "@/components/sections/WhyChooseUs";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <PracticeAreas />
      <Results />
      <WhyChooseUs />
      <Contact />
    </div>
  );
}

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import PracticeAreas from "@/components/sections/PracticeAreas";
import Results from "@/components/sections/Results";
import Testimonials from "@/components/sections/Testimonials";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Media from "@/components/sections/Media";
import Contact from "@/components/sections/Contact";
import FAQ from "@/components/sections/FAQ";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <PracticeAreas />
      <Results />
      <WhyChooseUs />
      <Testimonials />
      <Media />
      <FAQ />
      <Contact />
    </div>
  );
}

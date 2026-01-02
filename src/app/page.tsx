import Contact from "@/components/Contact";
import ConversionDemo from "@/components/ConversionDemo";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ConversionDemo />
      <Projects />
      <Testimonials />
      <Contact />
    </>
  );
}

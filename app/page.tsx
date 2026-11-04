import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Founder from "@/components/Founder";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Education />
        <Founder />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

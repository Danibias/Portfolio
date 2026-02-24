import Nav from "@/components/portfolio/Nav";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Vision from "@/components/portfolio/Vision";
import Contact from "@/components/portfolio/Contact";

const Index = () => {
  return (
    <main className="font-display">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Vision />
      <Contact />
    </main>
  );
};

export default Index;

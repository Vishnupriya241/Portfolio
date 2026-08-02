import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import ParticlesBackground from "@/components/ParticlesBackground";
import LoadingScreen from "@/components/LoadingScreen";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <ParticlesBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Achievements />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

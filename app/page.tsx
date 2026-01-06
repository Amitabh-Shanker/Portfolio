import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechnicalSkills from "@/components/TechnicalSkills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import LeetCode from "@/components/LeetCode";
import Contact from "@/components/Contact";
import Background from "@/components/Background";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#000000] text-slate-50 selection:bg-sky-500/30 relative overflow-hidden">
      <Background />
      <Navbar />
      <Hero />
      <Experience />
      <About />
      <TechnicalSkills />
      <Projects />
      <Achievements />
      <LeetCode />
      <Contact />
    </main>
  );
}

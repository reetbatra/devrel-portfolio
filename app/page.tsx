import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Stats from "@/components/Stats";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Community from "@/components/Community";
import Video from "@/components/Video";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <Stats />
      <Experience />
      <TechStack />
      <Projects />
      <Community />
      <Video />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}

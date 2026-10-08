import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Stats from "@/components/Stats";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import OpenSource from "@/components/OpenSource";
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
      <OpenSource
        index="04"
        intro="I find most of these by building on an SDK and hitting the bug myself. Each one goes upstream with a reproduction, and usually the fix."
      />
      <Community />
      <Video />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}

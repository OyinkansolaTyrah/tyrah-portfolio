import Header from "./components/Header";
import Hero from "./Hero";
import Problem from "./Problem";
import About from "./About";
import Services from "./Services";
import Projects from "./Projects";
import Achievements from "./Achievements";
import Contact from "./Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Problem />
      <Services />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}

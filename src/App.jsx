import "@fontsource/lato/100.css";
import "@fontsource/lato/300.css";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";
import "@fontsource/lato/900.css";
import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import ParallaxCity from "./components/parallax-city/ParallaxCity";
import AboutMe from "./components/aboutMe/AboutMe";
import ParallaxGalaxy from "./components/parallax-galaxy/ParallaxGalaxy";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="About me">
        <ParallaxCity />
      </section>
      <section>
        <AboutMe />
      </section>
      <section id="Projects">
        <ParallaxGalaxy />
      </section>
      <section>
        <Portfolio />
      </section>
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;

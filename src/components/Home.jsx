// function Home() {
// }

// export default Home;
import Hero from "./Hero";
import Features from "./Features";
import About from "./About";
import Awards from "./Awards";
import Sweets from "./Sweets";
import Savories from "./Savories";
import Bakes from "./Bakes";
import Contact from "./Contact";

function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>

      <Features />

      <section id="about">
        <About />
      </section>

      <Awards />

      <section id="sweets">
        <Sweets />
      </section>

      <section id="savories">
        <Savories />
      </section>

      <section id="bakes">
        <Bakes />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

export default Home;
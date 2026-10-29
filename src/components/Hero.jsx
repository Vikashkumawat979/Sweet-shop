import "./Hero.css";
function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <h1>
          Welcome to
          <span>Rajshree Sweets</span>
        </h1>

        <p>
          Wide varieties of sweets and delicacies to
          choose from. Explore the deliciousness that
          awaits you!
        </p>

        <a href="/sweets" className="hero-btn">
          Shop Now
        </a>
      </div>
    </section>
  );
}

export default Hero;
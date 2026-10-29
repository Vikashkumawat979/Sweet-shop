
import "./About.css";

function About() {
  return (
    <section className="about-section" id="about">

      {/* Row 1: Quality */}
      <div className="about-row">
        <div className="about-text">
          <h2>Quality that delights, In every bite.</h2>
          <p>
            At Rajshree, quality is at the heart of everything
            we do. Each mithai is crafted with the finest
            ingredients, meticulous attention to detail, and
            a passion for perfection. From the first bite to
            the last, we promise a delightful experience that
            tantalizes your taste buds.
          </p>
        </div>

        <div className="about-image">
          <img
            src="/images/quality-sweets.png"
            alt="Premium Indian sweets"
          />
        </div>
      </div>

      {/* Row 2: About Us */}
      <div className="about-row reverse">
        <div className="about-image">
          <img
            src="/images/about-sweets3.png"
            alt="Traditional Indian mithai"
          />
        </div>

        <div className="about-text">
          <span className="about-label">About Us</span>
          <h2>Taste of Sweet India</h2>
          <p>
            We believe that desserts are more than just
            treats — they are moments of joy, love, and
            togetherness. From traditional favourites to
            innovative confections, our creations are made
            with care and the finest ingredients.
          </p>
        </div>
      </div>

      {/* Row 3: Philosophy */}
      <div className="about-row">
        <div className="about-text">
          <span className="about-label">Our Philosophy</span>
          <h2>Luxurious Mithais, Accessible To Everyone</h2>
          <p>
            Our luxurious mithais are crafted with the finest
            ingredients, ensuring a melt-in-your-mouth
            experience that speaks of elegance and quality.
            We believe these exquisite delights should be
            accessible to everyone, bringing a touch of
            luxury to everyday moments.
          </p>
        </div>

        <div className="about-image">
          <img
            src="/images/philosophy-sweets.png"
            alt="Delicious handcrafted sweets"
          />
        </div>
      </div>

    </section>
  );
}

export default About;

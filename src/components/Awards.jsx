import "./Awards.css";

function Awards() {
  return (
    <section className="awards-section" id="awards">
      <div className="awards-container">

        <h2 className="awards-title">
          Awards and Accreditations
        </h2>

        <p className="awards-description">
          A Legacy of Excellence Recognized Globally. At
          Rajshree, our passion for crafting luxurious
          mithais has earned us recognition from renowned
          institutions and delighted customers worldwide.
          Our commitment to quality, innovation, and
          tradition guides everything we do.
        </p>

        <p className="awards-description awards-second">
          From being honored for our exquisite flavors to
          celebrating craftsmanship, each milestone motivates
          us to continue raising the bar. We are proud to
          bring exceptional mithais to every occasion.
        </p>

        <div className="certification-heading">
          <h3>Priority</h3>
          <h3>Certifications</h3>
        </div>

        <div className="certification-list">

          <div className="certification-item">
            <div className="certification-badge since-badge">
              <span>RAJSHREE</span>
              <strong>1999</strong>
              <small>QUALITY SWEETS</small>
            </div>
          </div>

          <div className="certification-item">
            <div className="certification-badge iso-badge">
              <span>CERTIFIED</span>
              <strong>ISO</strong>
              <small>QUALITY</small>
            </div>
          </div>

          <div className="certification-item">
            <div className="certification-badge fssai-badge">
              <strong>FSSAI</strong>
            </div>
          </div>

          <div className="certification-item">
            <div className="certification-badge fda-badge">
              <strong>FDA</strong>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Awards;

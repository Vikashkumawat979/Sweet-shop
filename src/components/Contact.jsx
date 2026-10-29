import "./Contact.css";

function Contact() {
  return (
    <footer className="contact-section" id="contact">

      <div className="contact-form">
        <h2>Contact Us</h2>
        <p className="contact-subtitle">Do you have any question?</p>

        <form onSubmit={(e) => e.preventDefault()}>
          <div className="contact-inputs">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="E-mail" required />
          </div>

          <textarea placeholder="Message" rows="5" required />

          <button type="submit">Send Message</button>
        </form>
      </div>

      <div className="footer-content">
        <div className="footer-about">
          <h3 className="footer-logo">
            {/* <i className="fa-solid fa-cake-candles"></i> */}
          <img src="/Logo.png" alt="Rajshree Sweets Logo" />
            <span>
              Rajshree
              <small>SWEETS & BAKERS</small>
            </span>
          </h3>

          <p>
            Wide varieties of sweets and delicacies to choose from.
            Explore the deliciousness that awaits you!
          </p>

          <div className="social-links">
            <a href="#" aria-label="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" aria-label="Facebook">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="YouTube">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Quick Link</h3>
          <a href="/about">About Us</a>
          <a href="/contact">Contact Us</a>
          <a href="#shipping">Shipping Policy</a>
          <a href="#cancellation">Cancellation & Refund</a>
        </div>

        <div className="footer-info">
          <h3>Contact Info</h3>

          <p>
            <i className="fa-solid fa-location-dot"></i>
            <span>
              Chungi Naka, Pratap Bazar,
              <br /> Rani, Rajasthan, India
            </span>
          </p>

          <p>
            <i className="fa-solid fa-phone"></i>
            <span>+91 XXXXX XXXXX</span>
          </p>

          <p>
            <i className="fa-solid fa-envelope"></i>
            <span>Email@email.com</span>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 Rajshree Sweets & Bakers. All rights reserved.
      </div>
    </footer>
  );
}

export default Contact;

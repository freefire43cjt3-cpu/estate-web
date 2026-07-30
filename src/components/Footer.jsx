import "../assets/styles/Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        {/* Company */}
        <div className="footer-box">
          <h2>LuxeEstate</h2>

          <p>
            Discover luxury villas, apartments, commercial spaces and investment
            properties with trusted real estate professionals.
          </p>

          <div className="socials">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-box">
          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#properties">Properties</a>
          <a href="#stats">Statistics</a>
          <a href="#agents">Agents</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Property Types */}
        <div className="footer-box">
          <h3>Property Types</h3>

          <a href="#properties">Luxury Villas</a>
          <a href="#properties">Apartments</a>
          <a href="#properties">Family Homes</a>
          <a href="#properties">Office Spaces</a>
          <a href="#properties">Commercial Buildings</a>
        </div>

        {/* Newsletter */}
        <div className="footer-box">
          <h3>Newsletter</h3>

          <p>Subscribe to receive the latest luxury property listings.</p>

          <form className="newsletter" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" />

            <button type="submit">Subscribe</button>
          </form>
        </div>

        {/* Contact */}
        <div className="footer-box">
          <h3>Contact Us</h3>

          <p>
            <FaMapMarkerAlt />
            Port Harcourt, Rivers State, Nigeria
          </p>

          <p>
            <FaPhoneAlt />
            +234 800 123 4567
          </p>

          <p>
            <FaEnvelope />
            info@luxeestate.com
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 LuxeEstate. All Rights Reserved.</p>

        <a href="#home" className="back-top">
          <FaArrowUp />
          Back to Top
        </a>
      </div>
    </footer>
  );
}

export default Footer;

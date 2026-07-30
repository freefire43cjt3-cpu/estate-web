import "../assets/styles/Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company */}
        <div className="footer-box">

          <h2>LuxeEstate</h2>

          <p>
            Helping people discover luxury homes,
            apartments and investment properties with
            trusted real estate experts.
          </p>

          <div className="socials">

            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaTwitter />
            </a>

            <a href="#">
              <FaLinkedinIn />
            </a>

          </div>

        </div>

        {/* Quick Links */}
        <div className="footer-box">

          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#properties">Properties</a>
          <a href="#agents">Agents</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>

        </div>

        {/* Property Types */}
        <div className="footer-box">

          <h3>Properties</h3>

          <a href="#">Luxury Villas</a>
          <a href="#">Apartments</a>
          <a href="#">Family Homes</a>
          <a href="#">Office Spaces</a>
          <a href="#">Commercial Buildings</a>

        </div>

        {/* Contact */}
        <div className="footer-box">

          <h3>Contact</h3>

          <p>
            <FaMapMarkerAlt />
            Port Harcourt, Nigeria
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
        <p>
          © 2026 LuxeEstate. All Rights Reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;
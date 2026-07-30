import "../../assets/styles/Contact.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="contact-info">

        <span>CONTACT US</span>

        <h2>Let's Find Your Dream Home Together</h2>

        <p>
          Have questions or looking for your perfect property?
          Our team is always ready to help you with expert advice.
        </p>

        <div className="info-box">
          <FaPhoneAlt />
          <div>
            <h4>Phone</h4>
            <p>+234 800 123 4567</p>
          </div>
        </div>

        <div className="info-box">
          <FaEnvelope />
          <div>
            <h4>Email</h4>
            <p>info@luxeestate.com</p>
          </div>
        </div>

        <div className="info-box">
          <FaMapMarkerAlt />
          <div>
            <h4>Location</h4>
            <p>Port Harcourt, Rivers State, Nigeria</p>
          </div>
        </div>

      </div>

      <div className="contact-form">

        <form>

          <input
            type="text"
            placeholder="Full Name"
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            required
          />

          <input
            type="text"
            placeholder="Subject"
            required
          />

          <textarea
            rows="6"
            placeholder="Write your message..."
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;
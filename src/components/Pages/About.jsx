import "../../assets/styles/About.css";
import { FaAward, FaHome, FaUsers, FaHandshake } from "react-icons/fa";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-image">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900"
          alt="Luxury Home"
        />
      </div>

      <div className="about-content">

        <span>ABOUT US</span>

        <h2>
          Helping You Find Your Perfect Home
        </h2>

        <p>
          At LuxeEstate, we specialize in connecting buyers and sellers
          with exceptional properties. Whether you're searching for a
          luxury villa, family home, or investment property, our team is
          committed to making your real estate journey smooth and stress-free.
        </p>

        <div className="about-features">

          <div className="feature">
            <FaHome />
            <div>
              <h4>500+ Properties</h4>
              <p>Luxury homes across the country.</p>
            </div>
          </div>

          <div className="feature">
            <FaUsers />
            <div>
              <h4>1,200+ Happy Clients</h4>
              <p>Trusted by families and investors.</p>
            </div>
          </div>

          <div className="feature">
            <FaAward />
            <div>
              <h4>Award Winning</h4>
              <p>Recognized for excellent service.</p>
            </div>
          </div>

          <div className="feature">
            <FaHandshake />
            <div>
              <h4>Trusted Experts</h4>
              <p>Professional guidance every step.</p>
            </div>
          </div>

        </div>

        <button className="about-btn">
          Learn More
        </button>

      </div>

    </section>
  );
}

export default About;
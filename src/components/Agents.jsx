import "../assets/styles/Agents.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";

const agents = [
  {
    id: 1,
    name: "Sophia Carter",
    role: "Luxury Property Specialist",
    phone: "+2348001234567",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500",
  },

  {
    id: 2,
    name: "Michael Johnson",
    role: "Senior Real Estate Agent",
    phone: "+2348001234567",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500",
  },

  {
    id: 3,
    name: "Emma Wilson",
    role: "Property Consultant",
    phone: "+2348001234567",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500",
  },
];

function Agents() {
  return (
    <section className="agents" id="agents">

      <div className="agents-title">

        <span>OUR PROFESSIONAL TEAM</span>

        <h2>Meet Our Elite Real Estate Experts</h2>

        <p>
          Passionate professionals committed to helping you find
          your perfect property with confidence.
        </p>

      </div>

      <div className="agents-container">

        {agents.map((agent) => (

          <div className="agent-card" key={agent.id}>

            <div className="agent-image">

              <img
                src={agent.image}
                alt={agent.name}
              />

              <div className="agent-socials">

                <a
                  href={agent.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>

                <a
                  href={agent.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>

                <a
                  href={agent.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>

                <a
                  href={`tel:${agent.phone}`}
                  aria-label="Phone"
                >
                  <FaPhoneAlt />
                </a>

              </div>

            </div>

            <div className="agent-content">

              <h3>{agent.name}</h3>

              <p>{agent.role}</p>

              <button className="agent-btn">
                View Profile
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Agents;

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
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500",
  },
  {
    id: 2,
    name: "Michael Johnson",
    role: "Senior Real Estate Agent",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500",
  },
  {
    id: 3,
    name: "Emma Wilson",
    role: "Property Consultant",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500",
  },
];

function Agents() {
  return (
    <section className="agents" id="agents">

      <div className="agents-title">
        <span>Professional Team</span>
        <h2>Meet Our Expert Agents</h2>
        <p>
          Our experienced agents are ready to help you buy, sell,
          or rent your dream property.
        </p>
      </div>

      <div className="agents-container">

        {agents.map((agent) => (
          <div className="agent-card" key={agent.id}>

            <img src={agent.image} alt={agent.name} />

            <div className="agent-content">

              <h3>{agent.name}</h3>

              <p>{agent.role}</p>

              <div className="agent-socials">

                <a href="#">
                  <FaFacebookF />
                </a>

                <a href="#">
                  <FaInstagram />
                </a>

                <a href="#">
                  <FaLinkedinIn />
                </a>

                <a href="#">
                  <FaPhoneAlt />
                </a>

              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Agents;
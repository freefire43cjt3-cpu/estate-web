import { useState } from "react";
import "../assets/styles/FAQ.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqData = [
  {
    question: "How do I schedule a property viewing?",
    answer:
      "Simply click the 'View Details' button on any property and contact our team to book a convenient viewing time.",
  },
  {
    question: "Do you offer mortgage assistance?",
    answer:
      "Yes. We work with trusted financial partners who can help you find suitable mortgage options.",
  },
  {
    question: "Can I list my property on LuxeEstate?",
    answer:
      "Absolutely! Click the 'List Property' button in the navigation bar and submit your property details.",
  },
  {
    question: "Are your property listings verified?",
    answer:
      "Yes. Every listing is reviewed and verified by our professional team before it appears on the platform.",
  },
  {
    question: "Do you provide support after purchase?",
    answer:
      "Yes. Our team remains available to assist with documentation, ownership transfer, and any post-purchase questions.",
  },
];

function FAQ() {
  const [active, setActive] = useState(null);

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="faq" id="faq">
      <div className="faq-header">
        <p>FREQUENTLY ASKED QUESTIONS</p>
        <h2>Everything You Need to Know</h2>
      </div>

      <div className="faq-container">
        {faqData.map((item, index) => (
          <div
            className={`faq-item ${active === index ? "active" : ""}`}
            key={index}
          >
            <div
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              <h3>{item.question}</h3>

              {active === index ? (
                <FaChevronUp />
              ) : (
                <FaChevronDown />
              )}
            </div>

            {active === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
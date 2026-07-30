import "../../assets/styles/Properties.css";
import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaHeart,
  FaMapMarkerAlt,
} from "react-icons/fa";

const properties = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    price: "$850,000",
    title: "Modern Luxury Villa",
    location: "Los Angeles, California",
    beds: 4,
    baths: 3,
    area: "3,200 sqft",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
    price: "$620,000",
    title: "Elegant Family House",
    location: "Miami, Florida",
    beds: 3,
    baths: 2,
    area: "2,500 sqft",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
    price: "$1,200,000",
    title: "Luxury Penthouse",
    location: "New York City",
    beds: 5,
    baths: 4,
    area: "4,100 sqft",
  },
];

function Properties() {
  return (
    <section className="properties" id="properties">
      <div className="heading">
        <span>Featured Properties</span>
        <h2>Find Your Perfect Home</h2>
      </div>

      <div className="property-grid">
        {properties.map((property) => (
          <div className="property-card" key={property.id}>
            <div className="property-image">
              <img src={property.image} alt={property.title} />
              <button className="fav-btn">
                <FaHeart />
              </button>
            </div>

            <div className="property-content">
              <h3>{property.price}</h3>
              <h4>{property.title}</h4>

              <p>
                <FaMapMarkerAlt /> {property.location}
              </p>

              <div className="details">
                <span>
                  <FaBed /> {property.beds}
                </span>

                <span>
                  <FaBath /> {property.baths}
                </span>

                <span>
                  <FaRulerCombined /> {property.area}
                </span>
              </div>

              <button className="view-btn">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Properties;
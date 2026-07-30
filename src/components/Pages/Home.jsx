import "../../assets/styles/Home.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay">
        <div className="hero-content">
          <p className="hero-subtitle">Find Your Dream Home</p>

          <h1>
            Discover Luxury
            <br />
            Real Estate
          </h1>

          <p className="hero-text">
            Explore premium apartments, villas, and commercial properties
            across the country with trusted agents.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">Explore Properties</button>
            <button className="btn-secondary">Contact Agent</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
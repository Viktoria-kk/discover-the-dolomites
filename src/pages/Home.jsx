import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="home-page">
      <div className="hero">
        <div className="hero-content">
          <p className="eyebrow">Italian Alps Travel Guide</p>
          <h1>Explore the Beauty of Italy's Dolomites</h1>
          <p className="hero-description">
            Discover breathtaking mountain landscapes, alpine lakes, charming villages, and
            unforgettable adventures in one of Europe's most stunning destinations.
          </p>
          <Link className="cta-button" to="/travelers">
            Meet Our Travelers
          </Link>
        </div>

        <div className="hero-image-wrap">
          <img
            className="hero-image"
            src="https://images.unsplash.com/photo-1663806232064-3b0385cc4819?auto=format&fit=crop&w=1800&q=85"
            alt="Dolomite village and mountain peaks at sunrise"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;

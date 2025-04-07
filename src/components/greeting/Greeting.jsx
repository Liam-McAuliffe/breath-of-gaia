import './greeting.css';

const Greeting = () => {
  return (
    <div className="greeting">
      <h1>Breath of Gaia</h1>
      <p className="tagline">Explore your home's impact on the planet.</p>
      <p className="description">
        Enter your address to discover your estimated electricity usage, carbon
        footprint, and local air quality levels — all in one place.
      </p>
    </div>
  );
};

export default Greeting;

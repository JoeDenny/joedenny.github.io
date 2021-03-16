import bike from '../assets/bike1.jpg';

function Home() {
  return (
    <div className="home-page">
      <div
        className="image-container"
        style={{ backgroundImage: `url(${bike})` }}
      />
      <div className="text-content">
        <h1>Joe Denny</h1>
        <p>Web developer based in London</p>
      </div>
    </div>
  );
}

export default Home;

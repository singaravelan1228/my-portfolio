import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="section home-section">
      <div className="hero-bg"></div>
      <div className="container text-center fade-in home-hero">
        <h1 className="hero-title">Welcome to My Portfolio</h1>
        <p className="hero-subtitle">SINGARAVELAN D - React & Python Developer</p>
        <Link to="/projects" className="btn hover-scale">View My Work</Link>
        <div className="hero-tags">
          <span>UI</span>
          <span>React</span>
          <span>Python</span>
          <span>Django</span>
          <span>MySQL</span>
        </div>
      </div>
    </section>
  );
}
export default Home;
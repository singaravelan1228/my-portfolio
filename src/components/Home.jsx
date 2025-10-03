import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="section bg-gradient">
      <div className="container text-center fade-in">
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Welcome to My Portfolio</h1>
        <p style={{ fontSize: '1.50rem', marginBottom: '1.5rem' }}>SINGARAVELAN D - React & Python Developer</p>
        <Link to="/projects" className="btn hover-scale">View My Work</Link>
      </div>
    </section>
  );
}
export default Home;
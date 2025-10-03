import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setStatus('Please fill all fields.');
    }
  };

  return (
    <section className="section bg-light-gray">
      <div className="container slide-in">
        <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '1rem' }}>Contact Me</h2>
        <form onSubmit={handleSubmit} className="card" style={{ maxWidth: '500px', margin: '0 auto' }}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
            ></textarea>
          </div>
          <button type="submit" className="btn hover-scale">Send</button>
          {status && <p style={{ textAlign: 'center', marginTop: '1rem' }}>{status}</p>}
        </form>
        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <p>Email: <a href="mailto:Singaravelan1228@gmail.com" style={{ color: '#1e40af' }}>Singaravelan1228@gmail.com</a></p>
          <p>Phone: +918807039318</p>
          <p>GitHub: <a href="https://github.com/singaravelan1228" style={{ color: '#1e40af' }}>github.com/singaravelan1228</a></p>
          <p>Linkedin: <a href="https://www.linkedin.com/in/singaravelan-d-89b9a6322/" style={{ color: '#1e40af' }}>linkedin.com/singaravelan1228</a></p>
        </div>
      </div>
    </section>
  );
}
export default Contact;
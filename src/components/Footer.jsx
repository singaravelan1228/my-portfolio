import { useEffect, useRef, useState } from 'react';

function Footer() {
  const [counts, setCounts] = useState({ projects: 0, experience: 0, skills: 0 });
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const animateCounter = (target, key, max, duration) => {
            let start = 0;
            const increment = max / (duration / 16); // 60fps
            const timer = setInterval(() => {
              start += increment;
              if (start >= max) {
                start = max;
                clearInterval(timer);
              }
              setCounts((prev) => ({ ...prev, [key]: Math.floor(start) }));
            }, 16);
          };
          animateCounter(2, 'projects', 2, 2000); // 5 projects, 2s
          animateCounter(0.6, 'experience', 0.6, 2000); // 3 years, 2s
          animateCounter(7, 'skills', 7, 2000); // 10 skills, 2s
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer className="footer" ref={footerRef}>
      <div className="container">
        <div className="footer-stats">
          <div className="card fade-in">
            <h3>{counts.projects}+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="card fade-in">
            <h3>{counts.experience}+</h3>
            <p>Years Experience</p>
          </div>
          <div className="card fade-in">
            <h3>{counts.skills}+</h3>
            <p>Skills Mastered</p>
          </div>
        </div>
        <div className="footer-social">
          <a
            href="https://github.com/singaravelan1228"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link hover-scale"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.906-.015 3.3 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/singaravelan" // Replace with your LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            className="social-link hover-scale"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-1.337-.027-3.064-1.867-3.064-1.867 0-2.152 1.459-2.152 2.969v5.699h-3v-11h2.879v1.509h.041c.401-.757 1.379-1.557 2.834-1.557 3.027 0 3.584 1.993 3.584 4.582v6.466z" />
            </svg>
          </a>
          <a
            href="mailto:Singaravelan1228@gmail.com"
            className="social-link hover-scale"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 12.713l11.985-7.428c-.152-.957-.873-1.785-1.985-1.785h-20c-1.112 0-1.833.828-1.985 1.785l11.985 7.428zm12 1.287l-12 7.428-12-7.428v8c0 1.105.895 2 2 2h20c1.105 0 2-.895 2-2v-8z" />
            </svg>
          </a>
        </div>
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Singaravelan D. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
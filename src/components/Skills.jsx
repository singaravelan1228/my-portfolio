import { useEffect } from "react";

function Skills() {
  const skills = [
    { name: 'React', level: 'Router, Hooks,REST API Vite etc...' },
    { name: 'Python', level: 'Oops, Lambda...' },
    { name: 'Django', level: 'MVT, ORM,DRF and Admin dashboard etc...' },
    { name: 'JavaScript', level: 'Advanced like Anonymous functions, Promises, Async/Await, etc...' },
    { name: 'HTML5 & CSS', level: 'Advanced' },
    { name: 'MySQL', level: 'DDL, DQL, DML, DCL and more...' },
    { name: 'Git & GitHub', level: 'Intermediate like push, pull, track, and get the code' },
  ];

  return (
    <section className="section bg-light-gray skills-section">
      <div className="container slide-in">
        <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          Technical Skills
        </h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="card hover-scale">
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600' }}>{skill.name}</h3>
              <p>{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

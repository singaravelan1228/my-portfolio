import { useEffect } from "react";

function Skills() {
  const skills = [
    { name: 'React', level: 'Router, Hooks, etc...' },
    { name: 'Python', level: 'Oops, Lambda...' },
    { name: 'Django', level: 'MVT, ORM, Admin dashboard. like etc...' },
    { name: 'JavaScript', level: 'Advanced like Anonymous fun, promises, Async Await, etc...' },
    { name: 'HTML5 & CSS', level: 'Advanced' },
    { name: 'Sql', level: 'Intermediate like DDL, DQL DML, DCL' },
    { name: 'Git & GitHub', level: 'Intermediate like puse the code & pull the code and trak and get the code' },
    
  ];
 
  return (
    <section className="section bg-light-gray">
      <div className="container slide-in">
        <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '1rem' }}>Technical Skills</h2>
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
function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A fully functional online shopping platform built with Django and React, featuring user authentication, product catalog, shopping cart, order tracking, and an admin dashboard.',
      tech: ['React', 'Django', 'SQLite', 'HTML', 'CSS', 'JavaScript', 'Stripe'],
      duration: '3 Months',
      achievements: 'Completed 20% ahead of schedule by optimizing resources and streamlining processes.',
    },
       {
      title: 'Vehicle Rental System',
      description: 'I have been working on a vehicle rental system that allows users to rent vehicles online. The system includes features such as vehicle catalog, booking management and user authentication,',
      tech: ['React', 'HTML', 'CSS', 'JavaScript',],
      duration: 'Took 2 months to complete',
      achievements: 'This is gonna be a static website with all the features of a vehicle rental system.',
    },
    {
      title: 'Retail Inventory Management System',
      description: 'I have been working on a retail inventory management system that helps businesses manage their inventory efficiently. The system includes features such as product catalog, stock management, and sales tracking.',
      tech: ['React', 'Express', 'MongoDB'],
      duration: 'Still Working on it',
      achievements: 'This is gonna be a static website with all the features of a retail inventory management system.',
    },
  ];
  return (
    <section className="section bg-gray projects-section">
      <div className="container slide-in">
        <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '1rem' }}>Projects</h2>
        {projects.map((project, index) => (
          <div key={index} className="card hover-scale">
            <h3 style={{ fontSize: '1.5rem', fontWeight: '600' }}>{project.title}</h3>
            <p style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>{project.description}</p>
            <p><strong>Technologies:</strong> {project.tech.join(', ')}</p>
            <p><strong>Duration:</strong> {project.duration}</p>
            <p><strong>Achievements:</strong> {project.achievements}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Projects;
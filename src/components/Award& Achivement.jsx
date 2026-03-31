function AwardsAchivements() {
  const Award = [
    {
      title: 'Django Development Course at WingsCAD',
      description: 'During my Django Development course at WingsCAD, I gained a solid foundation in backend web development. The curriculum covered Django, Python, and database management, and I got to build quite a few things hands-on. Here are the main takeaways and skills I developed',
      tech: [ 'Python', 'Django', 'MySQL'],
      duration: '5 Months',
      achievements: 'Successfully built a fully functional web application using Django and Python during the course, which helped me strengthen my backend skills and gain hands-on experience in modern web development.',
    },
   
  ];
  return (
    <section className="section bg-gray">
      <div className="container slide-in">
        <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '1rem' }}>Course</h2>
        {Award.map((course, index) => (
          <div key={index} className="card hover-scale">
            <h3 style={{ fontSize: '1.5rem', fontWeight: '600' }}>{course.title}</h3>
            <p style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>{course.description}</p>
            <p><strong>Technologies:</strong> {course.tech.join(', ')}</p>
            <p><strong>Duration:</strong> {course.duration}</p>
            <p><strong>Achievements:</strong> {course.achievements}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default AwardsAchivements;
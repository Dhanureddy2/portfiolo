import React from 'react';

function Projects() {
  const projects = [
    {
      title: 'Full Website Page Design',
      description: 'Designed and developed a comprehensive website page, focusing on clean design and responsive layout using HTML and CSS.',
    },
    {
      title: 'Electronic Bidding System',
      description: 'Created an electronic bidding system console application using Java, facilitating online auctions and employing a client-server architecture.',
    },
    {
      title: 'Login Page with Registration Form',
      description: 'Built a dynamic login page with an integrated registration form featuring client-side validation and interactive elements using HTML, CSS, and JavaScript.',
    },
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div>
        {projects.map((project, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

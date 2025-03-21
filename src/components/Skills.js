import React from 'react';

function Skills() {
  const skills = ['Java', 'Python', 'HTML', 'CSS', 'JavaScript', 'SAP', 'Cloud Computing', 'Node.js'];
  return (
    <section id="skills">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;

import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>Hi, I'm Shaik Toufeeq</h1>
          <p>B.Tech Student | Aspiring Full-Stack Developer</p>
          <nav className="nav">
            <a href="#personal">Personal Info</a>
            <a href="#education">Education</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Work</a>
            <a href="#achievements">Achievements</a>
            <a href="#reflections">Reflections</a>
            <a href="#samples">Samples</a>
            <a href="#extracurricular">Activities</a>
            <a href="#resume">Resume</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* Personal Information */}
      <section id="personal" className="section">
        <h2>Personal Information</h2>
        <p><strong>Name:</strong> Shaik Toufeeq</p>
        <p><strong>Email:</strong> <a href="mailto:toufeeqsk69@gmail.com">toufeeqsk69@gmail.com</a></p>
        <p><strong>GitHub:</strong> <a href="https://github.com/toufeeqsk69" target="_blank" rel="noreferrer">github.com/toufeeqsk69</a></p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/toufeeq-shaik-458a26365/" target="_blank" rel="noreferrer">linkedin.com/in/toufeeq-shaik</a></p>
        <p><strong>Location:</strong> India</p>
      </section>

      {/* Education */}
      <section id="education" className="section gray">
        <h2>Education</h2>
        <ul>
          <li><strong>B.Tech in Computer Science</strong> – IIIT Sri City (2023–2027)</li>
          <li><strong>Intermediate</strong> – FIITJEE (2021–2023)</li>
          <li><strong>10th Standard</strong> – St. Ann’s (2021 Batch)</li>
        </ul>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <h2>Skills</h2>
        <h3>Languages</h3>
        <p>C, C++, Java, JavaScript</p>
        <h3>Technologies</h3>
        <p>Node.js, Express.js, React.js, REST API, Tailwind CSS</p>
        <h3>Databases</h3>
        <p>MongoDB, MySQL</p>
      </section>

      {/* Work Experience / Projects */}
      <section id="projects" className="section gray">
        <h2>Work Experience / Projects</h2>
        <div className="projects">
          <div className="card">
            <h3>Portfolio Website</h3>
            <p>A personal website built with React.</p>
          </div>
          <div className="card">
            <h3>Student Management System</h3>
            <p>A web app to manage student records using Express.js and MongoDB.</p>
          </div>
        </div>
      </section>

      {/* Achievements & Awards */}
      <section id="achievements" className="section">
        <h2>Achievements & Awards</h2>
        <ul>
          <li>Won 1st place in College Hackathon 2024</li>
          <li>Certified in Java & Web Development</li>
          <li>Top 10 in National Coding Contest</li>
        </ul>
      </section>

      {/* Reflections / Personal Statement */}
      <section id="reflections" className="section gray">
        <h2>Reflections / Personal Statement</h2>
        <p>
          I believe that technology is not just about coding, but about solving 
          real-world problems and improving lives. My journey as a student has 
          taught me persistence, teamwork, and the importance of continuous 
          learning. I aim to become a skilled full-stack developer and 
          contribute meaningfully to the tech community.
        </p>
      </section>

      {/* Samples of Work */}
      <section id="samples" className="section">
        <h2>Samples of Work</h2>
        <p>Here you can showcase screenshots, GitHub links, or demos of your work.</p>
        <ul>
          <li><a href="https://github.com/toufeeqsk69" target="_blank" rel="noreferrer">GitHub Projects</a></li>
        </ul>
      </section>

      {/* Extracurricular & Volunteering */}
      <section id="extracurricular" className="section gray">
        <h2>Extracurricular & Volunteering</h2>
        <ul>
          <li>Organized college coding workshops</li>
          <li>Active member of Tech Club</li>
          <li>Volunteered in community teaching programs</li>
        </ul>
      </section>

      {/* Resume & References */}
      <section id="resume" className="section">
        <h2>Resume & References</h2>
        <p>
          Download my resume: <a href="/resume.pdf" download>Click Here</a>
        </p>
        <p><strong>References available on request</strong></p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section gray">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:toufeeqsk69@gmail.com">toufeeqsk69@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/toufeeq-shaik-458a26365/" target="_blank" rel="noreferrer">linkedin.com/in/toufeeq-shaik</a></p>
        <p>GitHub: <a href="https://github.com/toufeeqsk69" target="_blank" rel="noreferrer">github.com/toufeeqsk69</a></p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Shaik Toufeeq | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;

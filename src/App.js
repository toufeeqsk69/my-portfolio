import React from "react";
import "./App.css";
import mePhoto from './me.png';
function App() {
  return (
    <div className="App">
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>Hi, I'm Shaik Toufeeq</h1>
          <p>B.Tech Student | Aspiring Full-Stack Developer</p>
          <nav className="nav">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="section about">
        <div className="about-content">
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              My name is <strong>Shaik Toufeeq</strong>, and I am currently pursuing my B.Tech.
              I have a deep interest in technology and software development, and I
              enjoy solving real-world problems through coding. Over time, I have
              explored different programming languages, frameworks, and databases,
              which helped me build strong foundations as a developer.
            </p>
            <p>
              I love working on full-stack web applications and continuously learning
              new tools that make development faster and more efficient. My goal is to
              become a skilled full-stack developer and contribute to impactful
              projects in the tech industry.
            </p>
          </div>
          <div className="about-photo">
            <img src={mePhoto} alt="Shaik Toufeeq" />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section gray">
        <h2>Skills</h2>
        <div className="skills-section">
          <h3>Languages</h3>
          <div className="skills">
            <span>C</span>
            <span>C++</span>
            <span>Java</span>
            <span>JavaScript</span>
          </div>

          <h3>Technologies</h3>
          <div className="skills">
            <span>Node.js</span>
            <span>Express.js</span>
            <span>React.js</span>
            <span>REST API</span>
            <span>Tailwind CSS</span>
          </div>

          <h3>Databases</h3>
          <div className="skills">
            <span>MongoDB</span>
            <span>MySQL</span>
            <span>Firebase</span>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="projects">
          <div className="card">
            <h3>Portfolio Website</h3>
            <p>A personal website built with React.</p>
          </div>
          <div className="card">
            <h3>Second hand vehicle selling website</h3>
            <p>A MERN stack application for buying and selling used vehicles.</p>
          </div>
          <div className="card">
            <h3>Student Management System</h3>
            <p>A web app to manage student records using Express.js and MongoDB.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section gray">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:toufeeqsk69@gmail.com">toufeeqsk69@gmail.com</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/shaiktoufeeq" target="_blank" rel="noreferrer">linkedin.com/in/shaiktoufeeq</a></p>
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

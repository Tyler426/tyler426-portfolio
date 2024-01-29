// index.jsx
import React from 'react';
import './styles.css'; // Import your CSS file here

const Home = () => {
  return (
    <div>
      <head>
        <title>Your Name - Portfolio</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" />
      </head>

      <header>
        <h1>Your Name</h1>
        <p>Web Developer | Designer</p>
      </header>

      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Skills</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      <section>
        <h2>About Me</h2>
        <p>Write a brief introduction about yourself here.</p>

        <h2>Skills</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          {/* Add more skills as needed */}
        </ul>

        <h2>Projects</h2>
        {/* Add details about your projects here */}

        <h2>Contact</h2>
        <p>Email: your.email@example.com</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">Your LinkedIn</a></p>
        <p>GitHub: <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">Your GitHub</a></p>
      </section>

      <footer>
        <p>&copy; 2024 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;

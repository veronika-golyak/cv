

import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="main-wrapper">
      <div className="container">
        <article className="resume-wrapper theme-bg-light p-5 mb-5 shadow-lg">
          <div className="resume-header text-left">
            <div className="resume-title">
              <h2 className="resume-name mb-0 text-uppercase">Veronika Golyak</h2>
              <div className="resume-tagline mb-3">Backend Developer</div>
            </div>
          </div>
          <div className="resume-intro py-3 text-left d-flex">
            <img 
              src="avatar.jpg" 
              alt="Veronika Goliak" 
              className="profile-image" 
            />
            <p className="mb-0 ml-3">
              A Backend Developer with foundational experience in web development, skilled in creating efficient applications. 
              Worked on personal projects that leverage modern technologies to enhance functionality and user experience.
            </p>
          </div>

          <div className="resume-section text-left">
            <h3 className="text-blue-gray">Skills & Expertise</h3>
            <div className="skills-container border p-3">
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Redux</li>
                <li>Tailwind CSS</li>
                <li>Figma</li>
                <li>TypeScript</li>
              </ul>
            </div>
          </div>

          <div className="resume-section text-left">
            <h3 className="text-blue-gray">Languages</h3>
            <ul>
              <li>Russian: Native</li>
              <li>English: B2</li>
            </ul>
          </div>

          <div className="resume-section text-left">
            <h3 className="text-blue-gray">Education</h3>
            <p>Belarusian State University, Mechanics and Mathematics Faculty. Web Programming and Internet Technologies.</p>
          </div>

          <div className="resume-section text-left">
            <h3 className="text-blue-gray">Freelance Experience</h3>
            <p>
              By freelancing, I was able to enhance my skills and complete numerous unique projects.
            </p>
          </div>
          
          <div className="resume-section text-left">
            <h3 className="text-blue-gray">Projects</h3>
            <ul>
              <li>
                <a href="https://github.com/veronika-golyak/API" target="_blank" rel="noopener noreferrer">API</a>:
                A RESTful API built with Node.js and Express, providing data for various applications.
              </li>
              <li>
                <a href="https://github.com/veronika-golyak/lamoda" target="_blank" rel="noopener noreferrer">Clone Lamoda</a>:
                An e-commerce website clone using React, mimicking the functionality of the original site.
              </li>
              <li>
                <a href="https://github.com/veronika-golyak/notion" target="_blank" rel="noopener noreferrer">Notion</a>:
                A productivity application built with React that allows users to create, edit, and manage notes, similar to Notion.
              </li>
              <li>
                <a href="https://github.com/veronika-golyak/notion_redux" target="_blank" rel="noopener noreferrer">Notion Redux</a>:
                An extended version of the Notion app that incorporates Redux for state management, enhancing app performance and user experience.
              </li>
            </ul>
          </div>

          <div className="resume-section text-left">
            <h3 className="text-blue-gray">Social Links</h3>
            <ul>
              <li><a href="https://t.me/iniksssss" target="_blank" rel="noopener noreferrer">Telegram</a></li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  );
};

export default App;
import React from "react";
import "./../styles/MyFuture.css";

function MyFuture() {
  return (
    <div className="future-container">
      <h1 className="future-title">My Professional Growth</h1>

      <div className="future-steps">
        <h2 className="steps-title">Three Steps Towards My Future</h2>
        <ol className="steps-list">
          <li>
            Innovate Digital Solutions for Science
            <div className="subheading">
              <h3>Essential Skills</h3>
              <p>
                Expertise in computer science, programming (Python, JavaScript, C++), database management, and algorithms. Collaboration and project management are key.
              </p>
            </div>
            <div className="subheading">
              <h3>My Goal</h3>
              <p>Become a developer for open scientific platforms that empower global data exchange and research collaboration.</p>
            </div>
          </li>
          <li>
            Master Artificial Intelligence and Machine Learning
            <div className="subheading">
              <h3>What’s Needed</h3>
              <p>Deep knowledge of machine learning algorithms, probability theory, and working with large datasets using Python and C++.</p>
            </div>
            <div className="subheading">
              <h3>My Goal</h3>
              <p>Build intelligent systems for predictive analysis and data-driven insights.</p>
            </div>
          </li>
          <li>
            Evolve into a Full-Stack Developer
            <div className="subheading">
              <h3>Required Skills</h3>
              <p>Proficiency in front-end and back-end technologies (React, Node.js, databases), cloud technologies, and API integrations.</p>
            </div>
            <div className="subheading">
              <h3>My Goal</h3>
              <p>Continue developing scalable web applications and mastering new tools and frameworks.</p>
            </div>
          </li>
        </ol>
      </div>

      <blockquote className="motivation-quote">
        “Growth is not a destination, but a continuous journey where every day brings new opportunities to learn.”
      </blockquote>

      <div className="dream-job">
        <h2 className="job-title">Dream Job</h2>
        <p>
          My ideal role is working as a software developer in a team focused on creating innovative technologies for science. I aim to contribute to platforms that simplify data exchange, automate processes, and improve collaboration among researchers worldwide. My responsibilities will include developing microservices, integrating APIs, and building digital solutions to accelerate scientific discovery.
        </p>
      </div>
    </div>
  );
}

export default MyFuture;

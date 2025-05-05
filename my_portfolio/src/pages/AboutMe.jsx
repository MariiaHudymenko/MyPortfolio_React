import "./../styles/AboutMe.css";

function AboutMe() {
  return (
    <div className="about-container">
      <h1 className="about-title">About Me</h1>

      <section>
        <h2 className="about-subtitle">Who I am as a person and a developer</h2>
        <p className="about-paragraph">
          Hello! I am Maria Hudymenko, a Computer Science student with a strong
          passion for programming and software development. While I primarily
          focus on web development, my skills extend to software development,
          working with databases, and process automation. My goal is to create
          user-friendly, efficient, and innovative solutions using a broad range
          of technologies.
        </p>
        <p className="about-paragraph">
          I work as a Front-end, Back-end, and even C++ developer, which allows
          me to combine different approaches in creating programs and make projects
          more scalable and functional. Additionally, I have experience working
          with databases and designing schemas, which adds depth to my understanding
          of software architecture.
        </p>
      </section>

      <section>
        <h2 className="about-subtitle">My Values and Passions</h2>
        <p className="about-paragraph">
          I am always striving to grow and learn new technologies. I enjoy solving
          complex problems, working in teams, and finding ways to optimize and automate
          processes. My passion for programming goes beyond just building websites —
          I actively explore new tools and methods in other areas of software engineering.
        </p>
      </section>

      <section>
        <h2 className="about-subtitle">My Projects</h2>

        <div className="projects-grid">
          <div className="project-card">
            <h3>1. Front-end & Backend Developer</h3>
            <p>
              Development of the "Cinema Ticket Booking Service" web application in a team
              of 3 people using JavaScript, HTML, and CSS.
            </p>
          </div>

          <div className="project-card">
            <h3>2. C++ Software Developer</h3>
            <p>
              Development of a text translation automation program using object-oriented
              programming (OOP) in C++.
            </p>
          </div>

          <div className="project-card">
            <h3>3. Database Developer</h3>
            <p>
              Designing a database to automate the work process for a computer hardware
              sales manager.
            </p>
          </div>

          <div className="project-card">
            <h3>4. HTML + CSS</h3>
            <a
              href="https://github.com/MariiaHudymenko/html-css-landing"
              target="_blank"
              rel="noopener noreferrer"
            >
              html-css-landing
            </a>
          </div>

          <div className="project-card">
            <h3>5. JavaScript</h3>
            <a
              href="https://github.com/MariiaHudymenko/js-html-css-Calculator"
              target="_blank"
              rel="noopener noreferrer"
            >
              Calculator
            </a>
            <br />
            <a
              href="https://github.com/MariiaHudymenko/js-arrayMoreMethods"
              target="_blank"
              rel="noopener noreferrer"
            >
              js-arrayMoreMethods
            </a>
          </div>

          <div className="project-card">
            <h3>6. React</h3>
            <a
              href="https://github.com/MariiaHudymenko/Lab14_useEffect"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lab useEffect
            </a>
            <br />
            <a
              href="https://github.com/MariiaHudymenko/Gallery_Api"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gallery Api
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutMe;

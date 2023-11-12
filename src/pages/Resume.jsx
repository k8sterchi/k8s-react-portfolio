
import resumePDF from '/src/documents/Resume_k8s.pdf'; 

const Resume = () => {
  return (
    <div>
      <section>
        <h1 style={{ color: '#ccc' }}>Education</h1>
        <div>
          <h3>University of Texas</h3>
          <p>Fullstack Coding Bootcamp</p>
          <ul>
            <li>Computer Science applied to JavaScript</li>
            <li>Browser-Based Technologies (HTML, CSS, JavaScript, jQuery)</li>
            <li>Deployment (Heroku, Git)</li>
            <li>Databases (MySQL, MongoDB)</li>
            <li>Server Side Development (Node.js, Express, MERN Stack)</li>
          </ul>

          <p>2023</p>
        </div>
        <div>
          <h3>Funen Art Academy</h3>
          <p>Odense, Denmark</p>
          <p>MFA</p>
          <p>Painting</p>
          <p>2017</p>
        </div>
      </section>

      <section>
        <h1 style={{ color: '#ccc' }}>Experience</h1>
        <div>
          <h3>Judd Foundation</h3>
          <p>Artist/Guide</p>
          <p>Marfa, Texas</p>
          <p>2021 - present</p>
        </div>
        <div>
          <h3>Marfa Food Pantry</h3>
          <p>Coordinator</p>
          <p>Marfa, Texas</p>
          <p>2020 - 2022</p>
        </div>
      </section>

      {/* Download Resume section */}
      <div>
        <h2 style={{ color: '#ccc' }}>Download Resume</h2>
        <p>
          <a href={resumePDF} download="k8s_resume.pdf" style={{ color: '#ccc' }}>
            Download My Resume
          </a>
        </p>
      </div>
    </div>
  );
};

export default Resume;

import ProjectCard from '../components/ProjectCard';

const Portfolio = () => {
  return (
    <div>
      <h1>Portfolio</h1>

      <div className="portfolio-container">
        {/* Project 1 */}
        <ProjectCard
          title="Project 1"
          imageSrc="path/to/project1-image.jpg"
          deployLink="https://example.com/project1"
          githubLink="https://github.com/yourusername/project1"
        />

        {/* Project 2 */}
        <ProjectCard
          title="Project 2"
          imageSrc="path/to/project2-image.jpg"
          deployLink="https://example.com/project2"
          githubLink="https://github.com/yourusername/project2"
        />

         {/* Project 3 */}
         <ProjectCard
          title="Project 3"
          imageSrc="path/to/project3-image.jpg"
          deployLink="https://example.com/project3"
          githubLink="https://github.com/yourusername/project3"
        />

         {/* Project 4 */}
         <ProjectCard
          title="Project 4"
          imageSrc="path/to/project4-image.jpg"
          deployLink="https://example.com/project4"
          githubLink="https://github.com/yourusername/project4"
        />

         {/* Project 5 */}
         <ProjectCard
          title="Project 5"
          imageSrc="path/to/project5-image.jpg"
          deployLink="https://example.com/project5"
          githubLink="https://github.com/yourusername/project5"
        />

         {/* Project 6 */}
         <ProjectCard
          title="Project 6"
          imageSrc="path/to/project6-image.jpg"
          deployLink="https://example.com/project6"
          githubLink="https://github.com/yourusername/project6"
        />
      </div>
    </div>
  );
};

export default Portfolio;
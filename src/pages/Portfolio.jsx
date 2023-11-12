import ProjectCard from '../components/ProjectCard';

const Portfolio = () => {
  return (
    <div>
      <h1>Portfolio</h1>

      <div className="portfolio-container">
        {/* Project 1 */}
        <ProjectCard
          title="Project 1"
          imageSrc="./src/images/Project1_k8s.png"
          deployLink="https://k8sterchi.github.io/K8-Portfolio/"
          githubLink="https://github.com/k8sterchi/K8-Portfolio"
        />

        {/* Project 2 */}
        <ProjectCard
          title="Project 2"
          imageSrc="./src/images/Project2_k8s.png"
          deployLink="https://example.com/project2"
          githubLink="https://github.com/yourusername/project2"
        />

         {/* Project 3 */}
         <ProjectCard
          title="Project 3"
          imageSrc="./src/images/Project3_k8s.png"
          deployLink="https://example.com/project3"
          githubLink="https://github.com/yourusername/project3"
        />

         {/* Project 4 */}
         <ProjectCard
          title="Project 4"
          imageSrc="./src/images/Project4_k8s.png"
          deployLink="https://example.com/project4"
          githubLink="https://github.com/yourusername/project4"
        />

         {/* Project 5 */}
         <ProjectCard
          title="Project 5"
          imageSrc="./src/images/Project5_k8s.png"
          deployLink="https://example.com/project5"
          githubLink="https://github.com/yourusername/project5"
        />

         {/* Project 6 */}
         <ProjectCard
          title="Project 6"
          imageSrc="./src/images/Project6_k8s.png"
          deployLink="https://example.com/project6"
          githubLink="https://github.com/yourusername/project6"
        />
      </div>
    </div>
  );
};

export default Portfolio;
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
          deployLink="https://k8sterchi.github.io/k8s-scheduler/"
          githubLink="https://github.com/k8sterchi/k8s-scheduler"
        />

         {/* Project 3 */}
         <ProjectCard
          title="Project 3"
          imageSrc="./src/images/Project3_k8s.png"
          deployLink="https://k8sterchi.github.io/gener8r/"
          githubLink="https://github.com/k8sterchi/gener8r"
        />

         {/* Project 4 */}
         <ProjectCard
          title="Project 4"
          imageSrc="./src/images/Project4_k8s.png"
          deployLink="https://jackelam20.github.io/Rats-are-crazy/"
          githubLink="https://github.com/Jackelam20/Rats-are-crazy"
        />

         {/* Project 5 */}
         <ProjectCard
          title="Project 5"
          imageSrc="./src/images/Project5_k8s.png"
          deployLink="https://companion-planting-ecec108bfc1e.herokuapp.com/login/"
          githubLink="https://github.com/aceiln/GardnersSpot"
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
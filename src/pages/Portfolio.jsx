import ProjectCard from '../components/ProjectCard';
import project1Image from "../images/project1k8s.png";
import project2Image from "../images/project2k8s.png";
import project3Image from "../images/project3k8s.png";
import project4Image from "../images/project4k8s.png";
import project5Image from "../images/project5k8s.png";
import project6Image from "../images/project6k8s.png";

const Portfolio = () => {
  return (
    <div>
      <h1>Portfolio</h1>

      <div className="portfolio-container">
        {/* Project 1 */}
        <ProjectCard
          title="Project 1"
          imageSrc={project1Image}
          deployLink="https://k8sterchi.github.io/K8-Portfolio/"
          githubLink="https://github.com/k8sterchi/K8-Portfolio"
        />

        {/* Project 2 */}
        <ProjectCard
          title="Project 2"
          imageSrc={project2Image}
          deployLink="https://k8sterchi.github.io/k8s-scheduler/"
          githubLink="https://github.com/k8sterchi/k8s-scheduler"
        />

         {/* Project 3 */}
         <ProjectCard
          title="Project 3"
          imageSrc={project3Image}
          deployLink="https://k8sterchi.github.io/gener8r/"
          githubLink="https://github.com/k8sterchi/gener8r"
        />

         {/* Project 4 */}
         <ProjectCard
          title={project4Image}
          imageSrc="./src/images/project4k8s.png"
          deployLink="https://jackelam20.github.io/Rats-are-crazy/"
          githubLink="https://github.com/Jackelam20/Rats-are-crazy"
        />

         {/* Project 5 */}
         <ProjectCard
          title={project5Image}
          imageSrc="./src/images/project5k8s.png"
          deployLink="https://companion-planting-ecec108bfc1e.herokuapp.com/login/"
          githubLink="https://github.com/aceiln/GardnersSpot"
        />

         {/* Project 6 */}
         <ProjectCard
          title={project6Image}
          imageSrc="./src/images/project6k8s.png"
          deployLink="https://boiling-anchorage-11027-d19406c04dfb.herokuapp.com/"
          githubLink="https://github.com/DanielTBonn/collectors-connect"
        />
      </div>
    </div>
  );
};

export default Portfolio;
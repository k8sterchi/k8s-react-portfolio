const ProjectCard = ({ title, imageSrc, deployLink, githubLink }) => {
    return (
      <div className="project-card">
        <img src={imageSrc} alt={title} />
        <h3>{title}</h3>
        <div className="project-links">
          <a href={deployLink} target="_blank" rel="noopener noreferrer">
            Deployed App
          </a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            GitHub Repository
          </a>
        </div>
      </div>
    );
  };
  
  export default ProjectCard;
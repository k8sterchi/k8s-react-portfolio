import Avatar from '../components/Avatar';

const About = () => {
  return (
    <div className="about-container">
      <Avatar src="./src/images/Profile_k8s.jpg" alt="Profile Picture" />
      <div className="bio">
        <h2>Your Name</h2>
        <p>
          Write a short bio about yourself. You can mention your skills, interests, and any other relevant information.
        </p>
      </div>
    </div>
  );
};

export default About;
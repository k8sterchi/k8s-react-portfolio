import Avatar from '../components/Avatar';
import profileImage from "../images/profilek8s.jpg"

const About = () => {
  return (
    <div className="about-container">
      <Avatar src={profileImage} alt="Profile Picture" />
      <div className="bio">
        <h2>Hi! My name is Kate.</h2>
        <p>
         My interests are primarily in decentralized social media and decentralized finance. However, I am quite new to developing, so my portfolio reflects the beginning of my journey towards creating new systems of relation and exchange. 
        </p>
      </div>
    </div>
  );
};

export default About;
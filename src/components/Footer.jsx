import { FaGithub, FaLinkedin } from 'react-icons/fa';
import '../App.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://github.com/k8sterchi" target="_blank" rel="noopener noreferrer">
          <FaGithub size={50} /> 
        </a>
        <a href="https://linkedin.com/in/kate-sterchi-5b307329b" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={50} /> 
        </a>
      </div>
    </footer>
  );
};

export default Footer;

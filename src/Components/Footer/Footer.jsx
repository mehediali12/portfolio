import "./Footer.scss";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='footer'>
      <h1 className='footer__title'>mehediali</h1>
      <div className='footer__socials'>
        <a href='https://github.com/mehediali12' target={"_blank"}>
          <FaGithub className='footer__icon' size={22} />
        </a>
        <a
          href='https://www.linkedin.com/in/mehedi-ali-profile/'
          target={"_blank"}
        >
          <FaLinkedin className='footer__icon' size={22} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

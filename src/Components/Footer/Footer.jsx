import "./Footer.scss";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import shape from "../../assets/images/shape4.png";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container'>
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
      </div>

      <img className='footer__shape' src={shape} alt='' />
    </footer>
  );
};

export default Footer;

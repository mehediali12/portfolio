import "./Hero.scss";
import shape1 from "../../assets/images/shape1.png";
import shape3 from "../../assets/images/shape3.png";
import mehedi from "../../assets/images/mehedi.jpg";

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero__container'>
        <img src={mehedi} alt='Image of Mehedi' className='hero__profileImg' />
        <div className='hero__text-wrapper'>
          <h1 className='hero__title'>
            Welcome to my <br></br> portfolio! <br></br> I'm{" "}
            <span className='hero__name'>Mehedi Ali</span>.
          </h1>
          <p className='hero__subheading'>Full stack Developer</p>
          <p className='hero__introduction'>
            Based in London, England, I'm a passionate and skilled Full stack
            Developer, bringing creativity and expertise to every project.
          </p>
        </div>
      </div>

      {/* <p className='hero__introduction'>
        Based in London, England, I'm a Full Stack Developer that loves turning
        UI/UX designs into fully functioning websites.{" "}
      </p> */}

      <a
        href='https://www.linkedin.com/in/mehedi-ali-profile/'
        target={"_blank"}
        className='hero__contact'
      >
        CONTACT ME
      </a>

      <img className='hero__shape' src={shape3} alt='' />
      <img className='hero__shape2' src={shape1} alt='' />

      <div className='hero__line'></div>
    </section>
  );
};

export default Hero;

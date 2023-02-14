import "./Projects.scss";
import project from "../../assets/images/project.png";

const Projects = () => {
  return (
    <section className='projects'>
      <h1 className='projects__heading'>Projects</h1>
      <div className='projects__project'>
        <img className='projects__img' src={project} alt='' />
        <div className='projects__details'>
          <h1 className='projects__title'>STREAMING WEBSITE</h1>
          <div className='projects__skills'>
            <p>HTML</p>
            <p>CSS</p>
            <p>JAVASCRIPT</p>
          </div>
          <div className='projects__links'>
            <a className='projects__link' href='#'>
              VIEW PROJECT
            </a>
            <a className='projects__link' href='#'>
              VIEW CODE
            </a>
          </div>
        </div>
      </div>
      <div className='projects__project'>
        <img className='projects__img' src={project} alt='' />
        <div className='projects__details'>
          <h1 className='projects__title'>ANIME DB WEBSITE</h1>
          <div className='projects__skills'>
            <p>HTML</p>
            <p>CSS</p>
            <p>JAVASCRIPT</p>
          </div>
          <div className='projects__links'>
            <a className='projects__link' href='#'>
              VIEW PROJECT
            </a>
            <a className='projects__link' href='#'>
              VIEW CODE
            </a>
          </div>
        </div>
      </div>
      <div className='projects__project'>
        <img className='projects__img' src={project} alt='' />
        <div className='projects__details'>
          <h1 className='projects__title'>REAL ESTATE WEBSITE</h1>
          <div className='projects__skills'>
            <p>HTML</p>
            <p>CSS</p>
            <p>JAVASCRIPT</p>
          </div>
          <div className='projects__links'>
            <a className='projects__link' href='#'>
              VIEW PROJECT
            </a>
            <a className='projects__link' href='#'>
              VIEW CODE
            </a>
          </div>
        </div>
      </div>
      <div className='projects__project'>
        <img className='projects__img' src={project} alt='' />
        <div className='projects__details'>
          <h1 className='projects__title'>QUIZ APP</h1>
          <div className='projects__skills'>
            <p>HTML</p>
            <p>CSS</p>
            <p>JAVASCRIPT</p>
          </div>
          <div className='projects__links'>
            <a className='projects__link' href='#'>
              VIEW PROJECT
            </a>
            <a className='projects__link' href='#'>
              VIEW CODE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

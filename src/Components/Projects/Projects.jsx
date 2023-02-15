import "./Projects.scss";
import project from "../../assets/images/project.png";
import hitMovies from "../../assets/images/hitmovies.jpg";
import fighting from "../../assets/images/fightinggame.jpg";
import drawing from "../../assets/images/drawingapp.jpg";
import gloveup from "../../assets/images/gloveup.jpg";
import imgslider from "../../assets/images/imgslider.jpg";
import ssneaker from "../../assets/images/ssneaker.jpg";

const Projects = () => {
  return (
    <section className='projects'>
      <h1 className='projects__heading'>Projects</h1>

      <div className='projects__container'>
        <div className='projects__project'>
          <img className='projects__img' src={gloveup} alt='' />
          <div className='projects__details'>
            <h1 className='projects__title'>GLOVEUP WEB APP</h1>
            <div className='projects__skills'>
              <p>REACT</p>
              <p>SASS</p>
              <p>EXPRESS.JS</p>
            </div>
            <div className='projects__links'>
              <a
                className='projects__link'
                href='https://gloveup.netlify.app/'
                target={"_blank"}
              >
                VIEW PROJECT
              </a>
              <a
                className='projects__link'
                href='https://github.com/mehediali12/glove-up-client'
                target={"_blank"}
              >
                VIEW CODE
              </a>
            </div>
          </div>
        </div>
        <div className='projects__project'>
          <img className='projects__img' src={ssneaker} alt='' />
          <div className='projects__details'>
            <h1 className='projects__title'>SSNEAKER</h1>
            <div className='projects__skills'>
              <p>REACT</p>
              <p>SASS</p>
              <p>EXPRESS.JS</p>
            </div>
            <div className='projects__links'>
              <a className='projects__link' href='#' target={"_blank"}>
                VIEW PROJECT
              </a>
              <a
                className='projects__link'
                href='https://github.com/lydiavernon/ssneaker-client'
                target={"_blank"}
              >
                VIEW CODE
              </a>
            </div>
          </div>
        </div>
        <div className='projects__project'>
          <img className='projects__img' src={fighting} alt='' />
          <div className='projects__details'>
            <h1 className='projects__title'>INTERACTIVE FIGHTING GAME</h1>
            <div className='projects__skills'>
              <p>HTML</p>
              <p>CSS</p>
              <p>JAVASCRIPT</p>
            </div>
            <div className='projects__links'>
              <a
                className='projects__link'
                href='https://mali-fighting-game.netlify.app/'
                target={"_blank"}
              >
                VIEW PROJECT
              </a>
              <a
                className='projects__link'
                href='https://github.com/mehediali12/fighting-game'
                target={"_blank"}
              >
                VIEW CODE
              </a>
            </div>
          </div>
        </div>
        <div className='projects__project'>
          <img className='projects__img' src={hitMovies} alt='' />
          <div className='projects__details'>
            <h1 className='projects__title'>MOVIE DATABASE WEBSITE</h1>
            <div className='projects__skills'>
              <p>HTML</p>
              <p>CSS</p>
              <p>JAVASCRIPT</p>
            </div>
            <div className='projects__links'>
              <a
                className='projects__link'
                href='https://mali-movie-db.netlify.app/'
                target={"_blank"}
              >
                VIEW PROJECT
              </a>
              <a
                className='projects__link'
                href='https://github.com/mehediali12/movie-database'
                target={"_blank"}
              >
                VIEW CODE
              </a>
            </div>
          </div>
        </div>

        <div className='projects__project'>
          <img className='projects__img' src={drawing} alt='' />
          <div className='projects__details'>
            <h1 className='projects__title'>DRAWING WEB APP</h1>
            <div className='projects__skills'>
              <p>HTML</p>
              <p>CSS</p>
              <p>JAVASCRIPT</p>
            </div>
            <div className='projects__links'>
              <a
                className='projects__link'
                href='https://mali-draw-app.netlify.app/'
                target={"_blank"}
              >
                VIEW PROJECT
              </a>
              <a
                className='projects__link'
                href='https://github.com/mehediali12/drawing-app'
                target={"_blank"}
              >
                VIEW CODE
              </a>
            </div>
          </div>
        </div>
        <div className='projects__project'>
          <img className='projects__img' src={imgslider} alt='' />
          <div className='projects__details'>
            <h1 className='projects__title'>IMAGE SLIDER</h1>
            <div className='projects__skills'>
              <p>HTML</p>
              <p>CSS</p>
              <p>JAVASCRIPT</p>
            </div>
            <div className='projects__links'>
              <a
                className='projects__link'
                href='https://mali-image-slides.netlify.app/'
                target={"_blank"}
              >
                VIEW PROJECT
              </a>
              <a
                className='projects__link'
                href='https://github.com/mehediali12/image-slider'
                target={"_blank"}
              >
                VIEW CODE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

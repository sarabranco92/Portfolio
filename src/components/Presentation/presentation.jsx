
import 'aos/dist/aos.css'; 
import './_presentation.scss';
import myImage from '../../../public/assets/photo.webp';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Presentation() {

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
      offset: 300,
    });
  }, []);



  return (
    <section id="presentation" className="presentation">
      <div className="presentation__header" data-aos="fade-up" data-aos-delay="500">
        <h2 className="presentation__title">About Me</h2>
        <div className="presentation__underline"></div>
      </div>
      <div className="presentation__body" data-aos="fade-up" data-aos-delay="100">
        <div className="presentation__image" data-aos="fade-right" data-aos-delay="200">
          <img src={myImage} loading="lazy" alt="Sara" />
        </div>
        <div className="presentation__content" data-aos="fade-left" data-aos-delay="300">
          <p>I am a passionate web developer with a particular affinity for Frontend development. My journey in the tech world started recently, and every project is a new adventure for me.</p>
          <p>When my fascination for programming began, I quickly realized that coding was not just a skill but an art that allows transforming abstract ideas into tangible realities.</p>
          <p>I am always looking for new challenges and growth opportunities. If you have an exciting project in mind, do not hesitate to contact me. Together, let's transform your vision into an elegant and efficient digital solution.</p>
        </div>
      </div>
    </section>
  );
}

export default Presentation;

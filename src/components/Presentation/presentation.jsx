
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
      mirror: true,
      offset: 300,
    });
  }, []);



  return (
    <section id="presentation" className="presentation">
      <div className="presentation__header" data-aos="fade-up" data-aos-delay="500">
        <h2 className="presentation__title">À propos de moi</h2>
        <div className="presentation__underline"></div>
      </div>
      <div className="presentation__body" data-aos="fade-up" data-aos-delay="100">
        <div className="presentation__image" data-aos="fade-right" data-aos-delay="200">
          <img src={myImage} loading="lazy" alt="Sara" />
        </div>
        <div className="presentation__content" data-aos="fade-left" data-aos-delay="300">
          <p>Je suis une développeuse web passionnée avec une affinité particulière pour le Frontend. Mon parcours dans l&apos;univers de la technologie a commencé récemment, et chaque projet est pour moi une nouvelle aventure.</p>
          <p>Quand ma fascination pour la programmation a débuté, j&apos;ai rapidement découvert que coder n&apos;était pas seulement une compétence, mais un art qui permet de transformer des idées abstraites en réalités tangibles.</p>
          <p>Je suis toujours à la recherche de nouveaux défis et de possibilités de croissance. Si vous avez un projet passionnant en tête, <span>n&apos;hésitez pas à me contacter</span>. Ensemble, transformons votre vision en une solution digitale élégante et performante.</p>
        </div>
      </div>
    </section>
  );
}

export default Presentation;

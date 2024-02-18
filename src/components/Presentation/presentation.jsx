
import React from 'react';
import './_presentation.scss';
import myImage from '../../../public/assets/photo.webp';

function Presentation() {
  return (
<section id="presentation" className="presentation">
      <div className="presentation__header">
        <h2 className="presentation__title">À propos de moi</h2>
        <div className="presentation__underline text-animate"></div>
      </div>
      <div className="presentation__body">
      <div className="presentation__image">
          <img src={myImage} loading="lazy" alt="Sara" />
        </div>
      <div className="presentation__content">
     
  <p>Je suis une développeuse web passionnée avec une affinité particulière pour le Frontend. Mon parcours dans l'univers de la technologie a commencé récemment, et chaque projet est pour moi une nouvelle aventure.</p>
  
  <p>Quand ma fascination pour la programmation a débuté, j'ai rapidement découvert que coder n'était pas seulement une compétence, mais un art qui permet de transformer des idées abstraites en réalités tangibles.</p>


  <p>Je suis toujours à la recherche de nouveaux défis et de possibilités de croissance. Si vous avez un projet passionnant en tête, <span>n'hésitez pas à me contacter</span>. Ensemble, transformons votre vision en une solution digitale élégante et performante.</p>
      </div>
      </div>
    </section>
  );
}

export default Presentation;

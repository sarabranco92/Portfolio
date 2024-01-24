
import StarActive from '../../assets/star-active.png';
import StarInactive from '../../assets/star-inactive.png';
import '../rating/_rating.scss';


function Rating({ rating }) { 
   // Création d'un tableau vide pour stocker les éléments d'étoiles
   const stars = []; 
 
   // Boucle pour générer les étoiles en fonction de la note 'rating'
   for (let i = 1; i <= 5; i++) { 
      if (i <= rating) {
         // Si l'indice de l'étoile est inférieur ou égal à la note, on ajoute une étoile active
         stars.push(<img className='Stars' key={i} src={StarActive} alt="star-filled" />);
      } else { 
         // Sinon, on ajoute une étoile inactive
         stars.push(<img className='Stars' key={i} src={StarInactive} alt="star-empty" />);
      }
   }

   // Rendu des étoiles dans un conteneur div
   return <div>{stars}</div>; 
}

export default Rating;

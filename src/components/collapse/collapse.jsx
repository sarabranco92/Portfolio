
import React, { useState } from 'react';
import '../collapse/_collapse.scss';
import arrow from '../../assets/arrow-up.png';

// Composant fonctionnel Collapse, prend 'title' (titre) et 'content' (contenu) comme props
function Collapse({ title, content }) {
   
    const [toggle, setToggle] = useState(false); // État 'toggle' pour suivre la visibilité du contenu, initialisé à false (caché)

   
    const handleToggle = () => { // Fonction handleToggle pour basculer l'état de visibilité du contenu
        setToggle(!toggle); // Inverse l'état actuel de 'toggle'
    };

    // Le JSX pour le composant Collapse
    return (
        <div className="collapse">
            {/* Section du titre avec un gestionnaire de clic pour basculer la visibilité du contenu */}
            <h3 className='collapse_title' onClick={handleToggle}>
                {title} 
                {/* Image de la flèche avec une classe conditionnelle pour l'effet de rotation */}
                <img 
                    className={`arrow ${toggle ? 'rotated' : ''}`} 
                    src={arrow}
                    alt="Basculer la visibilité du contenu" 
                />
            </h3>
            {/* Section du contenu avec une classe conditionnelle pour contrôler la visibilité */}
            <div className={`collapse_content ${toggle ? 'collapse_content_visible' : 'collapse_content_hidden'}`}>
                {/* Rendu conditionnel : si le contenu est un tableau, le parcourir, sinon afficher le contenu directement */}
                {Array.isArray(content) ? content.map((item, index) => (
                    <div key={index}>{item}</div> // Rendu de chaque élément du contenu tableau
                )) : <div>{content}</div> /* Rendu du contenu simple */}
            </div>
        </div>
    );
}

export default Collapse;

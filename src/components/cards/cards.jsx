// Importation de React et du composant Link de react-router-dom
import React from 'react';
import { Link } from 'react-router-dom';

// Importation des données depuis un fichier JSON local
import records from "../../data/projects.json";

// Importation des styles spécifiques pour les cartes
import "../cards/_cards.scss"; 

// Déclaration du composant fonctionnel Cards
const Cards = () => {
    return (
        // Création d'un conteneur pour toutes les cartes de logement
        <div className="projects">
            {/* Utilisation de la méthode map pour itérer sur chaque enregistrement dans les données JSON */}
            {records.map((record) => {
                // Destructuration de l'objet record pour extraire les propriétés nécessaires
                const { id, cover, title } = record;

                // Rendu de chaque carte de logement
                return (
                    // Chaque carte de logement est un élément div avec une clé unique
                    <div className="descriptionProject" key={id}>
                        {/* Utilisation de Link pour créer une navigation vers une page de détail */}
                        <Link to={`/profileSection/${id}`}>
                            {/* Affichage de l'image de couverture et du titre du logement */}
                            <img src={cover} alt={title} />
                            <h3>{title}</h3>
                        </Link>
                    </div>
                )
            })}
        </div>
    );
};

// Exportation du composant Cards pour une utilisation dans d'autres parties de l'application
export default Cards;


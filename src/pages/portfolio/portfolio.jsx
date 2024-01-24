// Importation des hooks et outils nécessaires de React et react-router-dom
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'; 

// Importation des données des logements depuis un fichier JSON local
import records from "../../data/projects.json";

// Importation des composants pour l'interface utilisateur
import Carousel from '../../components/carousel/carousel';
import Collapse from '../../components/collapse/collapse';
import Rating from '../../components/rating/rating';
import Footer from '../../components/footer/footer';
import Navbar from '../../components/navbar/navbar';
import Spinner from '../../components/loader/loader';

// Importation des styles spécifiques pour la page du logement
import './_portfolio.scss';

// Déclaration du composant fonctionnel FicheLogement
function Portfolio() {
  // Extraction de l'ID du logement depuis l'URL
  const { id } = useParams();
  // Déclaration des états pour le logement et la gestion des erreurs
  const [logement, setLogement] = useState(null);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  // Effet pour charger les données du logement dès le montage du composant
  useEffect(() => {
    const record = records.find(r => r.id === id);
    if (!record) {
      // En cas d'absence du logement, on déclenche une erreur
      setIsError(true);
    } else {
      
     // setTimeout(() => {
        setLogement(record);
    //  }, 1000);
    }
  }, [id, navigate]);

  // Redirection en cas d'erreur
  if (isError) {
    navigate('/otherpages', { replace: true });
    return null; // Ceci est optionnel car navigate redirige la page
  }

  // Affichage d'un loader pendant le chargement des données
  if (!logement) {
    return <Spinner />; // Utiliser le composant Spinner pendant le chargement
  }

  // Rendu de la page de détails du logement
  return (
    <div className="AccommodationDetails">
     
        <Navbar />
        {/* Carousel pour afficher les images du logement */}
        {logement.pictures && <Carousel images={logement.pictures} />}
        <section className='InformationSection'>
          {/* Informations principales du logement */}
          <div className='AccommodationInfo'>
            <h1 className='Title'>{logement.title}</h1>
            <p className='Location'>{logement.location}</p>
            <ul className='TagsList'>
              {logement.tags.map(tag => (    //Pour chaque tag dans le tableau logement.tags, la méthode .map() crée un élément de liste <li>.
                <li className='TagItem' key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
          <div className='OwnerInfo'>
            {/* Informations sur le propriétaire et la note du logement */}
            <div className='Owner'>
              <p className='OwnerName'>{logement.host?.name}</p>
              <img className='OwnerImage' src={logement.host?.picture} alt={logement.host?.name} />
            </div>
            <Rating rating={logement.rating} />
          </div>
        </section>
        <div className="description-content">
          {/* Composants Collapse pour la description et les équipements */}
          <div className="description-content__description">
            <Collapse title="Description" content={logement.description} />
          </div>
          <div className="description-content__equipement">
            {logement.equipments && (
              <Collapse
                title="Équipements"
                content={logement.equipments.map((item, index) => (
                  <div key={index}>{item}</div>
                ))}
              />
            )}
          </div>
        </div>
      <Footer />
    </div>
  );
}

// Exportation du composant FicheLogement pour son utilisation dans l'application
export default Portfolio;

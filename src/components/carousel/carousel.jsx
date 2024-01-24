
import React, { useState, useEffect } from 'react';
import ArrowLeft from '../../assets/arrow-left.png';
import ArrowRight from '../../assets/arrow-right.png';


import '../carousel/_carousel.scss';


function Carousel({ images }) {
    // Utilisation du hook useState pour suivre l'indice de l'image actuelle
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalTime = 3000; // Durée de 3000 ms (3 secondes) par image

    // Fonction pour passer à l'image suivante
    const nextImage = () => {
        // Mise à jour de l'indice pour afficher l'image suivante, ou revenir au début si on est à la fin
        setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    };

    useEffect(() => {
        const slideInterval = setInterval(() => {
            nextImage(); // Change l'image à chaque intervalle
        }, intervalTime);

        return () => clearInterval(slideInterval); // Nettoyage de l'intervalle
    }, [currentIndex, images.length]);


    // Fonction pour revenir à l'image précédente
    const prevImage = () => {
        // Mise à jour de l'indice pour afficher l'image précédente, ou aller à la dernière image si on est au début
        setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    };

    // Rendu du composant Carousel
    return (
        // Section englobante pour le carrousel
        <section className='ContSlider'>
            {/* Affichage des flèches et du compteur seulement si il y a plus d'une image */}
            {images.length > 1 && (
                <>

                    <img className='ArrowSliderLeft' src={ArrowLeft} alt="Previous" onClick={prevImage} />


                    <img className='ArrowSliderRight' src={ArrowRight} alt="Next" onClick={nextImage} />

                    {/* Affichage de l'indice de l'image actuelle et du nombre total d'images */}
                    <p className='CountSlider'>{currentIndex + 1} / {images.length}</p>
                </>
            )}
            {/* Affichage de l'image actuelle */}
            <img className='ImgSlider' src={images[currentIndex]} alt="Current view" />
        </section>
    );
}


export default Carousel;

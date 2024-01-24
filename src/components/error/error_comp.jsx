import React from "react";
import { Link } from 'react-router-dom';
import "../error/_error_comp.scss"


function Error() {
    return (
        <div className="page-error">
        <h1 className="titre-error">404</h1>
        <span className="description-error">Oups! La page que vous demandez n'existe pas.</span>
        <Link to="/" className="lien-home">Retourner sur la page d’accueil</Link>
    </div>
    );
  }

  export default Error;
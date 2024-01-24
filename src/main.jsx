import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Création de la racine de l'application React
const root = ReactDOM.createRoot(document.getElementById('root'));
// Rendu de l'application dans le DOM
root.render(
  // Utilisation de React.StrictMode pour une vérification supplémentaire et des avertissements utiles en mode développement
  <React.StrictMode>
    <App />
  </React.StrictMode>
)


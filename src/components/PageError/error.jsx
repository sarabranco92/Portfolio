import React from 'react';
import './_error.scss'; // Certifique-se de que o caminho está correto

function PageError() {
  return (
    <div className="error-page">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for doesn't exist or another error occurred.</p>
      <p>
        <a href="/">Go back to homepage</a>
      </p>
    </div>
  );
}

export default PageError;

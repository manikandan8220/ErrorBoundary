import React from 'react';

const ErrorFallback = ({ error, resetErrorBoundary }) => (

  <div>
    <h3>Submission Error:</h3>
    <p>{error.message}</p>
    <button onClick={resetErrorBoundary}>Retry</button>
  </div>

);

export default ErrorFallback;
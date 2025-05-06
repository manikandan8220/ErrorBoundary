import React from 'react';

const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <div>
    <h3> An error occurred:</h3>
    <pre>{error.message}</pre>
    <button onClick={resetErrorBoundary}> Retry</button>
  </div>
);

export default ErrorFallback;
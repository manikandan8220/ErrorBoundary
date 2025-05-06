import React from 'react';

const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <div>
    <h4>Something went wrong:</h4>
    <pre>{error.message}</pre>
    <button onClick={resetErrorBoundary}>Retry</button>
  </div>
);

export default ErrorFallback;
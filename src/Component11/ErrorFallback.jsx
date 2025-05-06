import React from 'react';

const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <div >
    <strong>Error:</strong> {error.message}
    <br />
    <button onClick={resetErrorBoundary}>Retry</button>
  </div>
);

export default ErrorFallback;
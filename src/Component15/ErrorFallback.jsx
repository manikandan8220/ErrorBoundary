import React from 'react';

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div >
      <h2>Error Occurred</h2>
      <p>{error.message}</p>
      <button onClick={resetErrorBoundary}> Again</button>
    </div>
  );
};

export default ErrorFallback;
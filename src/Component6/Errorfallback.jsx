import React from 'react'

const ErrorFallback = ({ error, resetErrorBoundary }) => (

    <div>

      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
    
  );

export default ErrorFallback;
import React, { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '../Component9/ErrorFallback';

const ErrorBoundaryWrapper = ({ children }) => {
  const [resetKey, setResetKey] = useState(0);

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error) => console.error('Async Error Caught:', error)}
      resetKeys={[resetKey]}
      onReset={() => setResetKey((prev) => prev + 1)}
    >
      {children}
    </ErrorBoundary>
  );
};

export default ErrorBoundaryWrapper;
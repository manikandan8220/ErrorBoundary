import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '../Component10/ErrorFallback';

const ReusableErrorBoundary = ({ children }) => {
  const handleError = (error, info) => {
    console.error('Logged Error:', error);
    console.error('Error info:', info?.componentStack);
  };

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={handleError}
    >
      {children}
    </ErrorBoundary>
  );
};

export default ReusableErrorBoundary;
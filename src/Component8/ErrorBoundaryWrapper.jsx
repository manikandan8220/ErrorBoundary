import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '../Component8/ErrorFallback';

const ErrorBoundaryWrapper = ({ children }) => {
  const logError = (error) => {
    console.error('Caught error:', error);
  };

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={logError}>
      {children}
    </ErrorBoundary>
  );
};

export default ErrorBoundaryWrapper;
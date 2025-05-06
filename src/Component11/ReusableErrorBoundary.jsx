import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '../Component11/ErrorFallback';

const ReusableErrorBoundary = ({ children }) => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error) => console.error('Caught by boundary:', error)}
    >
      {children}
    </ErrorBoundary>
  );
};

export default ReusableErrorBoundary;
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '../Component15/ErrorFallback';

const ReusableErrorBoundary = ({ children }) => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error, info) => console.error("Caught by ErrorBoundary:", error)}
    >
      {children}
    </ErrorBoundary>
  );
};

export default ReusableErrorBoundary;
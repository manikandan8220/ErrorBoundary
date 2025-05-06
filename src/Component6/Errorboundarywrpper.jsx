import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '../Component6/Errorfallback';

const ErrorBoundaryWrapper = ({ children }) => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
     }}>
        
      {children}
    </ErrorBoundary>
  );
};

export default ErrorBoundaryWrapper;
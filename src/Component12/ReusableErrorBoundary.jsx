import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '../Component12/ErrorFallback';

const ReusableErrorBoundary = ({ children }) => (
  <ErrorBoundary
    FallbackComponent={ErrorFallback}
    onError={(error) => console.error('Error caught:', error)}
  >
    {children}
  </ErrorBoundary>
);

export default ReusableErrorBoundary;
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '../Component14/ErrorFallback';

const ReusableErrorBoundary = ({ children }) => (
  <ErrorBoundary
    FallbackComponent={ErrorFallback}
    onError={(error) => console.error('Form Error:', error)}
  >
    {children}
  </ErrorBoundary>
);

export default ReusableErrorBoundary;
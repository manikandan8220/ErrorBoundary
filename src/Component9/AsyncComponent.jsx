import React, { useEffect } from 'react';
import { useErrorHandler } from 'react-error-boundary';

const AsyncComponent = () => {
  const handleError = useErrorHandler();

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        await new Promise((_, reject) =>
          setTimeout(() => reject(new Error('Failed to fetch data!')), 1000)
        );
      } catch (err) {
        handleError(err); 
      }
    };

    fetchData();
  }, [handleError]);

  return <div> Loading data...</div>;
};

export default AsyncComponent;
import React, { useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from '../Component7/ErrorFallback'

function ErrorBoundaryWrapper({children}) {

    const [resetKey ,setResetKey] =useState(0);
  return (
    <>
     <h1>ErrorBoundary Wrapper</h1>
       <ErrorBoundary>
          Fallbackcomponent ={ErrorFallback}
           resetKeys={[resetKey]}
           onReset ={() =>{
           setResetKey((prev) => prev + 1);
           }}
           {children}
       </ErrorBoundary>
    </>
  )
}

export default ErrorBoundaryWrapper
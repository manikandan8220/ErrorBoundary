import React from 'react'

function ErrorFallback({error ,resetErrorBoundary}) {
  return (
    <>
     <div>
        <h1> Error Fallback</h1>
        <p>{error.message}</p>
        <button onClick={resetErrorBoundary}>try again</button>
     </div>
    </>
  )
}

export default ErrorFallback;
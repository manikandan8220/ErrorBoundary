import React, { useState } from 'react'

function Functionerror() {
    const [error ,setError] =useState (null);

    const handleClick = () => {
        try{
            throw new error ('Hii the error component');
        }catch(err){
            console.log(err);
            setError(err.message);  
        };
    };
 

  return (
    <div>
    <h1>Functionerror</h1>
    <button onClick={handleClick}>click me</button>
    
    {error && (
        <div>
          <strong>Error:</strong> {error}
        </div>
    )}
    </div>
)
}

export default Functionerror
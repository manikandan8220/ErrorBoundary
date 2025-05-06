import React, { useState } from 'react'

function Globalerror() { 
    const[error ,setError] =useState(null);

    const causeerror = () =>{
        try{
            throw new error ('For the error Component!!')
        }catch(err){
            console.log('err');
            setError(err.message); 
        };
    };
  const reseterror =() =>{
    setError (null);
  };


  return (
    <div>
        <h1>Global error</h1>
        <button onClick={causeerror}>Error</button>
        {error && (
            <div>
                <p> Error :{error}</p>
                <button onClick={reseterror}>Reset</button>
            </div>
        )}
    </div>
  )
}

export default Globalerror;
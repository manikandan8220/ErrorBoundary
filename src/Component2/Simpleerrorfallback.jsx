import React, { useState } from 'react'

function Simpleerrorfallback() {
    const [haserror ,setHasError] =useState(false);

    const handleClick = () =>{
        try{
            throw new error ("for the error");
        } catch (error){
            console.log(error);
            setHasError(true);  
        }
    };
  if(haserror){
       return   <h2>For the error Component!!</h2>
  }
  return (
    <>
    <div>
        <h1>simple error fallback</h1>
        <button onClick={handleClick}>click me</button>
    </div>
    </>
  )
}

export default Simpleerrorfallback
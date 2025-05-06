import React, { useState } from 'react'

function Errorsimulator() {

    const [throwerror,setThrowError] =useState(false);

    if(throwerror){
        throw new error('For the throw error');
    }
  return (
      <>
       <div>
        <h1>Error simulators</h1>
        <button onClick={()=>setThrowError(true)}>click me</button>
       </div>
      </>
  )
}

export default Errorsimulator
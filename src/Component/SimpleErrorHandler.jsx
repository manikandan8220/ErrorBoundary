import React, { useState } from 'react'

function SimpleErrorHandler() {
    const [haserror ,setHasError] = useState(false);

     const handleClick = () =>{
        try{
            throw new error ("went the wrong")
        }catch(error) {
             console.log(error);
             setHasError(true);
             
        }
     };
     if(haserror){
       return <h1>Oops An Occurs...!!</h1>
     }
  return (
     <>
      <div>
        <button onClick={handleClick}> click to the error</button>
      </div>
     </>
  )
}

export default SimpleErrorHandler
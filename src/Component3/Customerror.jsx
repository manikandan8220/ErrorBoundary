import React, { useState } from 'react'

function Customerror() {
    const [error , setError] =useState(null);

    const handleClick = () =>{
        try{
            throw new error ('hii custom error!!')
        }catch(err){
            console.log('err');
            setError(err.message);
        };
    }; 

    if(error) {
        
        return(
        <p>{error}</p>

        )
    };
    
  return  <button onClick={handleClick}>Click me</button>
    
}
  

export default Customerror
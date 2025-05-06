import React, { useState } from 'react'

function Counter() {
    const [count ,setCount] =useState(0)

    if(count === 5){
        throw new error ("Welcome tho the component!")
    }
  return (
    <div>
        <h1>For the Count</h1>
        <p>Count:{count}</p>
        <button onClick={()=>setCount(count+1)}> increment</button>
    </div>
  )
}

export default Counter;
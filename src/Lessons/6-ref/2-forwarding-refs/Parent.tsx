import React, { useEffect } from 'react'
import { useRef } from 'react';

import Child from './Child';

const Parent = () => {
  
  const inputRef = useRef({} as HTMLInputElement);

  return (
    <div className='component'>
      <p>Parent</p>
      <button onClick={() => {inputRef.current.focus()}}>Focus</button>
      <Child ref={inputRef}/>
    </div>
  )
};

export default Parent;
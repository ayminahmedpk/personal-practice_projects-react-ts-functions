import React, { useEffect } from 'react'
import { useRef } from 'react';

import Child from './Child';

const Parent = () => {
  
  // const inputRef = useRef(null);

  // didn't work
  // const inputRef = useRef({} as React.RefObject<HTMLInputElement>);
  
  // inferred type of prop
  // const inputRef = useRef({} as const inputRef: React.MutableRefObject<HTMLInputElement>); // didn't work

  const inputRef = useRef({} as HTMLInputElement);

  useEffect(() => {inputRef.current.focus();}, []);

  return (
    <div className='component'>
      <p>Parent</p>
      <input ref={inputRef} type="text" />
      <Child inputRef={inputRef}/>
    </div>
  )
};

export default Parent;
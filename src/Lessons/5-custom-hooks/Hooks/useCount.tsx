// Two solutions - one is to have a tupe type to explicitly tell TS what the
// exported item (which will be array, not tuple) will hold. The other is to
// just add the 'as const' keywords at the end.

// The first solution is better in terms of documentation and clarity, which is
// one of the core reasons of using TS. So we'll stick with that where practial.

import { useState } from "react";


// const useCount = () => {
const useCount: () => [number, () => void, () => void, () => void] = () => {

  let [count, setCount] = useState(0);
  
  const decrement = () => { setCount(prevCount => prevCount - 1) } ;
  const increment = () => { setCount(prevCount => prevCount + 1) } ;
  const reset     = () => { setCount(0)                          } ;
  
  return [count, increment, decrement, reset];
  // return [count, increment, decrement, reset] as const;

}


export default useCount;
import React from 'react'



// original
// const Child = React.forwardRef((props, parentRef: React.MutableRefObject<HTMLInputElement>) => (

// didn't work
// const Child = React.forwardRef<React.MutableRefObject<HTMLInputElement>>((props, parentRef) => (

// If we were also receiving other props besides ref
// const Child = React.forwardRef<HTMLInputElement>((props, parentRef) => (
const Child = React.forwardRef<HTMLInputElement>(({}, parentRef) => (
  <div className='component'>
    <p>Child</p>
    <input ref={parentRef} type="text" />
  </div>
));

export default Child;
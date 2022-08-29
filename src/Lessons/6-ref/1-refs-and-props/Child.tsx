import React from 'react'

type ChildProps = {
  inputRef: React.MutableRefObject<HTMLInputElement>;
}

const Child:React.FC<ChildProps> = (props) => {

  return (
    <div className='component'>
      <p>Child</p>
      <button onClick={() => {props.inputRef.current.focus()}}>Focus</button>
    </div>
  )
};

export default Child;
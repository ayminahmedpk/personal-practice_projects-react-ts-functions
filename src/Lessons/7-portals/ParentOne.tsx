import React, { useEffect } from 'react'

type ParentOneProps = {
  renderedHandler: () => void;
}

const ParentOne: React.FC<ParentOneProps> = (props) => {

  useEffect(() => {props.renderedHandler();}, [])

  return (
    <div className='component'>
      <p>ParentOne</p>
      <div className='portal'></div>
    </div>
  )
};

export default ParentOne;
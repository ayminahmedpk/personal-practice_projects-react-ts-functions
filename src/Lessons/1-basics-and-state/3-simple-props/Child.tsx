import React from 'react'

type ChildProps = {
  incrementHandler: () => void;
  decrementHandler: () => void;
  count: number;
}

const Child = (props: ChildProps) => {
  return (
    <div className="component">
      <p>Child</p>
      <button onClick={props.decrementHandler}>{'<'}</button>
      <button onClick={props.incrementHandler}>{'>'}</button>
      <p>Count: {props.count}</p>
    </div>
  )
}

export default Child
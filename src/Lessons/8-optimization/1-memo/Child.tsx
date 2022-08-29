import React from 'react'

type ChildProps = {
  text: string;
}

const Child: React.FC<ChildProps> = (props) => {
  return (
    <div className='component'>
        <p>Child</p>
        <p>Parent text: {props.text}</p>
      </div>
  )
}

// export default Child;
export default React.memo(Child);

// Will update on text change (prop changed) but not on count change (props
// unchanged).
import React from 'react'

type ChildProps = {
  texts: {textOne:string; textTwo:string;};
}

const Child: React.FC<ChildProps> = (props) => {
  return (
    <div className='component'>
        <p>Child</p>
        <p>Parent text one: {props.texts.textOne}</p>
        <p>Parent text two: {props.texts.textTwo}</p>
      </div>
  )
}

// export default Child;
export default React.memo(Child);

// Will update on text change (prop changed) but not on count change (props
// unchanged).
import React from 'react'

// type ParentProps = {
//   children: JSX.Element;
// }

// const Parent = (props: ParentProps) => {
// const Parent: React.FC<ParentProps> = (props) => {
// const Parent: React.FC<React.PropsWithChildren<T>> = (props) => {
// Where T should be the type of props for this component, besides children
const Parent: React.FC<React.PropsWithChildren> = (props) => {

  return (
    <div className="component">
      <p>Parent</p>
      {props.children}
    </div>
  )
}

export default Parent;
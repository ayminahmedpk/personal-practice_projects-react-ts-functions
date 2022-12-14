import React from 'react'
import PropTypes from 'prop-types';

type ChildProps = {
  overridden: string;
  numberProp: number;
  notProvided?: string;
  stringProp?: string;
}

const Child = (props: ChildProps) => {
  return (
    <div className="component">
      <p>Default prop    : {props.notProvided}</p>
      <p>Overridden prop : {props.overridden}</p>
      <p>Number prop     : {props.numberProp}</p>
      <p>String prop     : {props.stringProp}</p>
    </div>
  )
}

Child.defaultProps = {
  notProvided : 'default value',
  overridden  : 'default value',
}

Child.propTypes = {
  overridden: PropTypes.string,
  numberProp: PropTypes.number,
  stringProp: PropTypes.string
}

export default Child;
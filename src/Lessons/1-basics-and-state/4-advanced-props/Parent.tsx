import React from 'react'

import Child from './Child';

const Parent = () => {

  return (
    <div className="component">
      <p>Parent</p>
      <Child
        // Name has to be same
        // overriddenProp = 'overridden value'
        overridden = 'overridden value'
        numberProp     = {7}
        // Can't put num in string prop in TS, rightfully so
        // stringProp     = {5}
      />
    </div>
  )
}

export default Parent;
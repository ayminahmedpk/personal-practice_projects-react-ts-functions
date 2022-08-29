import React from 'react'
import { createPortal } from 'react-dom';

import Child from './Child';

type ParentTwoProps = {
  shouldRenderChild: boolean;
}

const ParentTwo: React.FC<ParentTwoProps> = (props) => {

  return (
    <div className='component'>
      <p>ParentTwo</p>
      {
        props.shouldRenderChild ?
        createPortal(<Child/>, document.querySelector('.portal')!) :       
        ''
      }
    </div>
  )
};

export default ParentTwo;

{
  // createPortal(<Child/>, document.querySelector('.portal')) :
  // not acceptable to TS because querySelector could return null
  // used '!' to tell TS it will never return null
}
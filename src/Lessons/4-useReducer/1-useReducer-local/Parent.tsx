import React, { useReducer } from 'react'

// Will need to import reducer and initial state to initialize local store
import { MyReducer, initialState } from './Reducer/MyReducer'

// Will need to import relevant action creators if we are to dispatch actions
// from this component
import {
  write     ,
  increment ,
  decrement ,
  reset     ,
} from './Reducer/ActionCreators'

const Parent = () => {

  const [state, dispatch] = useReducer(MyReducer, initialState);
  // Inferred types:
  // const state: MyReducerState
  // const dispatch: React.Dispatch<MyReducerActions>

  return (
    <div className="component">
      <p>Parent</p>
      <p>Count: {state.count}</p>
      <p>Text Value: {state.textValue}</p>
      <div>
        <button onClick={() => {dispatch(decrement())}}>{'<'}</button>
        <button onClick={() => {dispatch(increment())}}>{'>'}</button>
      </div>
      <input
        type="text"
        value={state.textValue}
        onChange={(event) => {dispatch(write(event))}}
      />
      <div>
        <button onClick={() => {dispatch(reset())}}>Reset</button>
      </div>
    </div>
  );

};

export default Parent
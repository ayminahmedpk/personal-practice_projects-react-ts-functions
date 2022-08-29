import { Reducer } from "react";

import { MyReducerActions } from "./MyActionTypes";

type MyReducerState = {
  textValue : string;
  count     : number;
}


export const initialState: MyReducerState = {
  textValue: '[default]',
  count: 0,
}

export const MyReducer:Reducer<MyReducerState, MyReducerActions> = (state, action) => {
  switch(action.type) {
    
    case 'WRITE':
      return {
        ...state,
        textValue: action.payload,
      }

    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      }

    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      }

    case 'RESET':
      return {
        textValue: '[reset]',
        count: 100,
      }
    
    default:
      throw new Error();

  }
};
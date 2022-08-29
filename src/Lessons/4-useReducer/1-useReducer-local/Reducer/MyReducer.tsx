// In TS, we don't need a separate file to define action types as constants.
// We simply use TS for type checking to make sure we aren't inputting an
// invalid action type. See ActionTypes.tsx to see how we implement that.

// Since TS type checks the 'type' string's value, it knows whether that type
// of action will have a payload or not - so we don't need typeguards in the
// reducer.

// Hence the reducer is much cleaner.

import { Reducer } from 'react';
import {MyReducerActions} from './ActionTypes';

type MyReducerState = {
  textValue: string;
  count: number;
}

export const initialState = {
  textValue: '[default]',
  count: 0,
}

export const MyReducer: Reducer<MyReducerState, MyReducerActions> = (state, action) => {
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
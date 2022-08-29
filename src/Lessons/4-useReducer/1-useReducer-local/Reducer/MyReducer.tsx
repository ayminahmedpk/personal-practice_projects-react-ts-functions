
import { Reducer } from 'react';

import { MyReducerActions } from './MyActionCreators';

import {
  WRITE,
  INCREMENT,
  DECREMENT,
  RESET
} from './MyActionTypes';

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
    
    case WRITE:
      if('payload' in action) {
        return {
          ...state,
          textValue: action.payload,
        }
      }
      else {return state};

    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      }

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      }

    case RESET:
      return {
        textValue: '[reset]',
        count: 100,
      }
    
    default:
      throw new Error();

  }
};
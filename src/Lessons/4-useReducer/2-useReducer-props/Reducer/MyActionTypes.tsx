

export const WRITE     = 'WRITE'     ;
export const INCREMENT = 'INCREMENT' ;
export const DECREMENT = 'DECREMENT' ;
export const RESET     = 'RESET'     ;

export type SimpleAction = {type: 'INCREMENT' | 'DECREMENT' | 'RESET'}

export type WriteAction = {
  type    : 'WRITE';
  payload : string;
}

export type MyReducerActions = SimpleAction | WriteAction;
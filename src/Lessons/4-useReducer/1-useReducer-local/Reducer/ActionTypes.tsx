
export type SimpleAction = {
  type:   'INCREMENT'
        | 'DECREMENT'
        | 'RESET'
  ;
}

export type WriteAction  = {
  type: 'WRITE',
  payload: string;
}

export type MyReducerActions = SimpleAction | WriteAction;
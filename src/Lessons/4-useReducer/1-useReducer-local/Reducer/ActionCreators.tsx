
// Since we explicitly define the return types for the action creator functions,
// the returning object's string is checked and TS won't accept a non=predefined
// value - hence avoiding typos.


import { SimpleAction, WriteAction } from "./ActionTypes";

export const increment : () => SimpleAction = () => ({type: 'INCREMENT'});
export const decrement : () => SimpleAction = () => ({type: 'DECREMENT'});
export const reset     : () => SimpleAction = () => ({type: 'RESET'    });

export const write: (event: React.ChangeEvent<HTMLInputElement> ) => WriteAction = (event) => ({
  type    : 'WRITE'            ,
  payload : event.target.value ,
});
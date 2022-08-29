import React from "react";
import {
  WRITE     ,
  INCREMENT ,
  DECREMENT ,
  RESET     ,
} from "./MyActionTypes"

export const write = (event: React.ChangeEvent<HTMLInputElement>) => ({
  type    : WRITE              ,
  payload : event.target.value ,
});

export const increment = () => ({type: 'INCREMENT'});
export const decrement = () => ({type: 'DECREMENT'});
export const reset     = () => ({type: 'RESET'    });

type SimpleAction = { type: string; }
type WriteAction  = {
  type    : string;
  payload : string;
}

export type MyReducerActions = SimpleAction | WriteAction;

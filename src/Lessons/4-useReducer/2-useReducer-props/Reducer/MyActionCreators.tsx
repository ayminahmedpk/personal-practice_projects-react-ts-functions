
import { SimpleAction } from "./MyActionTypes";
import { WriteAction }  from "./MyActionTypes";

export const increment: () => SimpleAction = () => ({type: 'INCREMENT'});
export const decrement: () => SimpleAction = () => ({type: 'DECREMENT'});
export const reset    : () => SimpleAction = () => ({type: 'RESET'    });

export const write: (event:React.ChangeEvent<HTMLInputElement>) => WriteAction =
  (event) => ({
    type    : 'WRITE'              ,
    payload : event.target.value ,
});
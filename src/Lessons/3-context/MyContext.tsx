import React from "react";

type MyContextType = {
  count?     : number;
  increment? : () => void;
  decrement? : () => void;
}

// type MyContextType = {
//   count     : number;
//   increment : () => void;
//   decrement : () => void;
// }

// const MyContext = React.createContext();
const MyContext = React.createContext({} as MyContextType);

export default MyContext;
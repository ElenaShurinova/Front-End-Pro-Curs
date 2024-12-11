import {createContext} from "react";
import{useState} from "react";
import React from "react";

import { ThemeContext } from "./ThemeContext";
const CounterContext = createContext({count: 0, plusCount: () =>{}, minusCount:()=>{}});
export function CounterContextProvider({children}) {
    const [count, setCount] = useState(0);

    const plusCount = () => {
      setCount(oldCount => oldCount + 1);
    };
  
    const minusCount = () => {
      setCount(oldCount => oldCount - 1);
    };
  
    return (
      <CounterContext.Provider value={{ count, minusCount, plusCount }}>
        {children}
      </CounterContext.Provider>
    );
} ;
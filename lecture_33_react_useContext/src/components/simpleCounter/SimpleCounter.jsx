import { useContext } from "react";
import { CounterContext } from "../../context/CounterContext.jsx";

export default function SimpleCounter({ count }) {

  const counterValue = useContext(CounterContext);

  return (
    <div>
    <p>Count: {count}</p>
   
  </div>
);
};
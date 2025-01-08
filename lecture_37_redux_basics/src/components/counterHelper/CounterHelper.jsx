// src/components/CounterHelper.jsx
import { useSelector } from 'react-redux';

export default function CounterHelper() {
  const counter = useSelector(state => state.counter);  

  return (
    <p>Value from counter: {counter}</p> 
  );
}
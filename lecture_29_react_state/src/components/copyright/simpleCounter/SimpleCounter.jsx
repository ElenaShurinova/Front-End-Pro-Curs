import React, { useState } from 'react';
export default function SimpleCounter() {
let [count, setCount] = useState(0);

const hIncrement = () => {
    setCount(count + 1);
}
const hDecrement = () => {
    setCount(count - 1);
  };


  return (
    <div>
      <p>Clicked {count} times!</p>
      <button onClick={hIncrement}>Increment</button>
      <button onClick={hDecrement}>Decrement</button>
      {count % 5 === 0 &&  <p>Multiple of five</p>}

    </div>
  )

}

 
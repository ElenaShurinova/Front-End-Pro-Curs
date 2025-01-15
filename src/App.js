import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, decrementByAmount, increment, incrementByAmount } from './store/reducers/TodoReducer'

const App = () => {
  const count = useSelector((state) => state.todos.value);

  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>

          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>


        <div>
          <button onClick={() => dispatch(incrementByAmount(10))}>Increment Amount</button>
          <button onClick={() => dispatch(decrementByAmount(10))}>Decrement Amount</button>
        </div>
      </div>

      <h2><span>{count}</span></h2>
    </div>
  )
}

export default App
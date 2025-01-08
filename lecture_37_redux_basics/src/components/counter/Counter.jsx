import { useDispatch, useSelector } from "react-redux"
import { decrementAction, incrementAction } from "../../redux/actions/counterActions";

export default function Counter() {

  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch( incrementAction() );
  }

  const decrement = () => {
    dispatch( decrementAction() );
  }

  const addBtnClickHandler = () => {
    const parsed = +inputValue;
    if (!Number.isNaN(parsed))
      dispatch( addSomethingAction(parsed) );
    setInputValue('');
  }

  return (
    <div>
      <p>Now counter is: {counter}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment 2</button>
      <input placeholder="number" onChange={onInputChange} value={inputValue}></input>
      <button onClick={addBtnClickHandler}>Add number</button>
      <CounterHelper />
    </div>
  )
}
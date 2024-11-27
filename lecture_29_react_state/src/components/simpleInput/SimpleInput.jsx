import  { useState } from 'react';

export default function SimpleInput( {placeholder, required} ) {

  const [value, setValue] = useState('');
  const [isError, setError] = useState(false);

  const inputChangeHandler = (event) => {
    setValue(event.target.value);
  }

  const blurHandler = (event) => {
    if (!!required && !event.target.value) {
      setError(true);
    } else {
      setError(false);
    }
  }

  return (
    <div>
      <input
        className='sinpleInput'
        placeholder={placeholder}
        value={value}
        onChange={inputChangeHandler}
        onBlur={blurHandler}
      />
      { isError && <p>Fill this field!</p> }
    </div>
  )
}


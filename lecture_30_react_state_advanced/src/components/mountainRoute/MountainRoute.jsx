import { useState } from "react";

export default function LonelyMountainRoute() {

  const [points, setPoints] = useState( ['Shire', 'Rivendale', 'Misty mountains', 'Mirkwood', 'Esgaroth', 'Erebor'] );

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue( event.target.value );
  }

  const handleBtnClick = () => {
    setPoints( (old) => {
      return [...old, inputValue]
    })
  }
  const handleRemoveLast = () => {
    setPoints((old) => old.slice(0, -1));
  };
  const removePoint = () => {
    setPoints((old) => {
      const newPoints = [...old];
      newPoints.splice();
      return newPoints;
    });
  };

  return (
    <div className="lonelyMountainRouteContainer">
      {
        points.map( point => {
          return (
            <div key={point}>
              <p>{point}</p>
              <button onClick={() => removePoint(point)}>Remove location</button>
            </div>
          );
        })
      }
      <input
        placeholder="New Point"
        type="text"
        onChange={handleInputChange}
        value={inputValue}
      />
      <button
        onClick={handleBtnClick}
      >Add Point</button>
    </div>
  )

}
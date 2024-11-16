import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SimpleParagraph from './companens/SimpelParagrapf';

const root = ReactDOM.createRoot(document.getElementById('root'));


// function RandomText() {
//   const rand = Math.random();
//   return (
//     <div>
//       <p>{rand > 0.5 ? 'Greater' : 'Less'} than 0.5</p>
//     </div>
//   )
// }



  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>




function SimpleHeading() {
  const rand = Math.random();
  return (
    <div>
      {rand < 0.5 ? (
        <h3>Hello, conditional rendering!</h3>
      ) : (
        <h2>Hello, conditional rendering!</h2>
      )}
    </div>
  );
}




function RandomText() {
  const rand = Math.random();
  return (
    <div>
    
      {rand < 0.5 && <p>Small value</p>}
    </div>
  );
}
root.render(
  <>
    <RandomText />
    <SimpleHeading />
    <SimpleParagraph />
  </>
);




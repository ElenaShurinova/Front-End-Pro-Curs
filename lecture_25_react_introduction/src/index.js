import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

function SimpleParagraph() {
  const currentSeason = 'autumn';
    return (
      <p>Some text {new Date().toLocaleDateString()},now is {currentSeason}</p>
    );
  }
  function RandomText  ()  {
    const randomValue = Math.random();
    const text = randomValue > 0.5 ? 'Greater than 0.5' : 'Less than 0.5';
  
    return <p>{text}</p>;
  };
root.render(
      <>
        <SimpleParagraph />
        <RandomText />
        
      </>
);
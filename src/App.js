import React from 'react';
import './App.css';
import Dinner from './Dinner.js';

function App() {
  return (
    <div className="App">
      <Dinner dishName= "Chicken Biryani"/>
      <Dinner dishName= "Chicken Karahi"/>   
      <Dinner dishName= "Gajar ka Halwa"/>
    </div>
  );
}

export default App;

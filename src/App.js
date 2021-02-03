import React from 'react';
import './App.css';
import Dinner from './Dinner.js';

function App() {
  return (
    <div className="App">
      <Dinner dishName= "Chicken Biryani" sweetDish= "Kheer"/>
      <Dinner dishName= "Chicken Karahi" sweetDish= "gajar ka halwa"/>   
      <Dinner dishName= "Gajar ka Halwa" sweetDish= "zarda" />
    </div>
  );
}

export default App;

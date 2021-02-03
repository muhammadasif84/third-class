import React from 'react';
import './App.css';
import Dinner from './Dinner.js';

function App() {
  return (
    <div className="App">
      <Dinner dishName= "Chicken Biryani" sweetDish= "Kheer"/>
      <Dinner dishName= "Chicken Karahi" sweetDish= "Gajar ka Halwa"/>   
      <Dinner dishName= "Nihari" sweetDish= "Zarda" />
    </div>
  );
}

export default App;

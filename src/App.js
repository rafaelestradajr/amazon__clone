import Header from './Header';
import './App.css';
import React from 'react';
import Home from './Home';

function App() {
  return (
    //BEM
    <div className="app">
    
  <Header/>
  <Home/>
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Pics from './components/Pics'
import CountPics from './components/CountPics'

function App() {
  return (
    <div className="App">
      <Pics />
      <CountPics total="5" />
    </div>
  );
}

export default App;

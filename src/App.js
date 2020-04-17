import React from 'react';
import Egresos from './components/Egresos';
import Navigation from './components/Navigation';
import BModel from "./components/BModel";


function App() {
  return (
    <React.Fragment>
      <Navigation />
      <BModel />
      <div className="container mt-4">
      <Egresos />
      </div>
      
    </React.Fragment>
  );
}

export default App;

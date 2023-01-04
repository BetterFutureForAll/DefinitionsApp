import './App.css';
import React from 'react';
import Dimensions from './containers/DimensionBox';
import data from './assets/definitions.json';

function App() {

  return (
    <div className="definitionsApp" >
      <Dimensions props={data.definitionsArray}/>
    </div>
  );
}

export default App;

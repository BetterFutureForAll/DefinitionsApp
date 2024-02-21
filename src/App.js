import './App.css';
import React, { useState } from 'react';
import Dimensions from './containers/DimensionBox';
import data from './assets/definitions.json';

function App() {
  const [isActive, setActive] = useState("false");
  const ToggleClass = () => {
    setActive(!isActive);
  };

  return (
    <div className="definitionsApp" >
      <Dimensions props={data} clickHandler={ToggleClass} />
    </div>
  );
}

export default App;

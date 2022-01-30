import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="menu-block"></div>
      <div className="blocks-grid">
        <div className="params-block">
          <div className="traffic-light">
            <div className="light-block light-red"></div>
            <div className="light-block light-yellow"></div>
            <div className="light-block light-green active"></div>
          </div>

          <div className="info-block">
            <p className="traffic-light-name">
              Info about of the traffic light
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

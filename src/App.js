import React from 'react';
import logo from './logo.svg';
import './App.css';
import Forecast from "./components/Forecast/Forecast";

function App() {
  return (
    <div className="App">
    <h1>React Weather App</h1>
    <main>
        {/* add weather fetching component */}
        <Forecast />
      </main>
      <footer>
        Page created by Tayo
      </footer>
    </div>
  );
}

export default App;

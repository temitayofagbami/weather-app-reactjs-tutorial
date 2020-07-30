import React from 'react';
import logo from './logo.svg';
import './App.css';
import Forecast from "./components/Forecast/Forecast";
import Logo from './components/Logo/Logo';

function App() {
  return (
    <div className="App">
      <Logo/>
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

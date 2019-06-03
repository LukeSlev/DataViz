import React from "react";
import logo from "./logo.svg";
import DataViz from "./components/DataViz";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <DataViz />
      </header>
    </div>
  );
}

export default App;

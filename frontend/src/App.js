import React from 'react'
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import "./App.css";
//import axios from 'axios';

function App() {

  return (
    <div className="App">
        <Header />
        <Home />
    </div>
  );
}

export default App;

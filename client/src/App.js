// import { useState, useEffect } from "react";
import { Route } from "react-router-dom";

import './App.css';
import Launch from "./views/Launch/Launch";
//Agregar path a /home
function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Launch/> 
      </Route>
      <Route path="/videogames">
        <h1>Ruta videogames</h1>  
      </Route>
    </div>
  );
}

export default App;

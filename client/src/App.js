// import { useState, useEffect } from "react";
import { Route } from "react-router-dom";

import './App.css';
import Launch from "./views/Launch/Launch";
import Home from "./views/Home/Home";
import Form from "./views/Form/Form";
import Detail from "./views/Detail/Detail";

//Agregar path a /home
function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Launch/> 
      </Route>
      <Route exact path="/home">
          <Home/>
      </Route>
      <Route exact path="/form">
         <Form/>
      </Route>
      <Route path="/videogames/:id">
        <Detail/>
      </Route>

    </div>
  );
}

export default App;

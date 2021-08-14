import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import InternshipPage from "./InternshipPage/IntershipPage";

// import axios from "axios";
// import {useState, useEffect} from 'react'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/internshipPage/:field" component={InternshipPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

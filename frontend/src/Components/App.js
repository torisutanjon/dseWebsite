import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from "./views/MainPage/MainPage";
import InternshipPage from "./views/InternshipPage/IntershipPage";
import { useDispatch } from "react-redux";
import { getCompanyInfos } from "../actions/internships";
// import axios from "axios";
// import {useState, useEffect} from 'react'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCompanyInfos());
  }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/intershipPage/:field" component={InternshipPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import InternshipPage from "./InternshipPage/IntershipPage";
import ModalOverview from "./InternshipPage/modalOverview/ModalOverview";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/overview=:companyname" component={ModalOverview} />
          <Route path="/internshipPage/:field" component={InternshipPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

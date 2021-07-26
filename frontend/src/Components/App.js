import "./App.css";
import { Route, Switch } from "react-router-dom";
import MainPage from "./views/MainPage/MainPage";
import InternshipPage from "./views/InternshipPage/IntershipPage";
// import axios from "axios";
// import {useState, useEffect} from 'react'

function App() {
  // const [companies, setCompanies] = useState([])

  // useEffect(() => {
  //   axios.get("http://localhost:3000/intershipPage/:field")
  //   .then(res => setCompanies(res.data))
  //   .catch(err => console.log(err))
  // })

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/intershipPage/:field" component={InternshipPage} />
      </Switch>
    </div>
  );
}

export default App;

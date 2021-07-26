import "./App.css";
import { Route, Switch } from "react-router-dom";
import MainPage from "./views/MainPage/MainPage";
import InternshipPage from "./views/InternshipPage/IntershipPage";

function App() {
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

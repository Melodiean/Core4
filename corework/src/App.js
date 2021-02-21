import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Landing from "./components/Landing";
import Todo from "./components/Todo";
import Digiclockc from "./components/Digiclockc";
import Digiclockf from "./components/Digiclockf";
import Dieroll from "./components/Dieroll";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/Landing" component={Landing} />
        <Route path="/Todo" component={Todo} />
        <Route path="/Digiclockc" component={Digiclockc} />
        <Route path="/Digiclockf" component={Digiclockf} />
        <Route path="/Dieroll" component={Dieroll} />
      </Switch>
    </div>
  );
}

export default App;

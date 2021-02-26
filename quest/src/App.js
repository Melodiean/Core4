import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Questions from "./components/Questions";
import Home from "./components/Home";
import Pages from "./components/Pages";
// import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>devQuest</h1>
      <Pages />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/questions" component={Questions} />
      </Switch>
    </div>
  );
}

export default App;

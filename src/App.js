import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Review from "./pages/Review/Review";

import "./App.css";
function App() {
  return (
    <div className="App">
      <div className="container ">
        <h1 className="text-center">Star Wars</h1>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/review/:id" component={Review} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}
export default App;

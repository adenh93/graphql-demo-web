import React from "react";
import Users from "../../pages/Users";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Hello React!</h1>
      <Router>
        <Switch>
          <Route path="/">
            <Users />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;

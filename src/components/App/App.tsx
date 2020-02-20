import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Feed from "../../pages/Feed";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Feed />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;

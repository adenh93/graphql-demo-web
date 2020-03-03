import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Feed from "../../pages/Feed";
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";

const App: React.FC = () => {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Graphql Demo</Typography>
        </Toolbar>
      </AppBar>
      <Router>
        <Switch>
          <Box mx={2}>
            <Route path="/">
              <Feed />
            </Route>
          </Box>
        </Switch>
      </Router>
    </div>
  );
};

export default App;

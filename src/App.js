import React from 'react';
import Homepage from './Components/Homepage/Homepage';
import { Switch, Route } from 'react-router-dom'

const App = () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
  </Switch>
) 

export default App;

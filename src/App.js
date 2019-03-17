import React from 'react';
import Homepage from './Components/Homepage/Homepage';
import Editor from './Components/Editor/Editor';
import JCHEditor from './Components/JCHEditor/JCHEditor';
import { Switch, Route } from 'react-router-dom'

const App = () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route path="/jch-editor/:id?" component={JCHEditor} />
    <Route path="/editor/:id?" component={Editor} />
  </Switch>
) 

export default App;

import React from 'react';
import Home from "./page/Home";
import {Switch,Route,Redirect} from 'react-router-dom';
import Vrealite from './page/Vrealite';
import Shop from './page/Shop';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}  />
      <Route exact path="/Vrealite" component={Vrealite}  />
      <Route exact path="/Shop" component={Shop}  />
      <Redirect to="/" />
    </Switch>
  );
};

export default App;

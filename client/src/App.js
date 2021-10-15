import React from 'react';
import Home from "./page/Home";
import {Switch,Route,Redirect} from 'react-router-dom';
import Vrealite from './page/Vrealite';
import Shop from './page/Shop';
import Inscription from './page/Inscription';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}  />
      <Route exact path="/Vrealite" component={Vrealite}  />
      <Route exact path="/Shop" component={Shop}  />
      <Route exact path="/Inscription" component={Inscription}  />
      <Redirect to="/" />
    </Switch>
  );
};

export default App;

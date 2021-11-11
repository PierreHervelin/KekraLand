import React from 'react';
import Home from "./page/Home";
import {Switch,Route,Redirect} from 'react-router-dom';
import Vrealite from './page/Vrealite';
import Shop from './page/Shop';
import Inscription from './page/Inscription';
import Connexion from './page/Connexion';
import Vreel3 from './page/Vreel3';
import Land from './page/Land';
import BackOffice from './page/BackOffice';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/vrealite" component={Vrealite} />
      <Route exact path="/shop" component={Shop} />
      <Route exact path="/inscription" component={Inscription} />
      <Route exact path="/connexion" component={Connexion} />
      <Route exact path="/admin" component={BackOffice}/>
      
      <Route exact path="/vreel3" component={Vreel3} />
      <Route exact path="/land" component={Land} />
      <Redirect to="/" />
    </Switch>
  );
};

export default App;

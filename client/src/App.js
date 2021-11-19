import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import Vrealite from './page/Vrealite';
import Inscription from './page/Inscription';
import Vreel3 from './page/Vreel3';
import Land from './page/Land';
import BackOffice from './page/BackOffice';
import Home from './page/Home';
import Vetement from './page/Vetement';

const App = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/inscription" component={Inscription}/>
            <Route exact path="/shop" component={Vetement}/>
            <Route exact path="/admin" component={BackOffice}/>

            <Route exact path="/easteregg/vrealite" component={Vrealite}/>
            <Route exact path="/easteregg/vreel3" component={Vreel3}/>
            <Route exact path="/easteregg/land" component={Land}/>

            <Redirect to="/"/>
        </Switch>
    );
};

export default App;

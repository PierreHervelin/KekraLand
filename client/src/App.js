import React, { useEffect } from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import Vrealite from './page/Vrealite';
import Inscription from './page/Inscription';
import Vreel3 from './page/Vreel3';
import Land from './page/Land';
import BackOffice from './page/BackOffice';
import Home from './page/Home';
import Product from './page/Product';
import Shop from './page/Shop';

const App = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/inscription" component={Inscription}/>
            <Route exact path="/shop" component={Shop}/>
            <Route exact path="/admin" component={BackOffice}/>

            <Route path='/product/:name' component={Product}/>

            <Route exact path="/easteregg/vrealite" component={Vrealite}/>
            <Route exact path="/easteregg/vreel3" component={Vreel3}/>
            <Route exact path="/easteregg/land" component={Land}/>

            <Redirect to="/"/>
        </Switch>
    );
};

export default App;

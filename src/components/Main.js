import React from 'react';
import { Switch, Route } from 'react-router-dom';
import '../App.css';


import Form from './Form';
import LocationDetails from './LocationDetails';

const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Form} />
            <Route exact path="/location/:id" component={LocationDetails} />
        </Switch>
    </main>
)

export default Main;


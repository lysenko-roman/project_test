import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Clients from '../pages/Client';
import Author from '../pages/Author';
import Registration from '../pages/Forms';


export default () => {
    return (
        <Switch>

            <Route path="/clients" component={Clients} />

            <Route path="/registration" component={Registration} />

            <Route path="/author" component={Author} />

        </Switch>
)
}
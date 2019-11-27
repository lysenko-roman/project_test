import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Clients from '../pages/Clients';
import Author from '../pages/Author';
import Form from '../pages/Form';


export default () => {
    return (
        <Switch>

            <Route path="/clients" component={Clients} />

            <Route path="/registration" component={Form} />

            <Route path="/author" component={Author} />

        </Switch>
)
}
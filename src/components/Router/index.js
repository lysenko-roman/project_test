import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Author from '../pages/Author';

export default () => {
    return (
        <Switch>

    <Route path="/author" component={Author} />

    </Switch>
)
}
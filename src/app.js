/**
 * Created by Ivana on 3.8.2015..
 */
import React from 'react';
import App from './components/App/App';
import Router from 'react-router';
var { Route, DefaultRoute, RouteHandler, Link } = Router;
import UserList from './components/UserList/UserList'

var routes = (
    <Route handler={App}>
        <DefaultRoute handler={App}/>
        <Route name="users" path="/users" handler={UserList} />
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.getElementById('root'));
});

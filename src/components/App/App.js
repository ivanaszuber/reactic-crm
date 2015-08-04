/**
 * Created by Ivana on 3.8.2015..
 */
import React from 'react';
import Sidebar from '../Sidebar/Sidebar'
import Router from 'react-router';
var { Route, DefaultRoute, RouteHandler, Link } = Router;

export default class App extends React.Component{
    render() {
        return (

            <div>
                <Sidebar />
                <RouteHandler/>
            </div>
        )
    }
}

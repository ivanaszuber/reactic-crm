/**
 * Created by Ivana on 3.8.2015..
 */
import { Link } from 'react-router';
import React from 'react';
import SidebarNav from '../SidebarNav/SidebarNav';
import SidebarItem from '../SidebarItem/SidebarItem';
import Router from 'react-router';
var { Route, DefaultRoute, RouteHandler } = Router;

class Sidebar  extends React.Component {
    render() {
        return (
            <div id="sidebar">
                <div className='sidebar-nav-container'>
                    <ul>
                        <li><Link to="users">Users</Link></li>
                        <li><Link to="users">Inbox</Link></li>
                        <li><Link to="users">Calendar</Link></li>
                    </ul>
                </div>
                <RouteHandler/>
            </div>
        );
    }
}

export default Sidebar;
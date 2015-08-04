/**
 * Created by Ivana on 3.8.2015..
 */
import React from 'react';
import { Link, State, Navigation } from 'react-router';

class SidebarItem {


    render() {

        var RouteLink = 'a';
        var componentProps = {
            name: null,
            tabIndex: -1,
            href: this.props.href || ''
            //onClick: this.handleClick,
            //style: style
        };


        //if(this.props.hasOwnProperty('href') && this.props.href.length && this.props.href !== '#') {
        //    RouteLink = Link;
        //    componentProps.to = this.props.href;
        //    delete componentProps.href;
        //}

        return (
            <li ref='node' >
                <RouteLink {...componentProps}>
                    <span className='name'>{this.props.name}</span>
                </RouteLink>
                {this.props.children}
            </li>
        )
    }
}

export default SidebarItem;
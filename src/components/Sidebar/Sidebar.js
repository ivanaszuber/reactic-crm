/**
 * Created by Ivana on 3.8.2015..
 */
import { Link } from 'react-router';
import React from 'react';
import SidebarNav from '../SidebarNav/SidebarNav';
import SidebarItem from '../SidebarItem/SidebarItem';

class Sidebar  extends React.Component {
    render() {
        return (
            <div>
                <div className='sidebar-header'>PAGES</div>
                <div className='sidebar-nav-container'>
                        <SidebarNav style={{marginBottom: 0}}>
                            <SidebarItem glyph='icon-fontello-gauge' name='Blank' href='/' />
                        </SidebarNav>
                </div>
            </div>
        );
    }
}

export default Sidebar;
/**
 * Created by Ivana on 4.8.2015..
 */
import React from 'react';

class Sidebar  extends React.Component {
    render() {

        return (
            <ul  children={null}>
                {this.props.children}
            </ul>
        );
    }
}

export default Sidebar;
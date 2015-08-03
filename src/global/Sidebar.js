/**
 * Created by Ivana on 3.8.2015..
 */
import {Link, State, Navigation} from 'react-roter';

export var Sidebar = React.createClass({
    render() {
        return (
            <div ref='sidebar' {...props} children={null}>
                <div ref='innersidebar'>{this.props.children}</div>
            </div>
        );
    }
});

export var SidebarItem = React.createClass({
    propTypes:{
        open: React.PropTypes.bool,
        active: React.PropTypes.bool,
        href: React.PropTypes.string
    },
    getInitialState(){
        return {
            open:this.props.open || false,
            active: this.props.active || false
        }
    },

    activateNavItem(props) {
        var active = props.active || false;
        var currentLocation = this.context.router.state.location.pathname;

        if(!active && props.href) {
            active = this.isActive(props.href) && (currentLocation == props.href);
        }

        if(active) {
            this.setState({active: true});
            this.emitOpen(true);
        }
    },
    componentWillReceiveProps(nextProps) {
        this.activateNavItem(nextProps);
    },
    componentDidMount() {
        this.activateNavItem(this.props);
    }
})
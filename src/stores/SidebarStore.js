/**
 * Created by Ivana on 3.8.2015..
 */
import Dispatcher from '../Dispatcher';
import EventEmitter from 'eventemitter3';
import assign from 'react/lib/Object.assign';

var CHANGE_EVENT = 'change';

function open(open) {
    var node = React.findDOMNode(this.refs.node);
    if (open) {
        this.emit('sidebar:openstate', node, open);
    } else {
        this.emit('sidebar:openstate', node);
    }
}

var SidebarStore = assign({}, EventEmitter.prototype, {

    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },

    activateNavItem(props) {
        var active = props.active || false;
        var currentLocation = this.context.router.state.location.pathname;

        if(!active && props.href) {
            active = this.isActive(props.href) && (currentLocation == props.href);
        }

        if(active) {
            this.setState({active: true});
            this.open(true);
            var node = React.findDOMNode(this.refs.node);
            var height = $(node).height();
            var top = $(node).offset().top;
            setTimeout(() => {
                this.emit('sidebar:reposition', node, top, height);
            }, 15);
        }
    },

    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

});

Dispatcher.register(function (action) {
    switch (action.actionType) {

        case 'NAV_OPEN':
            open('OPEN');
            SidebarStore.emitChange();
    }
});

module.exports = SidebarStore;
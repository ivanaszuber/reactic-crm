/**
 * Created by Ivana on 3.8.2015..
 */
import Flux from 'flux';
import assign from 'react/lib/Object.assign';
import Constants from '../Constants';

let Dispatcher = assign(new Flux.Dispatcher(), {

    handleViewAction(action) {
        var payload = {
            source: Constants.VIEW_ACTION,
            action:action
        };

        this.dispatch(payload);
    }
});

export default Dispatcher;
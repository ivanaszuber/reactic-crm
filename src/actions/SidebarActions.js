/**
 * Created by Ivana on 3.8.2015..
 */
import Dispatcher from '../Dispatcher';

export default {

    open() {
        Dispatcher.dispatch({
            actionType: 'OPEN'
        });
    }
}
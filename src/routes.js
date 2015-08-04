/**
 * Created by Ivana on 4.8.2015..
 */
import { Route, Router } from 'react-router';
import BrowserHistory from 'react-router/lib/BrowserHistory';
import HashHistory from 'react-router/lib/HashHistory';

import Blank from 'routes/blank';
import UserList from 'components/UserList/UserList'

export default (withHistory, onUpdate) => {
    const history = withHistory?
        (Modernizr.history ?
            new BrowserHistory
            : new HashHistory)
        : null;
    return (
        <Router history={history} onUpdate={onUpdate}>
            <Route path='/' component={Blank} />
            <Route path='/reactic-crm/users' component={UserList} />
        </Router>
    );
};
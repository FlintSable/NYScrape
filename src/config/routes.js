import React from 'react';
import Router, {Route, IndexRoute} from 'react-router';


import App from '../components/App';
import Search from '../components/seach/Search'
import Saved from '../components/saved/Saved'

module.exports = (
    <Route path='/' component={App}>
    <Route Path='Seach' component={Search} />
    <Route path='Saved' component={Saved} />
    <IndexRoute component={Search} />


   </Route> 

)
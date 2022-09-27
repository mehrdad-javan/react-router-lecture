import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import { About, Home, NotFoud, RegisterForm, ShowData } from './App';
import Header from './Header';

const RouterExample = () => {
    return (
        <div className='container'>
            <Router>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/home" component={Home} />
                    <Route path="/about" component={About} />

                    <Route path="/form" component={RegisterForm} />
                    <Redirect from="/register" to="/form" />
                    <Route path="/data/:id" component={ShowData} />

                    <Route component={NotFoud} />
                </Switch>

            </Router>
        </div>
    );
};

export default RouterExample;
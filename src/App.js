import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';

import './App.css';
import './styles.css';
//import Test1 from './some'
import ArrayTrueFalse from './array-true-false'
import ArrayChange from './array-change'

const App = () => {
    return (
        <Router>
            <div className="App">
                <div className="App-header">
                    <h2>Ogarnij Javascript :]</h2>
                </div>
                <nav>
                    <NavLink activeClassName='is-active' className="nav-link" to="/array-change">Zmienia tablicę</NavLink>
                    <NavLink exact={true} activeClassName='is-active' className="nav-link" to="/">Zwraca True/false</NavLink>
                    <NavLink activeClassName='is-active' className="nav-link" to="#">Zwraca pojedynczą wartość</NavLink>
                </nav>
                <Route exact path="/" component={ArrayTrueFalse} />
                <Route path="/array-change" component={ArrayChange} />
            </div>
        </Router>
    )
};

export default App;

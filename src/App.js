import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

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
                    <div className="nav-link"><Link to="/array-change">Zmienia tablicę</Link></div>
                    <div className="nav-link"><Link to="/">Zwraca True/false</Link></div>
                    <div className="nav-link">Zwraca pojedynczą wartość</div>
                </nav>
                <Route exact path="/" component={ArrayTrueFalse} />
                <Route path="/array-change" component={ArrayChange} />
            </div>
        </Router>
    )
};

export default App;

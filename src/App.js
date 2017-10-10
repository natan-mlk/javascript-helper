import React from 'react';
import { BrowserRouter as Router, Route, NavLink, } from 'react-router-dom';

import './App.css';
import './styles.css';

import ArrayTrueFalse from './array-true-false'
import ArrayChange from './array-change'
import ArraySingleValue from './array-single-value'

const App = () => {
    return (
        <Router basename="react-arrays">
            <div className="App">
                <div className="App-header">
                    <h3>Ogarnij Javascript :] czyli React.js </h3>
                    <h2>Metody dla [tablic]</h2>
                </div>

                <nav>
                    <NavLink activeClassName='is-active' className="nav-link" to="/array-change">Zmienia tablicę</NavLink>
                    <NavLink activeClassName='is-active' className="nav-link" to="/" exact>Zwraca True/false</NavLink>
                    {/*<NavLink activeClassName='is-active' className="nav-link" to="/" exact={true}>Zwraca True/false</NavLink>*/}
                    <NavLink activeClassName='is-active' className="nav-link" to="/array-single-value">Zwraca pojedynczą wartość</NavLink>
                </nav>

                <Route exact path="/" component={ArrayTrueFalse} />
                <Route path="/array-change" component={ArrayChange} />
                <Route path="/array-single-value" component={ArraySingleValue} />
            </div>
        </Router>
    )
};

{/*spis metod*/}
{/*https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Obiekty/Array*/}

{/*Zwraca True/false: isArray(), every(), includes(),  some()*/}

{/*Zwraca pojedynczą wartość: find(), findIndex(), indexOf(), lastIndexOf()*/}

{/*Zmienia Array: copyWithin(), *fill(), push(), splice(), unshift()*/}

{/*Nowy Array: filter(), map(), slice()*/}

{/*Działania na 2 array: concat(),*/}

{/*Iteracja po tablicy: forEach()*/}

{/*Laczy tablice: join()*/}

{/*Metoda specjalna: reduce(), reduceRight()*/}



{/*The difference is in the return values.*/}

{/*.map() returns a new Array of objects created by taking some action on the original item.*/}

{/*.every() returns a boolean - true if every element in this array satisfies the provided testing*/}
{/*function. An important difference with .every() is that the test function may not always be called for*/}
{/*every element in the array. Once the testing function returns false for any element, no more array*/}
{/*elements are iterated. Therefore, the testing function should usually have no side effects.*/}

{/*.forEach() returns nothing - It iterates the Array performing a given action for each item in the Array.*/}


{/*---------------*/}

{/*.every() (stops looping the first time the iterator returns false or something falsey)*/}
{/*.some() (stops looping the first time the iterator returns true or something truthy)*/}
{/*.filter() (creates a new array including elements where the filter function returns true and omitting*/}
{/*the ones where it returns false)*/}
{/*.map() (creates a new array from the values returned by the iterator function)*/}
{/*.reduce() (builds up a value by repeated calling the iterator, passing in previous values; see the spec*/}
{/*for the details; useful for summing the contents of an array and many other things)*/}
{/*.reduceRight() (like reduce, but works in descending rather than ascending order)*/}


export default App;

import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
//import Test1 from './some'
import ArrayFunctions from './array-functions'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentArray: [],
            nameOfArray: 'arrayNumbers',
            arrayNumbers: [3, 10, 18, 20],
            arrayStrings: ['kot', 'pies', 'krowa', 'mucha'],
        };
        console.log("currentArray: " + this.state.currentArray);
    }


    //functions
    sortArray(arg) {
        this.setState(()=>{this.state.currentArray.sort(); return this.state.currentArray})
    }

    popArray() {
        // document.getElementById('result').innerHTML = arg.pop();
        this.setState(()=>{this.state.currentArray.pop(); return this.state.currentArray})
    }

    render() {

        const arrayNumbers = this.state.arrayNumbers;
        const arrayStrings = this.state.arrayStrings;

        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>

                <label>
                    <input type="radio" value="1" name="my-radio"
                           onClick={() => this.setState({currentArray: arrayNumbers, nameOfArray: 'arrayNumbers'})}/>
                    arrayNumbers = [ {this.state.arrayNumbers.map((arg) => arg + ", ")}]
                </label>

                <label>
                    <input type="radio" value="1" name="my-radio"
                           onClick={() => this.setState({currentArray: arrayStrings, nameOfArray: 'arrayStrings'})}/>
                    arrayStrings = {this.state.arrayStrings}
                </label>

                <ArrayFunctions myArrayIs={this.state.currentArray} name="sort" nameOfArray = {this.state.nameOfArray}
                                myFunction={() => this.sortArray()}/>

                <ArrayFunctions myArrayIs={this.state.currentArray} name="pop" nameOfArray = {this.state.nameOfArray}
                                myFunction={() => this.popArray()}/>

                <p>metoda zwraca nam: <span id="result"> </span></p>
                <p>tablica wygląda tak: <span>[ {this.state.currentArray.map((arg) => arg + ", ")}]</span></p>


                {/*<Test1 buttonName=".some()" check={arrayNumbers}*/}
                       {/*description="zwraca 'true' jeśli choć jeden element spełnia zadany warunek"/>*/}
                {/*<Test1 buttonName=".some()" check={arrayStrings}*/}
                       {/*description="zwraca 'true' jeśli choć jeden element spełnia zadany warunek"/>*/}
                {/*<p id="demo" className="hide">what will it be?</p>*/}



                The difference is in the return values.

                .map() returns a new Array of objects created by taking some action on the original item.

                .every() returns a boolean - true if every element in this array satisfies the provided testing function. An important difference with .every() is that the test function may not always be called for every element in the array. Once the testing function returns false for any element, no more array elements are iterated. Therefore, the testing function should usually have no side effects.

                .forEach() returns nothing - It iterates the Array performing a given action for each item in the Array.


                ---------------

                .every() (stops looping the first time the iterator returns false or something falsey)
                .some() (stops looping the first time the iterator returns true or something truthy)
                .filter() (creates a new array including elements where the filter function returns true and omitting the ones where it returns false)
                .map() (creates a new array from the values returned by the iterator function)
                .reduce() (builds up a value by repeated calling the iterator, passing in previous values; see the spec for the details; useful for summing the contents of an array and many other things)
                .reduceRight() (like reduce, but works in descending rather than ascending order)

            </div>
        );
    }
}

export default App;

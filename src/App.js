import React, {Component} from 'react';
import './App.css';
import './styles.css';
//import Test1 from './some'
import ArrayFunctions from './array-functions'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentArray: [],
            nameOfArray: '*Wybierz tablicę*',
            arrayNumbers: [3, 10, 18, 20],
            arrayStrings: ['kot', 'burger', 'playstation', 'urlop'],
            numbersClass: '',
            stringsClass: '',
        };
    }


    //functions
    sortArray(arg) {
        this.setState(() => {
            this.state.currentArray.sort();
            return this.state.currentArray
        })
    }

    popArray() {
        this.setState(() => {
            this.state.currentArray.pop();
            return this.state.currentArray
        })
    }
    shiftArray() {
        this.setState(() => {
            this.state.currentArray.shift();
            return this.state.currentArray})
    }
    reverseArray(arg) {
        this.setState(() => {
            this.state.currentArray.reverse();
            return this.state.currentArray
        })
    }
    fillArray() {
        this.setState(() => {
            this.state.currentArray.fill('lol');
            return this.state.currentArray
        })
    }

    render() {

        const arrayNumbers = this.state.arrayNumbers;
        const arrayStrings = this.state.arrayStrings;

        return (
            <div className="App">
                <div className="App-header">

                    <h2>Ogarnij Javascript :] </h2>
                </div>

                <div className="choose-array">
                    <p>Wybierz tablicę:</p>
                    <button className="reset"
                            onClick={() => this.setState({
                                arrayNumbers: [3, 10, 18, 20],
                                arrayStrings: ['kot', 'burger', 'playstation', 'urlop'],
                                numbersClass: '',
                                stringsClass: '',
                                nameOfArray: '*Wybierz tablicę*',
                            })}>Resetuj tablice</button>

                    <div className={this.state.numbersClass + " numbers"}
                         onClick={() => this.setState({
                             currentArray: arrayNumbers,
                             nameOfArray: 'arrayNumbers',
                             numbersClass: 'active',
                             stringsClass: '',
                         })}>
                        <p className="given-array">
                            arrayNumbers = [ {this.state.arrayNumbers.map((arg) => arg + ", ")}]
                        </p>

                    </div>
                    <div className={this.state.stringsClass + " strings"}
                         onClick={() => this.setState({
                             currentArray: arrayStrings,
                             nameOfArray: 'arrayStrings',
                             numbersClass: '',
                             stringsClass: 'active',
                         })}>
                        <p className="given-array">
                            <span><div></div>arrayStrings = [ {this.state.arrayStrings.map((arg) => arg + ", ")}]</span>
                        </p>
                    </div>
                </div>
                <div className="row first">
                    <ArrayFunctions myArrayIs={this.state.currentArray} name="sort" nameOfArray={this.state.nameOfArray}
                                    myFunction={() => this.sortArray()}
                                    description="Sortuje elementy tablicy. Zobacz w jaki sposób"/>

                    <ArrayFunctions myArrayIs={this.state.currentArray} name="pop" nameOfArray={this.state.nameOfArray}
                                    myFunction={() => this.popArray()}
                                    description="Usuwa ostatni element tablicy, zwracając jego wartość"/>

                    <ArrayFunctions myArrayIs={this.state.currentArray} name="shift" nameOfArray={this.state.nameOfArray}
                                    myFunction={() => this.shiftArray()}
                                    description="Usuwa pierwszy element tablicy, zwracając jego wartość"/>
                </div>
                <div className="row">
                    <ArrayFunctions myArrayIs={this.state.currentArray} name="reverse" nameOfArray={this.state.nameOfArray}
                                    myFunction={() => this.reverseArray()}
                                    description="Odwraca kolejność elementów tablicy."/>

                    <ArrayFunctions myArrayIs={this.state.currentArray} name="fill" nameOfArray={this.state.nameOfArray} brackets="'lol'"
                                    myFunction={() => this.fillArray()}
                                    description="Zastępuje wszystkie elementy tablicy daną wartością. Przyjmuje: fill(value, start, end)"/>
                </div>

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


                {/*<p>metoda zwraca nam: <span id="result"> </span></p>*/}
                {/*<p>tablica wygląda tak: <span>[ {this.state.currentArray.map((arg) => arg + ", ")}]</span></p>*/}


                {/*<Test1 buttonName=".some()" check={arrayNumbers}*/}
                {/*description="zwraca 'true' jeśli choć jeden element spełnia zadany warunek"/>*/}
                {/*<Test1 buttonName=".some()" check={arrayStrings}*/}
                {/*description="zwraca 'true' jeśli choć jeden element spełnia zadany warunek"/>*/}
                {/*<p id="demo" className="hide">what will it be?</p>*/}


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


            </div>
        );

    }
}

export default App;

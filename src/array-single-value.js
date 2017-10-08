import React, {Component} from 'react';
import ArrayFunctions from './array-single-value-functions'


class ArrayTrueFalse extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentArray: [],
            nameOfArray: '[Wybierz tablicę]',
            arrayNumbers: [3, 10, 18, 20],
            arrayStrings: ['kot', 'burger', 'playstation', 'kot', 'urlop'],
            numbersClass: '',
            stringsClass: '',
        };
    }

    findArray() {
        if (this.state.currentArray.length > 0) {
            return this.state.currentArray.find((elem) => elem > 3);

        }
    }

    findIndexArray() {
        if (this.state.currentArray.length > 0) {
            return this.state.currentArray.findIndex((elem) => elem > 3);

        }
    }

    indexOfArray () {
        if (this.state.currentArray.length > 0) {
            return this.state.currentArray.indexOf('kot');
        }
    }

    lastIndexOfArray () {
        if (this.state.currentArray.length > 0) {
            return this.state.currentArray.lastIndexOf('kot');
        }
    }



    render() {

        const arrayNumbers = this.state.arrayNumbers;
        const arrayStrings = this.state.arrayStrings;

        return (
            <div className="App">

                <div className="choose-array">
                    <p>Wybierz tablicę:</p>
                    <button className="reset"
                            onClick={() => this.setState({
                                arrayNumbers: [3, 10, 18, 20],
                                arrayStrings: ['kot', 'burger', 'playstation', 'kot', 'urlop'],
                                numbersClass: '',
                                stringsClass: '',
                                nameOfArray: '[Wybierz tablicę]',
                            })}>Resetuj tablice
                    </button>

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
                            <span>arrayStrings = [ {this.state.arrayStrings.map((arg) => arg + ", ")}]</span>
                        </p>
                    </div>
                </div>

                <div className="row first">
                    <ArrayFunctions myArrayIs={this.state.currentArray} name="find"
                                    nameOfArray={this.state.nameOfArray}
                                    myFunction={() => this.findArray()}
                                    brackets="func"
                                    description="Zwróć pierwszy element, który spełni warunek [ES6]"/>

                    <ArrayFunctions myArrayIs={this.state.currentArray} name="findIndex"
                                    nameOfArray={this.state.nameOfArray}
                                    myFunction={() => this.findIndexArray()}
                                    brackets="func"
                                    description="Zwróć index pierwszego elementu, który spełni warunek"/>
                </div>
                <div className="row">
                    <ArrayFunctions myArrayIs={this.state.currentArray} name="indexOf"
                                    nameOfArray={this.state.nameOfArray}
                                    myFunction={() => this.indexOfArray()}
                                    brackets="'kot'"
                                    description="Zwraca index pierwszego pojawienia się elementu, który spełni warunek"/>

                    <ArrayFunctions myArrayIs={this.state.currentArray} name="lastIndexOf"
                                    nameOfArray={this.state.nameOfArray}
                                    myFunction={() => this.lastIndexOfArray()}
                                    brackets="'kot'"
                                    description="Zwraca index ostatniego pojawienia się elementu, który spełni warunek"/>

                </div>
            </div>
        )
    }
}

export default ArrayTrueFalse
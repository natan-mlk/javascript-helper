import React, {Component} from 'react';
import ArrayFunctions from './array-true-false-functions'


class ArrayTrueFalse extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentArray: [],
            nameOfArray: '[Wybierz tablicę]',
            arrayNumbers: [3, 10, 18, 20],
            arrayStrings: ['kot', 'burger', 'playstation', 'urlop'],
            numbersClass: '',
            stringsClass: '',
        };
    }

    everyArray() {
        if (this.state.currentArray.length > 0) {
            if (this.state.currentArray.every((elem) => elem >= 10)) {
                return 'true'
            } else {
                return 'false'
            }
        }
    }

    someArray() {
        if (this.state.currentArray.length > 0) {
            if (this.state.currentArray.some((elem) => elem >= 10)) {
                return 'true'
            } else {
                return 'false'
            }
        }
    }

    includesArray() {
        if (this.state.currentArray.length > 0) {
            if (this.state.currentArray.includes('kot')) {
                return 'true'
            } else {
                return 'false'
            }
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
                                currentArray: [],
                                arrayNumbers: [3, 10, 18, 20],
                                arrayStrings: ['kot', 'burger', 'playstation', 'urlop'],
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
                            <span><div></div>arrayStrings = [ {this.state.arrayStrings.map((arg) => arg + ", ")}]</span>
                        </p>
                    </div>
                </div>

                <div className="row first">
                    <ArrayFunctions myArrayIs={this.state.currentArray} name="every"
                                    nameOfArray={this.state.nameOfArray}
                                    myFunction={() => this.everyArray()}
                                    brackets="func"
                                    description="Czy każdy element spełnia warunek zadany w funkcji func"/>

                    <ArrayFunctions myArrayIs={this.state.currentArray} name="some"
                                    nameOfArray={this.state.nameOfArray}
                                    myFunction={() => this.someArray()}
                                    brackets="func"
                                    description="Czy chociaż jeden element spełnia warunek zadany w funkcji func"/>

                    <ArrayFunctions myArrayIs={this.state.currentArray} name="includes"
                                    nameOfArray={this.state.nameOfArray}
                                    myFunction={() => this.includesArray()}
                                    brackets="'kot'"
                                    description="Ustala czy dana tablica posiada szukany element (ES7)"/>
                </div>
            </div>
        )
    }
}

export default ArrayTrueFalse
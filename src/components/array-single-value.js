import React, {Component} from 'react';
import ArrayFunctions from './array-single-value-functions'

class ArrayTrueFalse extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentArray: [],
            nameOfArray: '[ ]',
            arrayNumbers: [3, 10, 18, 20, 3, 11],
            arrayStrings: ['kot', 'burger', 'playstation', 'kot', 'wiedźmin'],
            numbersClass: '',
            stringsClass: '',
            func1Class: '',
            func2Class: '',
            func3Class: '',
            whatFunction: undefined
        };
    }

    findArray() {
        if (this.state.currentArray.length > 0 && this.state.whatFunction !== undefined) {
            return this.state.currentArray.find(this.state.whatFunction);
        } else {
            document.getElementById('alert').style.display = 'flex';
            return '???'
        }
    }

    findIndexArray() {
        if (this.state.currentArray.length > 0 && this.state.whatFunction !== undefined) {
            return this.state.currentArray.findIndex(this.state.whatFunction);
        } else {
            document.getElementById('alert').style.display = 'flex';
            return '???'
        }
    }

    indexOfArray() {
        if (this.state.currentArray.length > 0) {
            return this.state.currentArray.indexOf('kot');
        }
    }

    lastIndexOfArray() {
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

                <div className="">
                    <p>Wybierz funkcję, która zdefiniuje warunek:</p>
                </div>

                <div className="choose-function">
                    <div className={this.state.func1Class + " chosen-func"}
                         onClick={() => this.setState({
                             whatFunction: (elem) => elem >= 3,
                             func1Class: 'active',
                             func2Class: '',
                             func3Class: '',
                         })}>
                        <p>let Func = (elem) => elem >= 3</p>
                    </div>
                    <div className={this.state.func2Class + " chosen-func"}
                         onClick={() => this.setState({
                             whatFunction: (elem) => elem > 10,
                             func1Class: '',
                             func2Class: 'active',
                             func3Class: '',
                         })}>
                        <p>let Func = (elem) => elem > 10</p></div>
                    <div className={this.state.func3Class + " chosen-func"}
                         onClick={() => this.setState({
                             whatFunction: (elem) => elem.length === 8,
                             func1Class: '',
                             func2Class: '',
                             func3Class: 'active',
                         })}>
                        <p>let Func = (elem) => elem.length === 8</p></div>
                </div>

                <div className="row first">
                    <ArrayFunctions myArrayIs={this.state.currentArray} name="find"
                                    nameOfArray={this.state.nameOfArray}
                                    myFunction={() => this.findArray()}
                                    brackets="Func"
                                    description="Zwraca pierwszy element, który spełni warunek [ES6]"/>

                    <ArrayFunctions myArrayIs={this.state.currentArray} name="findIndex"
                                    nameOfArray={this.state.nameOfArray}
                                    myFunction={() => this.findIndexArray()}
                                    brackets="Func"
                                    description="Zwraca index pierwszego elementu, który spełni warunek"/>
                </div>
                <div className="row">
                    <ArrayFunctions myArrayIs={this.state.currentArray} name="indexOf"
                                    nameOfArray={this.state.nameOfArray}
                                    myFunction={() => this.indexOfArray()}
                                    brackets="'kot'"
                                    description="Zwraca index pierwszego pojawienia się zadanego elementu"/>

                    <ArrayFunctions myArrayIs={this.state.currentArray} name="lastIndexOf"
                                    nameOfArray={this.state.nameOfArray}
                                    myFunction={() => this.lastIndexOfArray()}
                                    brackets="'kot'"
                                    description="Zwraca index ostatniego pojawienia się zadanego elementu"/>

                </div>
            </div>
        )
    }
}

export default ArrayTrueFalse
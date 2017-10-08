import React, {Component} from 'react';
import ArrayFunctions from './array-true-false-functions'


class ArrayTrueFalse extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentArray: [],
            nameOfArray: '[Wybierz tablicę]',
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

    everyArray() {

        //
        // if (this.state.currentArray.length > 0 && this.state.whatFunction !== undefined) {
        //     return this.state.currentArray.find(this.state.whatFunction);
        // } else {
        //     return '!wybierz tablicę i funkcję!'
        // }

        if (this.state.currentArray.length > 0 && this.state.whatFunction !== undefined) {
            if (this.state.currentArray.every(this.state.whatFunction)) {
                return 'true'
            } else {
                return 'false'
            }
        }
        else {
            return '!wybierz tablicę i funkcję!'
        }
    }

    someArray() {
        if (this.state.currentArray.length > 0 && this.state.whatFunction !== undefined) {
            if (this.state.currentArray.some(this.state.whatFunction)) {
                return 'true'
            } else {
                return 'false'
            }
        } else {
            return '!wybierz tablicę i funkcję!'
        }
    }

    includesArray() {
        if (this.state.currentArray.length > 0 ) {
            if (this.state.currentArray.includes('kot')) {
                return 'true'
            } else {
                return 'false'
            }
        } else {
            return '!wybierz tablicę i funkcję!'
        }
    }


    render() {

        const arrayNumbers = this.state.arrayNumbers;
        const arrayStrings = this.state.arrayStrings;

        return (
            <div className="App">

                <div className="choose-array">
                    <p>Wybierz tablicę:</p>
                    {/*<button className="reset"*/}
                            {/*onClick={() => this.setState({*/}
                                {/*currentArray: [],*/}
                                {/*arrayNumbers: [3, 10, 18, 20],*/}
                                {/*arrayStrings: ['kot', 'burger', 'playstation', 'urlop'],*/}
                                {/*numbersClass: '',*/}
                                {/*stringsClass: '',*/}
                                {/*nameOfArray: '[Wybierz tablicę]',*/}
                            {/*})}>Resetuj tablice*/}
                    {/*</button>*/}

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
                             whatFunction: (elem) => elem === 'burger',
                             func1Class: '',
                             func2Class: '',
                             func3Class: 'active',
                         })}>
                        <p>let Func = (elem) => elem === 'burger'</p></div>
                </div>

                <div className="row first">
                    <ArrayFunctions myArrayIs={this.state.currentArray} name="every"
                                    nameOfArray={this.state.nameOfArray}
                                    myFunction={() => this.everyArray()}
                                    brackets="Func"
                                    description="Ustala czy każdy element spełnia warunek zadany w funkcji Func"/>

                    <ArrayFunctions myArrayIs={this.state.currentArray} name="some"
                                    nameOfArray={this.state.nameOfArray}
                                    myFunction={() => this.someArray()}
                                    brackets="Func"
                                    description="Ustala czy chociaż jeden element spełnia warunek zadany w funkcji Func"/>

                    <ArrayFunctions myArrayIs={this.state.currentArray} name="includes"
                                    nameOfArray={this.state.nameOfArray}
                                    myFunction={() => this.includesArray()}
                                    brackets="'burger'"
                                    description="Ustala czy dana tablica posiada szukany element (ES7)"/>
                </div>
            </div>
        )
    }
}

export default ArrayTrueFalse
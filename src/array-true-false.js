import React, {Component} from 'react';
import ArrayFunctions from './array-functions'
import ArrayFunctions2 from './array-functions-2'

class ArrayTrueFalse extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentArray: [],
            nameOfArray: '*Wybierz tablicę*',
            arrayNumbers: [3, 10, 18, 20],
            arrayStrings: ['kot', 'burger', 'playstation', 'urlop'],
            numbersClass: '',
            stringsClass: '',
            trueOrFalse: 'true or false?',
        };
    }

    everyArray() {
        if (this.state.currentArray.every((elem) => elem >= 10)) {
            this.setState({
                trueOrFalse: 'true'
            });
        } else {
            this.setState({
                trueOrFalse: 'false'
            });
        }
    }

    someArray() {
        if (this.state.currentArray.some((elem) => elem >= 10)) {
            document.getElementById('test').setAttribute('trueOrFalse', 'TRUE')
        } else {
            this.setAttribute('trueOrFalse', 'lol')
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
                                arrayStrings: ['kot', 'burger', 'playstation', 'urlop'],
                                numbersClass: '',
                                stringsClass: '',
                                nameOfArray: '*Wybierz tablicę*',
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
                                    trueOrFalse={this.state.trueOrFalse}
                                    brackets="func"
                                    description="Sprawdza czy każdy element spełnia warunek zadany w funckji func"/>

                    <ArrayFunctions2 myArrayIs={this.state.currentArray} name="some"
                                     nameOfArray={this.state.nameOfArray}
                                     myFunction={() => this.someArray()}
                                     trueOrFalse='???'
                                     brackets="func"
                                     description="Sprawdza czy to jest tablica"
                                     id="test"/>

                    <ArrayFunctions myArrayIs={this.state.currentArray} name="some"
                                    nameOfArray={this.state.nameOfArray}
                                    myFunction={() => this.someArray()}
                                    description="Sprawdza czy to jest tablica"/>
                </div>
            </div>
        )
    }
}

export default ArrayTrueFalse
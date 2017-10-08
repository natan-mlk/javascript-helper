import React, {Component} from 'react';
import ArrayFunctions from './array-change-functions'


class ArrayChange extends Component {

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
    sortArray() {
        this.setState({
            currentArray: this.state.currentArray.sort()} //można zapisać to samo na 2 sposoby
        )
    }

    popArray() {
        this.setState(() => {
            this.state.currentArray.pop();
        })
    }

    shiftArray() {
        this.setState(() => {
            this.state.currentArray.shift();
        })
    }

    reverseArray() {
        this.setState(() => {
            this.state.currentArray.reverse();
        })
    }

    fillArray() {
        this.setState(() => {
            this.state.currentArray.fill('lol');
        })
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
                    <ArrayFunctions myArrayIs={this.state.currentArray} name="sort" nameOfArray={this.state.nameOfArray}
                                    myFunction={() => this.sortArray()}
                                    description="Sortuje elementy tablicy. Zobacz w jaki sposób"/>

                    <ArrayFunctions myArrayIs={this.state.currentArray} name="pop" nameOfArray={this.state.nameOfArray}
                                    myFunction={() => this.popArray()}
                                    description="Usuwa ostatni element tablicy, zwracając jego wartość"/>

                    <ArrayFunctions myArrayIs={this.state.currentArray} name="shift"
                                    nameOfArray={this.state.nameOfArray}
                                    myFunction={() => this.shiftArray()}
                                    description="Usuwa pierwszy element tablicy, zwracając jego wartość"/>
                </div>
                <div className="row">
                    <ArrayFunctions myArrayIs={this.state.currentArray} name="reverse"
                                    nameOfArray={this.state.nameOfArray}
                                    myFunction={() => this.reverseArray()}
                                    description="Odwraca kolejność elementów tablicy."/>

                    <ArrayFunctions myArrayIs={this.state.currentArray} name="fill" nameOfArray={this.state.nameOfArray}
                                    brackets="'lol'"
                                    myFunction={() => this.fillArray()}
                                    description="Zastępuje wszystkie elementy tablicy daną wartością. Przyjmuje: fill(value, start, end)"/>
                </div>
            </div>
        );

    }
}

export default ArrayChange;
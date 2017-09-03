import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Test1 from './some'

class App extends Component {
    render() {
        const array1 = [3, 10, 18, 20];
        const array2 = [3, 10, 15, 11];
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>

                <Test1 buttonName=".some()" check={array1}/>
                <Test1 buttonName=".some()" check={array2}/>
                <p id="demo" className="hide">what will it be?</p>

            </div>
        );
    }
}

export default App;

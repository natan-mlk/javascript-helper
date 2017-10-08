import React from 'react'

class ArrayFunctions extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            returnedValue: '???',
            arrayName: '[wybierz tablicę]'
        };
    }

    render() {
        return (
            <div className="array-functions">
                <p className="function-name">{this.props.nameOfArray}
                    <button className={'fire-function'}
                            onClick={() => this.setState({returnedValue: String(this.props.myFunction()), arrayName: this.props.nameOfArray})}>
                        .{this.props.name}( {this.props.brackets} )
                    </button>
                </p>
                <p>{this.props.description}</p>
                <p className="true-false">Dla {this.state.arrayName} metoda zwraca : {this.state.returnedValue}</p>
            </div>
        )
    }
}

export default ArrayFunctions
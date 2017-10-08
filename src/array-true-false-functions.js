import React from 'react'

class ArrayFunctions extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            trueOrFalse: 'true or false?',
            arrayName: '[wybierz tablicę]'
        };
    }

    render() {
        return (
            <div className="array-functions">
                <p className="function-name">{this.props.nameOfArray}
                    <button className={'fire-function'}
                            onClick={() => this.setState({trueOrFalse: this.props.myFunction(), arrayName: this.props.nameOfArray})}>
                        .{this.props.name}( {this.props.brackets} )
                    </button>
                </p>
                <p>{this.props.description}</p>
                <p className="true-false">Dla {this.state.arrayName} metoda zwraca :
                    <span className="outcome">{this.state.trueOrFalse}</span></p>
            </div>
        )
    }
}

export default ArrayFunctions
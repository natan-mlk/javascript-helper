import React from 'react'

class ArrayFunctions extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isActive: '',
            trueOrFalse: 'true or false?',
            arrayName: ''
        };
    }

    render() {
        return (
            <div className="array-functions">
                <p className="function-name">{this.props.nameOfArray}
                    <button className={this.state.isActive + ' fire-function'}
                            onClick={() => this.setState({trueOrFalse: this.props.myFunction(), arrayName: this.props.nameOfArray})}>
                        .{this.props.name}( {this.props.brackets} )
                    </button>
                </p>
                <p>{this.props.description}</p>
                <p className="true-false">{this.state.arrayName} : {this.state.trueOrFalse}</p>
            </div>
        )
    }
}

export default ArrayFunctions
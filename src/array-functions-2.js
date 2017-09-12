import React from 'react'

class ArrayFunctions2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isActive: ''
        };
    }

    render() {

        return (
            <div className="array-functions">
                <p className="function-name">{this.props.nameOfArray}
                    <button className={this.state.isActive + ' fire-function'}
                            onClick={this.props.myFunction}>.{this.props.name}( {this.props.brackets} )</button>
                </p>
                <p>{this.props.description}</p>
                <p className="true-false">{this.props.trueOrFalse}</p>
            </div>
        )
    }
}
export default ArrayFunctions2
import React from 'react'

class ArrayFunctions extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            arrayName: ''
        };
    }

    render() {
        return (
            <div className="array-functions">
                <p className="function-name">{this.props.nameOfArray}
                    <button className={'fire-function'}
                            onClick={() => this.props.myFunction()}>
                        .{this.props.name}( {this.props.brackets} )
                    </button>
                </p>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

// TO MOŻE BYC DUMB COMPONENTEM !!!!!!!!!!!!!!!!!

export default ArrayFunctions
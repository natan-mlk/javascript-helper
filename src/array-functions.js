import React from 'react'

class ArrayFunctions extends React.Component {

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
                            onClick={this.props.myFunction}>.{this.props.name}()</button>
                </p>
                <p>{this.props.description}</p>
            </div>
        )
    }
}
export default ArrayFunctions
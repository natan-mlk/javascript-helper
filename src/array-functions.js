import React from 'react'

class ArrayFunctions extends React.Component {

    render() {

        return (
            <div className="array-functions">
                <p className="function-name">{this.props.nameOfArray}
                    <button className="fire-function" onClick={this.props.myFunction}>.{this.props.name}()</button>
                </p>
                <p>{this.props.description}</p>
            </div>
        )
    }
}
export default ArrayFunctions
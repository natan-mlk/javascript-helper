import React from 'react'

class ArrayFunctions extends React.Component {

    render() {

        return (
            <div>
                {/*<p>My array is : numbers = [{this.props.myArrayIs.map((arg) => arg + ", ")}]</p>*/}
                <p>{this.props.nameOfArray}
                    <button onClick={this.props.myFunction}>.{this.props.name}()</button>
                </p>
                <p></p>
            </div>
        )
    }
}
export default ArrayFunctions
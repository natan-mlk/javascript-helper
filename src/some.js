import React from 'react';


class Test1 extends React.Component {

    render() {
        const propsedArray = this.props.check;

        function checkAdult(arg) {
            return arg >= 18;
        }

        return (
            <div>
                <p>var numbers = [{propsedArray.map((arg) => arg + ", ")}]</p>
                <span>numbers <button onClick={function myFunction() {
                    document.getElementById("demo").innerHTML = propsedArray.some(checkAdult);
                }}>{this.props.buttonName}</button></span>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

export default Test1


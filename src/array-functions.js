import React from 'react'

class ArrayFunctions extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isActive: ''
        };
    }

    // onLinkClicked(event) {
    //     event.preventDefault();
    //     this.setState({ isActive: 'active' });
    // }  () => {this.setState({isActive: 'active'});


    _handleClick (){
        this.setState({ isActive: 'active' }, function() {
            return this.props.myFunction;
        });

    }


    render() {

        return (
            <div className="array-functions">
                <p className="function-name">{this.props.nameOfArray}
                    <button className={this.state.isActive + ' fire-function'}
                            onClick={this._handleClick.bind(this)}>.{this.props.name}()</button>
                </p>
                <p>{this.props.description}</p>
            </div>
        )
    }
}
export default ArrayFunctions
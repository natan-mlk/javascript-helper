import React from 'react'

class ArrayFunctions extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isActive: '',
            trueOrFalse: ''
        };
    }


    componentDidMount() {
        this.setState({
            trueOrFalse: this.props.trueOrFalse
        });
    }

    componentWillReceiveProps() {
        this.setState(() => {
                return {
                    isActive: 'active',
                    trueOrFalse: this.props.trueOrFalse
                };
            }
        );
    }

    handleClick() {
        this.props.myFunction();

        console.log(this.state.trueOrFalse);
    }

    render() {

        return (
            <div className="array-functions">
                <p className="function-name">{this.props.nameOfArray}
                    <button className={this.state.isActive + ' fire-function'}
                            onClick={() => this.handleClick()}>.{this.props.name}( {this.props.brackets} )
                    </button>
                </p>
                <p>{this.props.description}</p>
                <p className="true-false">{this.state.trueOrFalse}</p>
            </div>
        )
    }
}
export default ArrayFunctions
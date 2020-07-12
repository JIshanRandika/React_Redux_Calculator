import React from 'react';
import '../css/index.css';
import FinalResult from './FinalResult';
import KeyPad from './KeyPad';

class CalculatorApp extends React.Component {

    render() {
        return (
            <fieldset>
                <FinalResult inputExpression={this.props.inputExpression} />
                <KeyPad onClick={this.props.onClick}
                        onSubmit={() => { this.props.onSubmit(); }} />
            </fieldset>
        );
    }
}

export default CalculatorApp;
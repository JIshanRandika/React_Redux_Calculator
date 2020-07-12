import { connect } from 'react-redux';
import { getDisplayAction, getEvaluateAction } from "../actionCreator/actionCreator";
import CalculatorApp from '../components/CalculatorApp';
import { isSuffixAnOperator, validateInput } from '../validations/validator';


let storeState = '';

const evaluateExpression = (dispatch) => {
    if (!isSuffixAnOperator(storeState.toString())) {
        dispatch(getEvaluateAction(storeState)); // 
    }
}


const mapStateToProps = (state) => {
    storeState = state;
    return {
        inputExpression: state
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (text) => {
            let input = storeState.toString();
            input = validateInput(input, text);
            console.log(input);
            dispatch(getDisplayAction(input));
        },
        onSubmit: () => {
            evaluateExpression(dispatch);
        }
    };
};

export const CalculatorContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CalculatorApp);
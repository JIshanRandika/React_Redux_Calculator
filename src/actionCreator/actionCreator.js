import { DISPLAY, EVALUATE } from '../actions/actions';

export const getDisplayAction = (input) => {
    return {
        type: DISPLAY,
        text: input
    }
};

export const getEvaluateAction = (input) => {
    return {
        type: EVALUATE,
        text: input
    }
};
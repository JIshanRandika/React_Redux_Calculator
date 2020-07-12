export const evaluateResult = (state = '0', action) => {
    let newState = action.text;
    switch (action.type) {
        case 'EVALUATE':
            return eval(newState).toString();
        case 'DISPLAY':
            return newState;
        default:
            return state;
    }
};

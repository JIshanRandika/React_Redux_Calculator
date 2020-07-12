const operators = ["+", "-", "*", "/"];

export const isSuffixAnOperator = (str) => {
    return operators.some((operator) => (str.endsWith(operator)));
};

const isSuffixZero = (input) => {
    return input.charAt(input.length - 1) === '0';
};

const replaceCharacter = (inputString, newCharacter) => {
    return inputString.slice(0, inputString.length - 1) + newCharacter;
};

export const validateInput = (input, text) => {
    if (input === 'Infinity' || (input.length === 1 &&
        (input.charAt(0) === '0' || isSuffixAnOperator(input.charAt(0))))) {
        input = '';
    }
    switch (text) {
        case "delete":
            if (input.length === 1) {
                input = '0';
            } else {
                input = input.slice(0, input.length - 1);
            }
            break;
        case "clear":
            input = '0';
            break;
        default:
            if (isSuffixAnOperator(input)) {
                if (isSuffixAnOperator(text)) {
                    return replaceCharacter(input, text);
                }
            } else if (isSuffixZero(input)) {
                if (isSuffixAnOperator(input.charAt(input.length - 2))) {
                    return replaceCharacter(input, text);
                }
            }
            input += text;
    }
    return input;
};
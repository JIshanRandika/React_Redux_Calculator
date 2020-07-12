import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { CalculatorContainer } from './containers/CalculatorContainer';
import { evaluateResult } from "./redusers/reducer";


const store = createStore(evaluateResult);

const renderCalculator = () => {
    render(
        <Provider store={store} >
            <CalculatorContainer />
        </Provider>, document.getElementById('root')
    );
}

store.subscribe(() => {
    renderCalculator();
});

renderCalculator();

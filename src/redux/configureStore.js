import {createStore, combineReducers, applyMiddleware } from 'redux';
// import { createForms } from 'react-redux-form';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Staffs } from './staffs'
// import { InitialFeedback } from './forms';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            staffs: Staffs,
            /* ...createForms({
                feedback: InitialFeedback
            }) */
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}
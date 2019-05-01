import * as actionTypes from '../Actions/actionTypes';

const defaultState = () => ({
    errorOccured: false,
    errorMessage: ''
});

const controllReducer = (state = defaultState(), action) => {
    switch (action.type) {
        case actionTypes.ERROR_MESSAGE_RECEIVED:
            return {
                ...state
            }

        case actionTypes.CONTROLL_MESSAGE_RECEIVED:
            return {
                ...state,
            }

        default:
            return state;
    }
};

export default controllReducer;
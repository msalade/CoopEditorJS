import * as actionTypes from './actionTypes';

export const hideErrorInfo = state => (dispatch, getState, sendMessage) => {
    dispatch({
        type: actionTypes.HIDE_ERROR_INFO
    });
};

export const showError = error => (dispatch, getState, sendMessage) => {
    dispatch({
        type: actionTypes.SOCKET_ERROR_OCCURED, errorMessage: error
    });
};
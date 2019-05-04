import * as actionTypes from './actionTypes';

export const hideErrorInfo = state => (dispatch, getState, sendMessage) => {
    dispatch({
        type: actionTypes.HIDE_ERROR_INFO
    });
};
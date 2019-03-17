import * as actionTypes from '../Reducers/actionTypes';

export const updateExample = (example = '') => (dispatch, getState) => {
    dispatch({
        type: actionTypes.UPDATE_EDITOR_STATE,
        example: example
    });
};
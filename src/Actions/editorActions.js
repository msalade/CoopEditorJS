import * as actionTypes from './actionTypes';

export const getRawHtml = (code) => (dispatch, getState, sendMessage) => {
    return `<div><style>${code.CssCode}</style><div>${code.HtmlCode}</div></div>`
}

export const updateEditorState = state => (dispatch, getState, sendMessage) => {
    dispatch({
        type: actionTypes.UPDATE_EDITOR_STATE,
        ...state
    });
};
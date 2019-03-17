import * as actionTypes from '../Reducers/actionTypes';

export const updateExample = (example = '') => (dispatch, getState) => {
    dispatch({
        type: actionTypes.UPDATE_EDITOR_STATE,
        example: example
    });
};

export const connectToEditor = (onmessage = ({ data }) => { }) => (dispatch, getState) => {
    const socket = new WebSocket('ws://localhost:5000/editor');
    socket.onmessage = onmessage;
    return socket;
}
export const getRawHtml = (code) => (dispatch, getState) => {
    return `<div><style>${code.CssCode}</style><div>${code.HtmlCode}</div></div>`
}
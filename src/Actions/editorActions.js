import * as actionTypes from './actionTypes';

export const updateExample = (example = '') => (dispatch, getState, sendMessage) => {
    dispatch({
        type: actionTypes.UPDATE_EDITOR_STATE,
        example: example
    });
};

export const connectToEditor = (onmessage = ({ data }) => { }) => (dispatch, getState, sendMessage) => {
    const socket = new WebSocket('ws://localhost:5000/editor');
    socket.onmessage = onmessage;
    return socket;
}
export const getRawHtml = (code) => (dispatch, getState, sendMessage) => {
    return `<div><style>${code.CssCode}</style><div>${code.HtmlCode}</div></div>`
}
import * as actionTypes from './actionTypes';
import { CodeMessage, JHSMessage, ChatMessage, ControllMessage } from '../Tools/messages';
import { commandsTypes } from '../Entities/commandsTypes';

export const sendCodeMessage = (code = '') => (dispatch, getState, { sendMessage }) => {
    const { editor: { languageType, user, roomId } } = getState();
    sendMessage(CodeMessage(code, languageType, roomId, user));
};

export const sendJSHMessage = (code = { CssCode: '', HtmlCode: '', JsCode: '' }) => (dispatch, getState, { sendMessage }) => {
    const { editor: { user, roomId } } = getState();
    sendMessage(JHSMessage(code, roomId, user));
};

export const sendChatMessage = (message = '') => (dispatch, getState, { sendMessage }) => {
    const { editor: { user, roomId } } = getState();
    sendMessage(ChatMessage(message, roomId, user));
};

export const sendControllMessage = (message = '', commandType = commandsTypes.CreateRoom) => (dispatch, getState, { sendMessage }) => {
    const { editor: { user, roomId } } = getState();
    sendMessage(ControllMessage(message, commandType, roomId, user));
};

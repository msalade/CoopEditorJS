import * as actionTypes from './actionTypes';
import { CodeMessage, JHSMessage, ChatMessage } from '../Tools/messages';

export const sendCodeMessage = (code = '') => (dispatch, getState, { sendMessage }) => {
    const { editor: { languageType, user, roomId} } = getState();
    sendMessage(CodeMessage(code, languageType, roomId, user ));
};

export const sendJSHMessage = (code = { CssCode: '', HtmlCode: '', JsCode: '' }) => (dispatch, getState, { sendMessage }) => {
    const { editor: { languageType, user, roomId} } = getState();
    sendMessage(JHSMessage(code, languageType, roomId, user ));
};

export const sendChatMessage = (message = '') => (dispatch, getState, { sendMessage }) => {
    const { editor: { languageType, user, roomId} } = getState();
    sendMessage(ChatMessage(message, languageType, roomId, user ));
};
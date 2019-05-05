import ReconnectingWebSocket from 'reconnecting-websocket';

import { SOCKET_ERROR_OCCURED, SOCKET_STATUS_CHANGED, HIDE_ERROR_INFO } from './actionTypes';
import { getErrorDescription } from '../Tools/error';

const socket = new ReconnectingWebSocket('ws://localhost:5000/editor');

export const initSocketListner = store => {
  socket.onopen = () => {
    store.dispatch({ type: SOCKET_STATUS_CHANGED, isSocketConnected: true });
    store.dispatch({ type: HIDE_ERROR_INFO });
  }

  socket.onmessage = ({ data }) => {
    const message = JSON.parse(data);
    !!message.Type && store.dispatch({ type: `${message.Type.toUpperCase()}_MESSAGE_RECEIVED`, message: message });
  }

  socket.onerror = () => store.dispatch({ type: SOCKET_ERROR_OCCURED, errorMessage: 'WebSocket error occured' });

  socket.onclose = ({ code }) => {
    store.dispatch({ type: SOCKET_ERROR_OCCURED, errorMessage: getErrorDescription(code) });
    store.dispatch({ type: SOCKET_STATUS_CHANGED, isSocketConnected: false });
  }
};

export const sendMessage = message => socket.send(message);
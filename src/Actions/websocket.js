import ReconnectingWebSocket from 'reconnecting-websocket';
import { ERROR_MESSAGE_RECEIVED } from './actionTypes';

const socket = new ReconnectingWebSocket('ws://localhost:5000/editor');

export const initSocketListner = store => {
  socket.onmessage = ({ data }) => {
    const message = JSON.parse(data);
    !!message.type && store.dispatch({ type: `${message.type.toUpperCase()}_MESSAGE_RECEIVED`, message: data });
  }

  socket.onerror = ({ data }) => {
    store.dispatch({ type: ERROR_MESSAGE_RECEIVED, message: data });
  }

  socket.onclose = () => {
    console.log('Closing socket !')
  }
};

export const sendMessage = message => socket.send(message);
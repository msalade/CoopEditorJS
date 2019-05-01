import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import editorReducer from './editorReducer';
import { sendMessage, initSocketListner } from '../Actions/websocket';

const rootReducer = combineReducers({
    editor: editorReducer
});

const extraMiddlewares = thunk.withExtraArgument({ sendMessage });

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(
            extraMiddlewares
        )
    )
);

initSocketListner(store);

export default store;
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import editorReducer from './editorReducer';

const rootReducer = combineReducers({
    editor: editorReducer
});

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(
            thunk
        )
    )
);

export default store;
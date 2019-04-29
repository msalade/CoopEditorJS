import * as actionTypes from './actionTypes';

const defaultState = () => ({
    example: 'example'
});

const editorReducer = (state = defaultState(), action) => {
    switch (action.type) {
        case actionTypes.UPDATE_EDITOR_STATE:
            return {
                ...state,
                example: action.example
            }
            
        default:
            return state;
    }
};

export default editorReducer;
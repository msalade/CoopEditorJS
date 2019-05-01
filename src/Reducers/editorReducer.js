import * as actionTypes from '../Actions/actionTypes';

const defaultState = () => ({
    example: 'example',
    languageType: 'JS',
    roomId: undefined,
    user: {
        nick: '',
        id: ''
    },
    code: '',
    JSCCode: {
        JsCode: '',
        CssCode: '',
        HtmlCode: ''
    },
    chat: []
});

const editorReducer = (state = defaultState(), action) => {
    switch (action.type) {
        case actionTypes.UPDATE_EDITOR_STATE:
            return {
                ...state,
                example: action.example
            }
        
        case actionTypes.CODE_MESSAGE_RECEIVED: 
            return {
                ...state, 
                code: action.message.content || ''
            }
        
        case actionTypes.JHS_MESSAGE_RECEIVED: {
            const code = JSON.parse(action.message);

            return {
                ...state,
                JSCCode: {
                    JsCode: code.JsCode || '',
                    CssCode: code.CssCode || '',
                    HtmlCode: code.HtmlCode || ''
                }
            }
        }
            
        case actionTypes.CHAT_MESSAGE_RECEIVED: 
            return {
                ...state,
                chat: [...state.chat, { content: action.content || '', nick: action.user.nick || Math.random().toString(36).substring(7) }]
            }

        default:
            return state;
    }
};

export default editorReducer;
import * as actionTypes from '../Actions/actionTypes';

const defaultState = () => ({
    languageType: 'javascript',
    fontSize: 14,
    roomId: undefined,
    user: {
        nick: '',
        id: null
    },
    code: '',
    JSHCode: {
        JsCode: '',
        CssCode: '',
        HtmlCode: ''
    },
    chat: [],
    roomsList: [],
    isSocketConnected: false
});

const editorReducer = (state = defaultState(), action) => {
    switch (action.type) {
        case actionTypes.UPDATE_EDITOR_STATE:
            return {
                ...state,
                ...action
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

        case actionTypes.SOCKET_STATUS_CHANGED:
            return {
                ...state,
                isSocketConnected: action.isSocketConnected
            }

        default:
            return state;
    }
};

export default editorReducer;
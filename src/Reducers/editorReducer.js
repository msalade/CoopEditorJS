import * as actionTypes from '../Actions/actionTypes';
import { commandsTypes } from '../Entities/commandsTypes';

const defaultState = () => ({
    languageType: 'javascript',
    fontSize: 14,
    roomId: undefined,
    user: {
        nick: '',
        id: localStorage.getItem('userId') || null
    },
    code: '',
    JCHCode: {
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
        
        case actionTypes.CODE_MESSAGE_RECEIVED: {
            if (action.message.LanguageType === 'JCH') {
                return {
                    ...state, 
                    JCHCode: JSON.parse(action.message.Content)
                }
            } else {
                return {
                    ...state, 
                    code: action.message.Content || ''
                }
            }
        }
            
        case actionTypes.CHAT_MESSAGE_RECEIVED: 
            return {
                ...state,
                chat: [...state.chat, action.message.Content]
            }

        case actionTypes.SOCKET_STATUS_CHANGED:
            return {
                ...state,
                isSocketConnected: action.isSocketConnected
            }

        case actionTypes.CONTROL_MESSAGE_RECEIVED: {
            const { message: { CommandType, Content } } = action;

            switch(CommandType) {
                case commandsTypes.UpdateInformation: {
                    const { RoomId, Rooms, UserId } = JSON.parse(Content);
                    localStorage.setItem('userId', UserId);

                    return {
                        ...state,
                        roomsList: Rooms,
                        roomId: RoomId,
                        user: {
                            ...state.user,
                            id: UserId
                        }
                    }
                }

                case commandsTypes.ChangeCodeType: {
                    return {
                        ...state, 
                        languageType: Content
                    }
                }

                default: 
                    return {
                        ...state
                    }
            }
        }

        default:
            return state;
    }
};

export default editorReducer;
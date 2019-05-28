import { MessageType } from '../Entities/messageTypes';
import { LanguagesTypes } from '../Entities/languagesTypes';
import { commandsTypes } from '../Entities/commandsTypes';

const user = {
    nick: '',
    id: ''
};

export const ChatMessage = (message = '', roomId = undefined, user = user) => ({
    type: MessageType.Chat,
    user,
    roomId,
    content: {
        Content: message,
        UserName: user.nick,
        UserId: user.id
    }
});

export const CodeMessage = (code = '', LanguageType = LanguagesTypes.JS, roomId = undefined, user = user) => ({
    type: MessageType.Code,
    user,
    roomId,
    LanguageType,
    content: code
});

export const ControllMessage = (message = '', commandType = commandsTypes.CreateRoom, roomId = undefined, user = user) => ({
    type: MessageType.Control,
    user,
    roomId,
    commandType,
    content: message
});

export const ErrorMessage = (error = '', roomId = undefined, user = user) => ({
    type: MessageType.Error,
    user,
    roomId,
    content: error
});
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Bar, ChatWrapper, ChatContent, InputWrapper, Message } from './Components';
import { MenuButton } from '../../StyleHelpers/Components';

import * as messageActions from '../../Actions/messageActions';

class Chat extends Component {
    state = {
        expand: false,
        message: ''
    }

    onBarClick = () => this.setState(currentState => ({ expand: !currentState.expand }));

    onSendClick = () => {
        this.props.sendChatMessage(this.state.message);
        this.setState({ message: '' });
    }

    onInputChange = ({ target: { value, name }}) => this.setState({ [name]: value });

    render() {
        const { expand, message } = this.state;
        const { chat, user: { id } } = this.props;
 
        return (
            <ChatWrapper>
               {expand ? (
                    <>
                        <Bar onClick={this.onBarClick}>Chat</Bar>
                        <ChatContent>
                            {(chat || []).map(({ UserId, Content, UserName, CreationDate }) => (
                                <Message my={id === UserId}>
                                    {/* <h6>{`${UserName} - ${CreationDate}`}</h6> */}
                                    <label>{Content}</label>
                                </Message>
                            ))}
                        </ChatContent>
                        <InputWrapper>
                            <input name="message" value={message} onChange={this.onInputChange} />
                            <MenuButton onClick={this.onSendClick}>Send</MenuButton>
                        </InputWrapper>
                    </>
                ) : (
                    <Bar onClick={this.onBarClick}>Chat</Bar>
                )}
            </ChatWrapper>
        );
    }
}

export default connect(
    state => ({
        ...state.editor
    }), {
        ...messageActions
    }
)(Chat);
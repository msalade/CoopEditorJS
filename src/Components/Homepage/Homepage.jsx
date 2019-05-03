import React, { Component } from 'react';
import { connect } from 'react-redux';
import Popup from "reactjs-popup";

import { MainForm, MainWrapper, HalfSection, HalfSectionScroll, Title, ErrorMsg, PopUpWrapper, ButtonWrapper } from './Componets';
import { MenuButton } from '../../StyleHelpers/Components';

import Room from './Room';
import * as messageActions from '../../Actions/messageActions';
import * as editorActions from '../../Actions/editorActions';
import { commandsTypes } from '../../Entities/commandsTypes';

class Homepage extends Component {
    state = {
        roomName: ''
    }

    onJoinClick = (id, type) => {
        const { history, sendControllMessage, updateEditorState } = this.props;
        const route = type === 'JSC' ? `/jch-editor/${id}` : `/editor/${id}`; 

        sendControllMessage('', commandsTypes.JoinToRoom);
        updateEditorState({ roomId: id });
        history.push(route);
    }

    constCreateRoom = () => (
        <MenuButton>Create new room</MenuButton>
    );

    onInputChange = ({ target: { value, name } }) => this.setState({ [name]: value });

    onStandardRoomClick = () => {
        const { history, sendControllMessage, updateEditorState } = this.props;
        const id = '';
        sendControllMessage('', commandsTypes.CreateRoom);
        updateEditorState({ roomId: id });
        history.push(`/editor/${id}`);
    }

    onJSHRoomClick = () => {
        const { history, sendControllMessage, updateEditorState } = this.props;
        const id = '';
        sendControllMessage('', commandsTypes.CreateRoom);
        updateEditorState({ roomId: id });
        history.push(`/jch-editor/${id}`);
    }

    render() {
        const { roomsList } = this.props;

        return (
            <MainWrapper>
                <MainForm>
                    <HalfSection>
                        <Title>Create room or join to existing one.</Title>
                        <Popup trigger={this.constCreateRoom} modal>
                            {cancel => (
                                <PopUpWrapper>
                                    <div>
                                        <h3>Enter room name:</h3>
                                        <input name="roomName" onChange={this.onInputChange} />
                                    </div>
                                    <ButtonWrapper>
                                        <MenuButton onClick={this.onStandardRoomClick}>Standard room</MenuButton>
                                        <MenuButton onClick={this.onJSHRoomClick}>JS + CSS + HTML room</MenuButton>
                                        <MenuButton className="cancel-button" onClick={() => cancel()}>Cancel</MenuButton>
                                    </ButtonWrapper>
                                </PopUpWrapper>
                            )}
                        </Popup>
                    </HalfSection>
                    {roomsList && roomsList.length > 0 ? (
                        <HalfSectionScroll>
                            {roomsList.map(({ name, id, type }) => (
                                <Room name={name} key={id} onJoinClick={this.onJoinClick} id={id} type={type} />
                            ))}
                        </HalfSectionScroll>
                    ) : (
                        <HalfSection>
                            <ErrorMsg>No room found</ErrorMsg>
                        </HalfSection>
                    )}
                </MainForm>
            </MainWrapper>
        );
    }
}

export default connect(
    state => ({
        ...state.editor
    }), {
        ...messageActions,
        ...editorActions
    }
)(Homepage)
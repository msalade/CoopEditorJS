import React, { Component } from 'react';
import { connect } from 'react-redux';
import Popup from "reactjs-popup";

import { MainForm, MainWrapper, HalfSection, HalfSectionScroll, Title, ErrorMsg, PopUpWrapper, ButtonWrapper } from './Componets';
import { MenuButton } from '../../StyleHelpers/Components';

import CradleLoader from '../Loader/CradleLoader';
import Room from './Room';
import InfoLayout from '../InfoLayout/InfoLayout';
import * as messageActions from '../../Actions/messageActions';
import * as editorActions from '../../Actions/editorActions';
import * as controllActions from '../../Actions/controllActions';
import { commandsTypes } from '../../Entities/commandsTypes';

class Homepage extends Component {
    state = {
        roomName: ''
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const { isSocketConnected, sendControllMessage } = this.props;

        if (isSocketConnected && isSocketConnected !== prevProps.isSocketConnected) {
            sendControllMessage('', commandsTypes.UpdateInformation);
        }
    }

    onJoinClick = (id, type) => {
        const { history, updateEditorState } = this.props;
        const route = type === 'JCH' ? `/jch-editor/${id}` : `/editor/${id}`; 

        updateEditorState({ roomId: id, languageType: type });
        history.push(route);
    }

    constCreateRoom = () => (
        <MenuButton disabled={!this.props.isSocketConnected}>Create new room</MenuButton>
    );

    onInputChange = ({ target: { value, name } }) => this.setState({ [name]: value });

    onStandardRoomClick = () => {
        const { history, sendControllMessage } = this.props;
        
        sendControllMessage(this.state.roomName, commandsTypes.CreateRoom);
        history.push(`/editor/`);
    }

    onJSHRoomClick = () => {
        const { history, sendControllMessage } = this.props;
        
        sendControllMessage(this.state.roomName, commandsTypes.CreateRoom);
        history.push(`/jch-editor/`);
    }

    closeInfo = () => this.props.hideErrorInfo();

    render() {
        const { roomsList, isSocketConnected, errorOccured, errorMessage } = this.props;
        const { roomName } = this.state;

        return (
            <MainWrapper>
                <InfoLayout showInfo={errorOccured} info={errorMessage} closeInfo={this.closeInfo}>
                    <MainForm>
                        <HalfSection>
                            <Title>Create room or join to existing one.</Title>
                            <Popup trigger={this.constCreateRoom} disabled={!isSocketConnected} modal>
                                {cancel => (
                                    <PopUpWrapper>
                                        <div>
                                            <h3>Enter room name:</h3>
                                            <input placeholder="Room name" name="roomName" onChange={this.onInputChange} value={roomName} />
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
                                {roomsList.map(({ Name, Id, TypeCode }) => (
                                    <Room name={Name} key={Id} onJoinClick={this.onJoinClick} id={Id} type={TypeCode} />
                                ))}
                            </HalfSectionScroll>
                        ) : (
                            <HalfSection>
                                <CradleLoader loading={!isSocketConnected} label="Loading rooms list...">
                                    <ErrorMsg>No room found</ErrorMsg>
                                </CradleLoader>
                            </HalfSection>
                        )}
                    </MainForm>
                </InfoLayout>
            </MainWrapper>
        );
    }
}

export default connect(
    state => ({
        ...state.editor,
        ...state.controll
    }), {
        ...messageActions,
        ...editorActions,
        ...controllActions
    }
)(Homepage)
import React, { Component } from 'react';

import { RoomWrapper } from './Componets';
import { MenuButton } from '../../StyleHelpers/Components';

class Room extends Component {
    onJoinClick = () => this.props.onJoinClick(this.props.id, this.props.type);

    render() {
        const { name, type } = this.props;

        return (
            <RoomWrapper>
                <h4>{`${name} - ${type}`}</h4>
                <MenuButton onClick={this.onJoinClick}>JOIN</MenuButton>
            </RoomWrapper>
        );
    }
};

export default Room;
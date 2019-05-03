import React, { Component } from 'react';

import { RoomWrapper } from './Componets';
import { MenuButton } from '../../StyleHelpers/Components';

class Room extends Component {
    onJoinClick = () => this.props.onJoinClick(this.props.id);

    render() {
        const { name } = this.props;

        return (
            <RoomWrapper>
                <h4>{name}</h4>
                <MenuButton onClick={this.onJoinClick}>JOIN</MenuButton>
            </RoomWrapper>
        );
    }
};

export default Room;
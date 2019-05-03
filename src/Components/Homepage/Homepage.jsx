import React, { Component } from 'react';
import { connect } from 'react-redux';

import { MainForm, MainWrapper, HalfSection, HalfSectionScroll, Title, ErrorMsg } from './Componets';
import { MenuButton } from '../../StyleHelpers/Components';

import Room from './Room';
import * as messageActions from '../../Actions/messageActions';

class Homepage extends Component {
    state = {
        list: [
            'element',
            'element',
            'element',
            'element',
            'element',
            'element',
            'element',
            'element',
            'element',
            'element',
            'element',
            'element',
            'element',
            'element',
            'element',
            'element',
        ]
    }

    onJoinClick = id => {
        console.log(id);
    }

    render() {
        const { list } = this.state;

        return (
            <MainWrapper>
                <MainForm>
                    <HalfSection>
                        <Title>Create room or join to existing one.</Title>
                        <MenuButton>Create new room</MenuButton>
                    </HalfSection>
                    {list && list.length > 0 ? (
                        <HalfSectionScroll>
                            {list.map(element => <Room name={element} onJoinClick={this.onJoinClick} id="id" />)}
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
        ...messageActions
    }
)(Homepage)
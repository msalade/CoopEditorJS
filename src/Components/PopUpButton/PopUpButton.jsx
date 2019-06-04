import React from 'react';
import Popup from "reactjs-popup";

import { ButtonWrapper, PopUpWrapper } from './Components';
import { MenuButton } from '../../StyleHelpers/Components';

const PopUpButton = ({ onDeleteRoomClick, isSocketConnected }) => {
    const constCreateRoom = () => (
        <MenuButton className="action">DELETE ROOM</MenuButton>
    );

    return (
        <Popup trigger={constCreateRoom} disabled={!isSocketConnected} modal>
            {cancel => (
                <PopUpWrapper>
                    <div>
                        <h3>Are you sure you want to delete this room?</h3>
                    </div>
                    <ButtonWrapper>
                        <MenuButton className="cancel-button" onClick={onDeleteRoomClick}>DELETE</MenuButton>
                        <MenuButton onClick={() => cancel()}>CANCEL</MenuButton>
                    </ButtonWrapper>
                </PopUpWrapper>
            )}
        </Popup>
    );
}

export default PopUpButton;
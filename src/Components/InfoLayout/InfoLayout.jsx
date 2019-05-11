import React from 'react';

import { InfoWrapper } from './Components';
import { MenuButton } from '../../StyleHelpers/Components';

const InfoLayout = props => {
    return (
        <>
            {props.showInfo && <InfoWrapper><h3>{props.info}</h3> <MenuButton onClick={props.closeInfo}>CLOSE</MenuButton></InfoWrapper>}
            {props.children}
        </>
    );
}

export default InfoLayout;
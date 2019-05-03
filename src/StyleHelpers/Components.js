import styled from 'styled-components';
import ColorStack from './ColorsStack';

export const MenuButton = styled.button`
    margin: 2px;
    padding: 10px;
    border-radius: 2px;    
    text-decoration: none;
    display: inline-block;
    border: none;
    color: ${props => props.active ? ColorStack.black : ColorStack.white};
    background: ${props => props.active ? ColorStack.white : ColorStack.activeButton};
    cursor: pointer;
`;
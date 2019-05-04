import styled from 'styled-components';
import ColorStack from '../../StyleHelpers/ColorsStack';

export const Bar = styled.div`
    height: 20px;
    background-color: ${ColorStack.darkBlue};
    padding: 5px;
    text-align: left;
    border-radius: 10px 10px 0 0;
`;

export const ChatWrapper = styled.div`
    position: fixed;
    z-index: 10;
    bottom: 0;
    right: 0;
    margin-right: 30px;
    width: 300px;
`;

export const ChatContent = styled.div`
    height: 300px;
    padding: 0 10px;
    background-color: ${ColorStack.ligthBlue};
    overflow: auto;
    display: flex;
    flex-direction: column;
`;

export const InputWrapper = styled.div`
    border-top: solid 2px ${ColorStack.black};
    background-color: ${ColorStack.darkBlue};
    display: flex;
    justify-content: space-between;
    padding: 5px;
`;

export const Message = styled.div`
    margin: 10px 0;
    background-color: ${ColorStack.darkBlue};
    border: ${props => props.my ? `solid 2px ${ColorStack.black}` : 'none'};
    border-radius: 20px;
    padding: 10px;
    max-width: 200px;
    word-break: break-word;
    align-self: ${props => props.my ? 'flex-end' : 'flex-start'};
`;
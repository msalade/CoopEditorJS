import styled from 'styled-components';
import ColorStack from '../../StyleHelpers/ColorsStack';

export const MainForm = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem 0;
`;

export const MainWrapper = styled.div`
    background: ${ColorStack.grayBackground};
    height: 100vh;
`;

export const HalfSectionScroll = styled.div`
    width: 300px; 
    height: 500px;
    overflow: auto;
`;

export const HalfSection = styled.div`
    width: 300px; 
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const RoomWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 280px;
`;

export const Title = styled.h3`
    margin-bottom: 2rem;
`;

export const ErrorMsg = styled.h4`
    color: ${ColorStack.red}
`;

export const ButtonWrapper = styled.div`
    display: flex;
    margin-top: 2rem;
`;

export const PopUpWrapper = styled.div`
    padding: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    .cancel-button {
        background-color: ${ColorStack.red};
    }
`;
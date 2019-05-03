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
    min-height: 790px;
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
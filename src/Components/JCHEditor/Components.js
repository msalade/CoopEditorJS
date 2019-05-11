import styled from 'styled-components';
import ColorStack from '../../StyleHelpers/ColorsStack';

export const FlexWrapper = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const MainWrapper = styled.div`
    background: ${ColorStack.grayBackground};
    min-height: 790px;
`;

export const Title = styled.h5`
    margin-top: 5px;
    margin-left: 10px;
    color: ${ColorStack.darkText};
`;
export const MenuWrapper = styled.div`
    padding: 20px;
    display: flex;
    justify-content: space-between;

    div {
        display: flex;
    }
    .action {
        background: ${ColorStack.red};
    }
`;

export const MenuButton = styled.button`
    margin: 2px;
    padding: 10px;
    border-radius: 2px;    
    text-decoration: none;
    display: inline-block;
    border: none;
    color: ${props => props.active ? ColorStack.black : ColorStack.white};
    background: ${props => props.active ? ColorStack.white : ColorStack.activeButton};
`;

export const EditorWrapper = styled.div`
    border: solid ${ColorStack.black};
    border-width: 1px;
    margin-left: 10px;
    margin-right: 10px;
`;

export const ResultWrapper = styled.div`
    padding: 15px;
    overflow: auto;

    .frame {
        min-height: 500px;
    }
`;
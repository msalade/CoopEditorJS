import styled from 'styled-components';
import ColorStack from '../../StyleHelpers/ColorsStack';

export const FlexWrapper = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const MainWrapper = styled.div`
    background: ${ColorStack.grayBackground};
    min-height: 790px;

    h5 {
        margin-top: 5px;
        color: ${ColorStack.darkText};
    }
`;

export const MenuWrapper = styled.div`
    padding: 20px;
    display: flex;
    justify-content: center;
`;

export const MenuButton = styled.button`
    margin: 5px;
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

    .frame {
        min-height: 500px;
    }
`;
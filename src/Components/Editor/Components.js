import styled from 'styled-components';
import ColorStack from '../../StyleHelpers/ColorsStack';

export const FlexWrapper = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const MainWrapper = styled.div`
    background: ${ColorStack.grayBackground};
    height: 100vh;
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

    .css-1pcexqc-container {
        width: 200px;
    }

    .css-kj6f9i-menu {
        z-index: 10;
    }
`;

export const EditorWrapper = styled.div`
    border: solid ${ColorStack.black};
    border-width: 1px;
    margin-left: 10px;
    margin-right: 10px;
`;

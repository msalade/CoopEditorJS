import styled from 'styled-components';
import ColorStack from '../../StyleHelpers/ColorsStack';

export const ButtonWrapper = styled.div`
    display: flex;
    margin-top: 2rem;
`;

export const PopUpWrapper = styled.div`
    padding: 3rem;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    .cancel-button {
        background-color: ${ColorStack.red};
    }
`;
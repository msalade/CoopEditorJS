import styled from 'styled-components';
import ColorStack from '../../StyleHelpers/ColorsStack';

export const DownloadButton = styled.button`
    margin: 2px;
    padding: 10px;
    border-radius: 2px;    
    text-decoration: none;
    display: inline-block;
    border: none;
    color: ${ColorStack.black};
    background: ${ColorStack.green};
    cursor: pointer;

    :disabled {
        background: ${ColorStack.disabledGray};
        cursor: not-allowed;
    }
`;
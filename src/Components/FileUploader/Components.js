import styled from 'styled-components';

export const FileInput = styled.input.attrs({
    type: 'file'
})`
    font-size: 100px;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    cursor: pointer;
`;

export const InputWrapper = styled.div`
    position: relative;
    overflow: hidden;
    display: inline-block;
`;
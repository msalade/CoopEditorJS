import React from 'react';

import { MenuButton } from '../../StyleHelpers/Components';
import { InputWrapper, FileInput } from './Components';

const FileUploader = ({ onFileLoad, buttonText, disabled }) => (
    <InputWrapper>
        <MenuButton disabled={disabled}>{buttonText || 'Upload code'}</MenuButton>
        <FileInput disabled={disabled} onChange={onFileLoad} />
    </InputWrapper>
);

export default FileUploader;
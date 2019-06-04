import React from 'react';
import Select from 'react-select';

import { MenuWrapper } from './Components';

import FileDownloader from '../FileDownloader/FileDownloader';
import FileUploader from '../FileUploader/FileUploader';
import PopUpButton from '../PopUpButton/PopUpButton';

const MenuBar = props => {
    const { 
        languages, onLanguageChange, fontSizes, onFontSizeChange, 
        selectedLanguage, languageType, editorContent, onUploadClick,
        isSocketConnected, deleteRoom
    } = props;

    return (
        <MenuWrapper>
            <Select label="Select language type" value={languages.find(lang => lang.value === selectedLanguage)} options={languages} onChange={onLanguageChange} />
            <FileDownloader data={editorContent} codeType={languageType} />
            <FileUploader onFileLoad={onUploadClick} disabled={!isSocketConnected} />
            <PopUpButton onDeleteRoomClick={deleteRoom} isSocketConnected={isSocketConnected} />
            <Select label="Select font size" defaultValue={fontSizes[0]} options={fontSizes} onChange={onFontSizeChange} />
        </MenuWrapper>
    )
}

export default MenuBar;
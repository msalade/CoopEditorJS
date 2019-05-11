import React from 'react';
import Select from 'react-select';

import { MenuWrapper } from './Components';

const MenuBar = props => {
    const { languages, onLanguageChange, fontSizes, onFontSizeChange, selectedLanguage, selectedSize } = props;

    return (
        <MenuWrapper>
            <Select label="Select language type" value={languages.find(lang => lang.value === selectedLanguage)} options={languages} onChange={onLanguageChange} />
            <Select label="Select font size" defaultValue={fontSizes[0]} options={fontSizes} onChange={onFontSizeChange} />
        </MenuWrapper>
    )
}

export default MenuBar;
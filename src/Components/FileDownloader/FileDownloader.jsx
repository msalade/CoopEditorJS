import React from 'react';
import FileSaver from 'file-saver';

import { DownloadButton } from './Components';

import { extensionHelper } from '../../Tools/fileExtension';

class FileDownloader extends React.Component {
    onDownloadClick = () => {
        const { data, codeType } = this.props;

        const blob = new Blob([data], {type: "text/plain;charset=utf-8"});
        FileSaver.saveAs(blob, `code.${extensionHelper[codeType] || 'txt'}`);
    }

    render() {
        const { data, buttonTitle } = this.props;

        return ( 
            <DownloadButton disabled={!data} onClick={this.onDownloadClick}>{buttonTitle || 'Download file'}</DownloadButton>
        );
    }
}
 
export default FileDownloader;
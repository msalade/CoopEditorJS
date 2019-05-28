import React, { Component } from 'react';
import { connect } from 'react-redux';
import AceEditor from 'react-ace';

import { FlexWrapper, MainWrapper, MenuWrapper, EditorWrapper, ResultWrapper, MenuButton, Title } from './Components';

import * as editorActions from '../../Actions/editorActions';
import * as controllActions from '../../Actions/controllActions';
import * as messageActions from '../../Actions/messageActions';
import CradleLoader from '../Loader/CradleLoader';
import InfoLayout from '../InfoLayout/InfoLayout';
import { commandsTypes } from '../../Entities/commandsTypes';
import Chat from '../Chat/Chat';
import FileDownloader from '../FileDownloader/FileDownloader';

import 'brace/mode/javascript';
import 'brace/mode/css';
import 'brace/mode/html';
import 'brace/snippets/html';
import 'brace/snippets/javascript';
import 'brace/snippets/css';
import 'brace/ext/language_tools';
import 'brace/theme/monokai';

class JCHEditor extends Component {
    resultRef = null;
    state = {
        resultCode: '',
        connectedToRoom: false
    }

    componentDidUpdate() {
        const { roomId, history, match: { params: { id } }, updateEditorState, sendControllMessage } = this.props;

        !!roomId && !id && history.replace(`/jch-editor/${roomId}`);
        !!id && !roomId && updateEditorState({ roomId: id, languageType: 'JCH' });
        !!roomId && !this.state.connectedToRoom && this.setState({ connectedToRoom: true }, () => {
            sendControllMessage('', commandsTypes.JoinToRoom);
            sendControllMessage('JCH', commandsTypes.ChangeCodeType);
        });
    }

    componentDidMount = () => this.props.sendControllMessage('JCH', commandsTypes.ChangeCodeType);

    onEditorChange = (value, name = 'JsCode') => {
        const { updateEditorState, JCHCode, sendCodeMessage } = this.props;
        const newCode = {
            ...JCHCode,
            [name]: value
        };
        
        updateEditorState({ JCHCode: newCode });
        sendCodeMessage(newCode);
    }

    onHtmlChange = value => this.onEditorChange(value, 'HtmlCode');

    onJSChange = value => this.onEditorChange(value);

    onCSSChange = value => this.onEditorChange(value, 'CssCode');

    runCode = () => {
        const { getRawHtml, JCHCode, showError } = this.props;
        JCHCode && this.setState({
            resultCode: getRawHtml(JCHCode)
        }, () => {
            try {
                JCHCode.JsCode && new Function(JCHCode.JsCode)();
                this.resultRef.scrollIntoView({ behavior: "smooth" });
            } catch (ex) {
                showError(ex.message);
            }
        });
    }

    closeInfo = () => this.props.hideErrorInfo();

    addResultRef = ref => this.resultRef = ref;

    render() {
        const { resultCode } = this.state;
        const { JCHCode: { JsCode, CssCode, HtmlCode }, isSocketConnected, errorOccured, errorMessage, getHtmlToSave } = this.props;

        return (
            <MainWrapper>
                <InfoLayout showInfo={errorOccured} info={errorMessage} closeInfo={this.closeInfo}>
                    <MenuWrapper>
                        <MenuButton className="action" onClick={this.runCode}>Run!</MenuButton>
                        <FileDownloader data={getHtmlToSave({ JsCode, CssCode, HtmlCode })} codeType="html" />
                    </MenuWrapper>
                    <FlexWrapper>
                        <CradleLoader loading={!isSocketConnected} label="Loading editors...">
                            <div>
                                <Title>JavaScript</Title>
                                <EditorWrapper>
                                    <AceEditor
                                        mode="javascript"
                                        theme="monokai"
                                        Name="JsCode"
                                        onChange={this.onJSChange}
                                        fontSize={14}
                                        width="400px"
                                        showPrintMargin={true}
                                        showGutter={true}
                                        highlightActiveLine={true}
                                        value={JsCode}
                                        setOptions={{
                                            enableBasicAutocompletion: true,
                                            enableLiveAutocompletion: true,
                                            enableSnippets: true,
                                            showLineNumbers: true,
                                            tabSize: 2,
                                        }}
                                    />
                                </EditorWrapper>
                            </div>
                            <div>
                                <Title>Css</Title>
                                <EditorWrapper>
                                    <AceEditor
                                        mode="css"
                                        theme="monokai"
                                        name="CssCode"
                                        onChange={this.onCSSChange}
                                        fontSize={14}
                                        width="400px"
                                        showPrintMargin={true}
                                        showGutter={true}
                                        highlightActiveLine={true}
                                        value={CssCode}
                                        setOptions={{
                                            enableBasicAutocompletion: true,
                                            enableLiveAutocompletion: true,
                                            enableSnippets: true,
                                            showLineNumbers: true,
                                            tabSize: 2,
                                        }}
                                    />
                                </EditorWrapper>
                            </div>
                            <div>
                                <Title>Html</Title>
                                <EditorWrapper>
                                    <AceEditor
                                        mode="html"
                                        theme="monokai"
                                        name="HtmlCode"
                                        onChange={this.onHtmlChange}
                                        fontSize={14}
                                        width="400px"
                                        showPrintMargin={true}
                                        showGutter={true}
                                        highlightActiveLine={true}
                                        value={HtmlCode}
                                        setOptions={{
                                            enableBasicAutocompletion: true,
                                            enableLiveAutocompletion: true,
                                            enableSnippets: true,
                                            showLineNumbers: true,
                                            tabSize: 2,
                                        }}
                                    />
                                </EditorWrapper>
                            </div>
                        </CradleLoader>
                    </FlexWrapper>
                {isSocketConnected && (
                    <ResultWrapper ref={this.addResultRef}>
                        <Title>Result</Title>
                        <EditorWrapper className="frame">
                            <div contentEditable='false' dangerouslySetInnerHTML={{ __html: resultCode }}></div>
                        </EditorWrapper>
                    </ResultWrapper>
                )}
               </InfoLayout>
               {isSocketConnected && <Chat />}
            </MainWrapper>
        );
    }
}

export default connect(
    state => ({
        ...state.editor,
        ...state.controll
    }), {
        ...editorActions,
        ...messageActions,
        ...controllActions
    }
)(JCHEditor);
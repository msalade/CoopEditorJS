import React, { Component } from 'react';

import AceEditor from 'react-ace';
import brace from 'brace';
import { FlexWrapper, MainWrapper, MenuWrapper, EditorWrapper, ResultWrapper, MenuButton, Title } from './Components';

import 'brace/mode/javascript';
import 'brace/mode/css';
import 'brace/mode/html';
import 'brace/snippets/html';
import 'brace/snippets/javascript';
import 'brace/snippets/css';
import 'brace/ext/language_tools';
import 'brace/theme/monokai';

class Editor extends Component {
    state = {
        showJsEditor: true,
        showCssEditor: true,
        showHtmlEditor: true,
        jsCode: '',
        cssCode: '',
        htmlCode: '',
        resultCode: ''
    }

    onShowElementClick = (elementName = 'showJsEditor') => {
        this.setState(currentState => ({
            [elementName]: !currentState[elementName]
        }));
    }

    onEditorChange = (value, name) => {
        this.setState({
            [name]: value
        });
    }

    runCode = () => {
        const { jsCode, cssCode, htmlCode } = this.state;
        const dangerousHtml = `<div>
            <style>${cssCode}</style>
            <div>${htmlCode}</div>
        </div>`;

        this.setState({
            resultCode: dangerousHtml
        }, () => new Function(jsCode)());
    }

    render() {
        const { jsCode, cssCode, htmlCode, resultCode, showJsEditor, showCssEditor, showHtmlEditor } = this.state;

        return <MainWrapper>
            <MenuWrapper>
                <MenuButton className="action" onClick={this.runCode}>Run!</MenuButton>
                <div>
                    <MenuButton active={!showJsEditor} onClick={() => this.onShowElementClick()}>JavaScript</MenuButton>
                    <MenuButton active={!showCssEditor} onClick={() => this.onShowElementClick("showCssEditor")}>Css</MenuButton>
                    <MenuButton active={!showHtmlEditor} onClick={() => this.onShowElementClick("showHtmlEditor")}>Html</MenuButton>
                </div>
            </MenuWrapper>
            <FlexWrapper>
                {showJsEditor && <div>
                    <Title>JavaScript</Title>
                    <EditorWrapper>
                        <AceEditor
                            mode="javascript"
                            theme="monokai"
                            Name="jsCode"
                            onChange={(value) => this.onEditorChange(value, "jsCode")}
                            fontSize={14}
                            showPrintMargin={true}
                            showGutter={true}
                            highlightActiveLine={true}
                            value={jsCode}
                            setOptions={{
                                enableBasicAutocompletion: true,
                                enableLiveAutocompletion: true,
                                enableSnippets: true,
                                showLineNumbers: true,
                                tabSize: 2,
                            }}
                        />
                    </EditorWrapper>
                </div>}
                {showCssEditor && <div>
                    <Title>Css</Title>
                    <EditorWrapper>
                        <AceEditor
                            mode="css"
                            theme="monokai"
                            name="cssCode"
                            onChange={(value) => this.onEditorChange(value, "cssCode")}
                            fontSize={14}
                            showPrintMargin={true}
                            showGutter={true}
                            highlightActiveLine={true}
                            value={cssCode}
                            setOptions={{
                                enableBasicAutocompletion: true,
                                enableLiveAutocompletion: true,
                                enableSnippets: true,
                                showLineNumbers: true,
                                tabSize: 2,
                            }}
                        />
                    </EditorWrapper>
                </div>}
                {showHtmlEditor && <div>
                    <Title>Html</Title>
                    <EditorWrapper>
                        <AceEditor
                            mode="html"
                            theme="monokai"
                            name="htmlCode"
                            onChange={(value) => this.onEditorChange(value, "htmlCode")}
                            fontSize={14}
                            showPrintMargin={true}
                            showGutter={true}
                            highlightActiveLine={true}
                            value={htmlCode}
                            setOptions={{
                                enableBasicAutocompletion: true,
                                enableLiveAutocompletion: true,
                                enableSnippets: true,
                                showLineNumbers: true,
                                tabSize: 2,
                            }}
                        />
                    </EditorWrapper>
                </div>}
            </FlexWrapper>
            <ResultWrapper>
                <Title>Result</Title>
                <EditorWrapper className="frame">
                    <div contentEditable='false' dangerouslySetInnerHTML={{ __html: resultCode }}></div>
                </EditorWrapper>
            </ResultWrapper>
        </MainWrapper>;
    }
}

export default Editor;
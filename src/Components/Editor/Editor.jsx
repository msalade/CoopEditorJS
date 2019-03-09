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
    socket = null;
    state = {
        showJsEditor: true,
        showCssEditor: true,
        showHtmlEditor: true,
        code: {
            jsCode: '',
            cssCode: '',
            htmlCode: ''
        },
        resultCode: ''
    }

    componentDidMount() {
        this.socket = new WebSocket('ws://localhost:5000/editor');
        this.socket.onmessage = ({ data }) => {
            console.log(data)
            const message = JSON.parse(data);

            this.setState({
                code: {
                    cssCode: message.cssCode,
                    htmlCode: message.htmlCode,
                    jsCode: message.jsCode
                }
            });
        }
    }

    onShowElementClick = (elementName = 'showJsEditor') => {
        this.setState(currentState => ({
            [elementName]: !currentState[elementName]
        }));
    }

    onEditorChange = (value, name) => {
        this.setState(currentState => ({
            code: {...currentState.code, [name]: value}
        }), () =>{
            console.log({
                ...this.state.code, [name]: value, Type: 0
            })
            this.socket.send(
            JSON.stringify({
                ...this.state.code, [name]: value, Type: 0
            })
        )});
    }

    runCode = () => {
        const { code } = this.state;
        const dangerousHtml = `<div>
            <style>${code.cssCode}</style>
            <div>${code.htmlCode}</div>
        </div>`;

        this.setState({
            resultCode: dangerousHtml
        }, () => new Function(code.jsCode)());
    }

    render() {
        const { code, resultCode, showJsEditor, showCssEditor, showHtmlEditor } = this.state;

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
                            width="400px"
                            showPrintMargin={true}
                            showGutter={true}
                            highlightActiveLine={true}
                            value={code.jsCode}
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
                            width="400px"
                            showPrintMargin={true}
                            showGutter={true}
                            highlightActiveLine={true}
                            value={code.cssCode}
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
                            width="400px"
                            showPrintMargin={true}
                            showGutter={true}
                            highlightActiveLine={true}
                            value={code.htmlCode}
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
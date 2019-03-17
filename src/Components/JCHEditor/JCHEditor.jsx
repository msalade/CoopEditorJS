import React, { Component } from 'react';
import { connect } from 'react-redux';

import AceEditor from 'react-ace';
import { FlexWrapper, MainWrapper, MenuWrapper, EditorWrapper, ResultWrapper, MenuButton, Title } from './Components';
import * as editorActions from '../../Actions/editorActions';

import 'brace/mode/javascript';
import 'brace/mode/css';
import 'brace/mode/html';
import 'brace/snippets/html';
import 'brace/snippets/javascript';
import 'brace/snippets/css';
import 'brace/ext/language_tools';
import 'brace/theme/monokai';

class JCHEditor extends Component {
    socket = null;
    state = {
        showJsEditor: true,
        showCssEditor: true,
        showHtmlEditor: true,
        code: {
            JsCode: '',
            CssCode: '',
            HtmlCode: ''
        },
        resultCode: ''
    }

    componentDidMount() {
        this.socket = this.props.connectToEditor(this.onMessageRecive);
    }

    onMessageRecive = ({ data }) => {
        if (data !== 'null') {
            const message = JSON.parse(data);
            console.log(message);
            this.setState({
                code: {
                    CssCode: message.CssCode,
                    HtmlCode: message.HtmlCode,
                    JsCode: message.JsCode
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
            code: { ...currentState.code, [name]: value }
        }), () => {
            this.socket.send(
                JSON.stringify({
                    ...this.state.code, [name]: value, Type: 0
                })
            )
        });
    }

    runCode = () => {
        const { getRawHtml } = this.props;

        this.setState(currentState => ({
            resultCode: getRawHtml(currentState.code)
        }), () => new Function(this.state.code.JsCode)());
    }

    render() {
        const { code, resultCode, showJsEditor, showCssEditor, showHtmlEditor } = this.state;
        console.log(this.props.example);
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
                            Name="JsCode"
                            onChange={(value) => this.onEditorChange(value, "JsCode")}
                            fontSize={14}
                            width="400px"
                            showPrintMargin={true}
                            showGutter={true}
                            highlightActiveLine={true}
                            value={code.JsCode}
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
                            name="CssCode"
                            onChange={(value) => this.onEditorChange(value, "CssCode")}
                            fontSize={14}
                            width="400px"
                            showPrintMargin={true}
                            showGutter={true}
                            highlightActiveLine={true}
                            value={code.CssCode}
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
                            name="HtmlCode"
                            onChange={(value) => this.onEditorChange(value, "HtmlCode")}
                            fontSize={14}
                            width="400px"
                            showPrintMargin={true}
                            showGutter={true}
                            highlightActiveLine={true}
                            value={code.HtmlCode}
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

export default connect(
    state => ({
        ...state.editor
    }), {
        ...editorActions
    }
)
(JCHEditor);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import AceEditor from 'react-ace';

import { FlexWrapper, MainWrapper, MenuWrapper, EditorWrapper, ResultWrapper, MenuButton, Title } from './Components';

import * as editorActions from '../../Actions/editorActions';
import * as messageActions from '../../Actions/messageActions';

import 'brace/mode/javascript';
import 'brace/mode/css';
import 'brace/mode/html';
import 'brace/snippets/html';
import 'brace/snippets/javascript';
import 'brace/snippets/css';
import 'brace/ext/language_tools';
import 'brace/theme/monokai';

class JCHEditor extends Component {
    state = {
        resultCode: ''
    }

    onEditorChange = (value, name = 'JsCode') => {
        const { updateEditorState, JSHCode } = this.props;

        updateEditorState({
            JSHCode: {
                ...JSHCode,
                [name]: value
            }
        });
    }

    onHtmlChange = value => this.onEditorChange(value, 'HtmlCode');

    onJSChange = value => this.onEditorChange(value);

    onCSSChange = value => this.onEditorChange(value, 'CssCode');

    runCode = () => {
        const { getRawHtml, JSHCode } = this.props;
        this.setState(currentState => ({
            resultCode: getRawHtml(JSHCode)
        }), () => new Function(JSHCode.JsCode)());
    }

    render() {
        const { resultCode } = this.state;
        const { JSHCode: { JsCode, CssCode, HtmlCode } } = this.props;

        return <MainWrapper>
            <MenuWrapper>
                <MenuButton className="action" onClick={this.runCode}>Run!</MenuButton>
            </MenuWrapper>
            <FlexWrapper>
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
        ...editorActions,
        ...messageActions
    }
)(JCHEditor);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import AceEditor from 'react-ace';

import { FlexWrapper, MainWrapper, EditorWrapper } from './Components';
import MenuBar from './MenuBar';

import * as messageActions from '../../Actions/messageActions';
import * as editorActions from '../../Actions/editorActions';

import 'brace/mode/javascript';
import 'brace/mode/css';
import 'brace/mode/html';
import 'brace/mode/java';
import 'brace/mode/python';
import 'brace/mode/xml';
import 'brace/mode/ruby';
import 'brace/mode/sass';
import 'brace/mode/markdown';
import 'brace/mode/mysql';
import 'brace/mode/json';
import 'brace/mode/html';
import 'brace/mode/handlebars';
import 'brace/mode/golang';
import 'brace/mode/csharp';
import 'brace/mode/elixir';
import 'brace/mode/typescript';
import 'brace/snippets/html';
import 'brace/snippets/javascript';
import 'brace/snippets/css';
import 'brace/snippets/java';
import 'brace/snippets/python';
import 'brace/snippets/xml';
import 'brace/snippets/ruby';
import 'brace/snippets/sass';
import 'brace/snippets/markdown';
import 'brace/snippets/mysql';
import 'brace/snippets/json';
import 'brace/snippets/html';
import 'brace/snippets/handlebars';
import 'brace/snippets/golang';
import 'brace/snippets/csharp';
import 'brace/snippets/elixir';
import 'brace/snippets/typescript';
import 'brace/ext/language_tools';
import 'brace/theme/monokai';

class Editor extends Component {
    state = {
        fontSizes: [
            { value: 14, label: '14' },
            { value: 18, label: '18' },
            { value: 20, label: '20' },
            { value: 24, label: '24' },
            { value: 28, label: '28' },
            { value: 32, label: '32' },
            { value: 40, label: '40' }
        ],
        languages: [
            { value: 'javascript', label: 'JavaScript' },
            { value: 'java', label: 'Java' },
            { value: 'python', label: 'Python' },
            { value: 'xml', label: 'XML' },
            { value: 'ruby', label: 'Ruby' },
            { value: 'sass', label: 'SASS' },
            { value: 'markdown', label: 'Markdown' },
            { value: 'mysql', label: 'MySQL' },
            { value: 'json', label: 'Json' },
            { value: 'html', label: 'HTML' },
            { value: 'handlebars', label: 'Handlebars' },
            { value: 'golang', label: 'GOlang' },
            { value: 'csharp', label: 'C#' },
            { value: 'elixir', label: 'Elixir' },
            { value: 'typescript', label: 'TypeScript' },
            { value: 'css', label: 'CSS' }
        ]
    }

    onLanguageChange = ({ value }) => this.props.updateEditorState({ languageType: value });

    onFontSizeChange = ({ value }) => this.props.updateEditorState({ fontSize: value });

    onEditorChange = value => {
        const { updateEditorState, sendCodeMessage } = this.props;

        updateEditorState({ code: value });
        sendCodeMessage(value);
    }

    render() {
        const { fontSizes, languages } = this.state;
        const { languageType, fontSize, code } = this.props;

        return (
            <MainWrapper>
                <MenuBar
                    fontSizes={fontSizes}
                    languages={languages}
                    onLanguageChange={this.onLanguageChange}
                    onFontSizeChange={this.onFontSizeChange}
                    selectedSize={fontSize}
                    selectedLanguage={languageType}
                />
                <FlexWrapper>
                    <EditorWrapper>
                        <AceEditor
                            mode={languageType}
                            theme="monokai"
                            Name="JsCode"
                            onChange={this.onEditorChange}
                            fontSize={fontSize}
                            width="1300px"
                            height="550px"
                            showPrintMargin={true}
                            showGutter={true}
                            highlightActiveLine={true}
                            value={code}
                            setOptions={{
                                enableBasicAutocompletion: true,
                                enableLiveAutocompletion: true,
                                enableSnippets: true,
                                showLineNumbers: true,
                                tabSize: 2,
                            }}
                        />
                    </EditorWrapper>
                </FlexWrapper>
            </MainWrapper>
        );
    }
}

export default connect(
    state => ({
        ...state.editor
    }), {
        ...messageActions,
        ...editorActions
    }
)(Editor);
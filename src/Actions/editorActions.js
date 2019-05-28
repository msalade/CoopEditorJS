import * as actionTypes from './actionTypes';

export const getRawHtml = (code) => (dispatch, getState, sendMessage) => {
    return code ? `<div><style>${code.CssCode}</style><div>${code.HtmlCode}</div></div>` : '';
}

export const updateEditorState = state => (dispatch, getState, sendMessage) => {
    dispatch({
        type: actionTypes.UPDATE_EDITOR_STATE,
        ...state
    });
};

export const getHtmlToSave = code => (dispatch, getState, sendMessage) => {
    return code ? `
<!DOCTYPE html>

<html>

    <head>
        <style>
            ${code.CssCode}
        </style>
    </head>
    
    <body>
        <script>
            ${code.JsCode}
        </script>
        <div>
            ${code.HtmlCode}
        </div>
    </body>
    
</html>` : '';
}
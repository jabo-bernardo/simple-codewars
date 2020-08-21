let editor = CodeMirror.fromTextArea(document.querySelector("textarea"), {
    lineNumbers: true,
    mode: "javascript",
    theme: "material-darker"
});

editor.setValue(`function isDigit(str) {\n\treturn false;\n}`)
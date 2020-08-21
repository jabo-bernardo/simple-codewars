let editor = CodeMirror.fromTextArea(document.querySelector("textarea"), {
    lineNumbers: true,
    mode: "javascript",
    theme: "material-darker"
});

editor.setValue(`function isDigit(str) {\n\treturn false;\n}`);

function validate(func) {
    let second = {
        isEqual: (val) => {
            return func === val;
        }
    }
    return second;
}

function submitCode() {
    eval(editor.getValue())
    let results = [];
    results.push(validate(isDigit("3")).isEqual(true))
    results.push(validate(isDigit(" 3 ")).isEqual(true))
    results.push(validate(isDigit("-3.23")).isEqual(true))
    results.push(validate(isDigit("3-4")).isEqual(false))
    results.push(validate(isDigit(" 3 5")).isEqual(false))
    results.push(validate(isDigit("3 5")).isEqual(false))
    results.push(validate(isDigit("zero")).isEqual(false))
    message = Array.from(new Set(results)).length == 1 ? `🚀 SUCCESS!` : `❌ FAILED! (🔥 Failed Test: ${results.filter(v => v == false).length})`;
    document.querySelector(".output").innerHTML = message;
}
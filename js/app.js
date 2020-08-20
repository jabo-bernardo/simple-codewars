let editor = CodeMirror.fromTextArea(document.querySelector("textarea"), {
    lineNumbers: true,
    mode: "javascript",
    theme: "material-darker"
})

let willRunCode = setTimeout(() => runCode(), 1000)

editor.on("change", () => {
    clearInterval(willRunCode);
})

editor.on("changes", () => {
    willRunCode = setTimeout(() => runCode(), 1000);
})

function runCode() {
    let output = null
    $(".out").classList.remove("red");
    try {
        output = eval(editor.getValue());
        if(output == undefined) return $(".out").innerHTML = "...";
        $(".out").innerHTML = output;
    } catch(err) {
        output = err.toString();
        $(".out").classList.add("red");
        $(".out").innerHTML = output;
    }
}

function $(s) {
    return document.querySelector(s);
}
var htmlEditor = CodeMirror.fromTextArea(document.getElementById('html'), {
    mode: "htmlmixed",
    theme: "cobalt",
    styleActiveLine: true,
    lineNumbers: true,
    autoCloseTags: true,
    lineWrapping: true,
    spellcheck: true,
    matchBrackets: true,
    keyMap: "sublime",
    lineWrapping: true,
    highlightSelectionMatches: true,
    extraKeys: { "Ctrl-Space": "autocomplete" },
    autohint: true,
    // extraKeys: {
    //     "Ctrl-Space": function () {
    //         var ohtml = htmlEditor.getValue();
    //         var ocss = cssEditor.getValue();
    //         var ojs = jsEditor.getValue();

    //         document.getElementById('view-result').srcdoc = "<!DOCTYPE html><html><head><style>" + ocss + "</style></head><body style=\"word-break: break-all\">" + ohtml + " <script> " + ojs + " </script></body></html>";
    //     }
    // }
});

var cssEditor = CodeMirror.fromTextArea(document.getElementById('css'), {
    mode: "css",
    theme: "cobalt",
    lineNumbers: true,
    autoCloseBrackets: true,
    lineWrapping: true,
    styleActiveLine: true,
    matchBrackets: true,
    keyMap: "sublime",
    autoCloseTags: true,
    extraKeys: { "Ctrl-Space": "autocomplete" },
    autohint: true,
    // extraKeys: {
    //     "Ctrl-Space": function () {
    //         var ohtml = htmlEditor.getValue();
    //         var ocss = cssEditor.getValue();
    //         var ojs = jsEditor.getValue();

    //         document.getElementById('view-result').srcdoc = "<!DOCTYPE html><html><head><style>" + ocss + "</style></head><body style=\"word-break: break-all\">" + ohtml + " <script> " + ojs + " </script></body></html>";
    //     }
    // }
});

var jsEditor = CodeMirror.fromTextArea(document.getElementById('javascript'), {
    mode: "javascript",
    theme: "cobalt",
    lineNumbers: true,
    autoCloseBrackets: true,
    lineWrapping: true,
    matchBrackets: true,
    styleActiveLine: true,
    keyMap: "sublime",
    autoCloseTags: true,
    extraKeys: { "Ctrl-Space": "autocomplete" },
    autohint: true,
    // extraKeys: {
    //     "Ctrl-Space": function () {
    //         var ohtml = htmlEditor.getValue();
    //         var ocss = cssEditor.getValue();
    //         var ojs = jsEditor.getValue();

    //         document.getElementById('view-result').srcdoc = "<!DOCTYPE html><html><head><style>" + ocss + "</style></head><body style=\"word-break: break-all\">" + ohtml + " <script> " + ojs + " </script></body></html>";
    //     }
    // }

});

function showCode() {
    var ohtml = htmlEditor.getValue();
    var ocss = cssEditor.getValue();
    var ojs = jsEditor.getValue();

    document.getElementById('view-result').srcdoc = "<!DOCTYPE html><html><head><style>" + ocss + "</style></head><body style=\"word-break: break-all\">" + ohtml + " <script> " + ojs + " </script></body></html>";
}


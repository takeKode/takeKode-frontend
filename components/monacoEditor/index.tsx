import React from "react";
import Editor from "@monaco-editor/react";

function MonacoEditor() {
  return (
    <Editor
      height="92vh"
      width="98%"
      defaultLanguage="javascript"
      defaultValue="//Write or paste your JavaScript code here ..."
      theme="vs-dark"
    />
  );
}

export default MonacoEditor;

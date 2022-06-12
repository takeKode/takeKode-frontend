import React, { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
//import { useDebounce } from "react-use";

function MonacoEditor() {
  const [codeSnippet, setCodeSnippet] = useState(
    "//Write or paste your code here ..."
  );

  const handleEditorChange = (value: string, event: any) => {
    setCodeSnippet(value);
  };

  // useEffect(() => {
  //   return () => {};
  // }, [codeSnippet]);

  // useDebounce(
  //   () => {
  //     console.log("Making API request");
  //   },
  //   2000,
  //   [codeSnippet]
  // );

  return (
    <Editor
      height="92vh"
      width="98%"
      defaultLanguage="javascript"
      defaultValue="//Write or paste your JavaScript code here ..."
      theme="vs-dark"
      onChange={handleEditorChange}
      value={codeSnippet}
    />
  );
}

export default MonacoEditor;

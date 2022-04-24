import Editor from "@monaco-editor/react";
import styles from "../../styles/CodePage.module.css";
import CodeHeader from "../../components/codeHeader";
import CodeControlPanel from "../../components/codeControlPanel";

const CodePage = () => {
  return (
    <div className={styles.codePage}>
      <CodeHeader />
      <div style={{ display: "flex" }}>
        <Editor
          height="92vh"
          width="98%"
          defaultLanguage="javascript"
          defaultValue="//Write or paste your JavaScript code here ..."
          theme="vs-dark"
        />
        <CodeControlPanel />
      </div>
    </div>
  );
};

export default CodePage;

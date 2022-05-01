import dynamic from "next/dynamic";
import CodeHeader from "../../components/codeHeader";
import CodeControlPanel from "../../components/codeControlPanel";
import styles from "../../styles/CodePage.module.css";

const MonacoEditorWithNoSSR = dynamic(
  () => import("../../components/monacoEditor"),
  { ssr: false }
);

const CodePage = () => {
  return (
    <div className={styles.codePage}>
      <CodeHeader />
      <div style={{ display: "flex" }}>
        <MonacoEditorWithNoSSR />
        <CodeControlPanel />
      </div>
    </div>
  );
};

export default CodePage;

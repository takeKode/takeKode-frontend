import { Button } from "@nextui-org/react";
import styles from "../../styles/CodePage.module.css";

const LogoutBtnStyle = {
  color: "white",
  borderColor: "gray",
};

const CodeHeader = () => {
  return (
    <div className={styles.codeHeader}>
      <div className={styles.codeHeaderContent}>
        <h2 className={styles.codeHeaderLogoTitle}>takeKode</h2>
        <Button css={LogoutBtnStyle} bordered auto>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default CodeHeader;

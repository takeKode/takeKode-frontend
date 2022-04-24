import styles from "../../styles/CodePage.module.css";
import { FaDownload, FaShareAlt, FaInfoCircle } from "react-icons/fa";
import { RiSettings5Fill } from "react-icons/ri";
const CodeControlPanel = () => {
  return (
    <div className={styles.codeControlPanel}>
      <div className={styles.codeControlPanelIcons}>
        <div>
          <div className={styles.codeControlPanelIcon}>
            <FaShareAlt color="#b3b5b8" />
          </div>
          <div className={styles.codeControlPanelIcon}>
            <FaDownload color="#b3b5b8" />
          </div>
          <div className={styles.codeControlPanelIcon}>
            <RiSettings5Fill size={20} color="#b3b5b8" />
          </div>
        </div>
      </div>
      <div
        className={styles.codeControlPanelIcon}
        style={{ borderTop: "2px solid black" }}
      >
        <FaInfoCircle size={20} color="#b3b5b8" />
      </div>
    </div>
  );
};

export default CodeControlPanel;

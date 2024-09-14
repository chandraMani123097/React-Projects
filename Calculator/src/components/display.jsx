import styles from "./display.module.css";

const Display = ({ defaultValue }) => {
  return (
    <input
      className={styles.display}
      type="text"
      value={defaultValue}
      readOnly
    />
  );
};

export default Display;

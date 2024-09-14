import styles from "./ButtonsContainer.module.css";

const ButtonsDisplay = ({ ButtonsN, onButtonClick }) => {
  return (
    <div className={styles.buttonContainer}>
      {ButtonsN.map((buttonName) => (
        <button
          className={styles.button}
          onClick={() => onButtonClick(buttonName)}
        >
          {buttonName}{" "}
        </button>
      ))}
    </div>
  );
};

export default ButtonsDisplay;

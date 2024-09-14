import styles from "./App.module.css";
import Display from "./components/display";
import ButtonsDisplay from "./components/ButtonsContainer";
import { useState } from "react";

function App() {
  const ButtonName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    ".",
    "9",
    "(",
    "0",
    ")",
    "=",
  ];

  let [calValue, newCalvalue] = useState("");

  const onButtonClick = (buttonText) => {
    console.log(buttonText);
    if (buttonText === "=") {
      const result = eval(calValue);
      newCalvalue(result);
    } else if (buttonText === "C") {
      newCalvalue("");
    } else {
      let clcikedVal = calValue + buttonText;
      newCalvalue(clcikedVal);
    }
  };

  return (
    <div className={styles.Calculator}>
      <Display defaultValue={calValue}></Display>
      <ButtonsDisplay
        ButtonsN={ButtonName}
        onButtonClick={onButtonClick}
      ></ButtonsDisplay>
    </div>
  );
}

export default App;

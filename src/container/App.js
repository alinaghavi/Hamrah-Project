import React, { useState } from "react";

import LayoutGenerator from "../component/LayoutGenerator/LayoutGenerator";

import styles from "./App.module.css";

function App() {
  const [inputString, setInputString] = useState("");
  const [inputError, setInputError] = useState("");

  const onChangHandler = (event) => {
    //Regex for matching proper input
    const regex = /^([1-9]|[1-3][0-9]?){0,1}(?:\/([1-9]|[1-3][0-9]?){0,1})*\/?$/;

    // if value is not blank, then test the regex else output Error
    if (event.target.value === "" || regex.test(event.target.value)) {
      setInputError("");
      setInputString(event.target.value);
    } else {
      setInputError(
        "Please type in the right format (1/2/3/...) each number should be less than 40"
      );
    }
  };

  return (
    <div className={styles.App}>
      <h1>This is a test project for Hamrah-machanic Company</h1>

      <input
        type="text"
        placeholder="Type Your Layout like (12/3/4)"
        value={inputString}
        onChange={onChangHandler}
      />

      <p className={styles.Error}>{inputError}</p>

      <LayoutGenerator layoutInput={inputString} />
    </div>
  );
}

export default App;

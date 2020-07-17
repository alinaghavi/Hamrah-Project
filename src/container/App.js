import React, { useState } from "react";

import LayoutGenerator from "../component/LayoutGenerator/LayoutGenerator";

import styles from "./App.module.css";

function App() {
  const [inputString, setInputString] = useState("");

  return (
    <div className={styles.App}>
      <h1>This is a test project for Hamrah-machanic Company</h1>
      <input
        type="text"
        placeholder="Type Your Preferred Layout"
        value={inputString}
        onChange={(e) => setInputString(e.target.value)}
      />
      <LayoutGenerator layoutInput={inputString} />
    </div>
  );
}

export default App;

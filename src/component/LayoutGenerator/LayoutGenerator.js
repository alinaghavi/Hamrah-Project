import React from "react";
import styles from "./LayoutGenerator.module.css";

const LayoutGenerator = (props) => {
  //Compute number of rows based on the input and remove the empty value
  const NumberOfRows = props.layoutInput
    .split("/")
    .filter((item) => item !== "");

  const layout = NumberOfRows.map((row) => {
    //Compute number of columns in each row and generate a div
    const numberOfBoxes = new Array(+row).fill("1");

    const layout = numberOfBoxes.map((box) => (
      <div className={styles.Column}></div>
    ));

    return <div className={styles.Row}>{layout}</div>;
  });

  return <div className={styles.Layout}>{layout}</div>;
};

export default LayoutGenerator;

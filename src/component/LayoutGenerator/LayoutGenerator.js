import React from "react";
import styles from "./LayoutGenerator.module.css";

const LayoutGenerator = (props) => {
  //Compute number of rows based on the input and remove the empty value
  const NumberOfRows = props.layoutInput
    .split("/")
    .filter((item) => item !== "");

  const WrapperRow = NumberOfRows.map((row, index) => {
    //Compute number of columns in each row and generate a div
    const numberOfBoxes = new Array(+row).fill("1");

    const innerColumns = numberOfBoxes.map((_, index) => (
      <div className={styles.Column} key={index}></div>
    ));

    return (
      <div className={styles.Row} key={index}>
        {innerColumns}
      </div>
    );
  });

  return <div className={styles.Layout}>{WrapperRow}</div>;
};

export default LayoutGenerator;

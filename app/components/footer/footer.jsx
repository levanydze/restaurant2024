import React from "react";
import styles from "./footer.module.css";
import First from "./first";
import Second from "./second";
import Third from "./third";
import Fourth from "./fourth";
import LowerFoot from "./lowerFoot";

export default function Footer() {
  return (
    <div className={styles.footMainWrapper}>
      <div className={styles.footWrapper}>
        <First />
        <Second />
        <Third />
        <Fourth />
      </div>
      <LowerFoot />
    </div>
  );
}

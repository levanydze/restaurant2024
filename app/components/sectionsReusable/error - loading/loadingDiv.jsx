import React from "react";
import styles from "./loadingDiv.module.css";

export default function LoadingDiv() {
  return (
    <div className={styles.loadingWrapper}>
      <h1>Loading Data</h1>
    </div>
  );
}

import React from "react";
import styles from "./errorDiv.module.css";

export default function ErrorDiv() {
  return (
    <div className={styles.errorWrapper}>
      <h1>Error Occured</h1>
    </div>
  );
}

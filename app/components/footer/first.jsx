import React from "react";

import styles from "./first.module.css";
import SocMedia from "../miniComponentsReusable/socMedia/socMedia";
import infoJson from "../../json/info.json";

export default function First() {
  const { name, address, email, mobileNumber } = infoJson;
  return (
    <main>
      <h5>Contact info</h5>
      <div className={styles.contactDiv}>
        <p>{address}</p>
        <p className={styles.email}>{email}</p>
        <p>{mobileNumber}</p>
      </div>
      <SocMedia />
    </main>
  );
}

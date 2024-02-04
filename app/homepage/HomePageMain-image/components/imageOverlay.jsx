import React from "react";
import styles from "./imageOverlay.module.css";
import { FiPhone } from "react-icons/fi";
import SocMedia from "../../../components/miniComponentsReusable/socMedia/socMedia";
import Button from "../../../components/miniComponentsReusable/buttons/Button";
import infoJson from "../../../json/info.json";

export default function ImageOverlay() {
  const { mobileNumber, name } = infoJson;
  return (
    <div className={styles.overlayWrapper}>
      <div className={styles.empty}></div>
      <div className={styles.middle}>
        <h2>Welcome to</h2>
        <h1>{name}</h1>
        <h3>Restaurant</h3>
        <div className="twoLines "></div>
        <h4>
          Fish is one of the most wholesome foods that man can eat. In fact,
          people have been eating fish throughout human history.
        </h4>
        <div className={styles.buttons}>
          <Button
            value="Book a Table"
            styling="button4"
            target="/reservation"
          />
          <Button value="View Menu" styling="button3" target="/menu" />
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.phoneNumber}>
          <FiPhone className={styles.phoneIcon} />
          {mobileNumber}
        </div>
        <div className={styles.icons}>
          <SocMedia />
        </div>
      </div>
    </div>
  );
}

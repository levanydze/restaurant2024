import React from "react";
import styles from "./map&times.module.css";
import Hours from "./components/hours";
import Text from "./components/text";
import infoJson from "../../../json/info.json";

export default function MapAndTimes() {
  const { mapLocation } = infoJson;
  return (
    <div className={styles.mapAndTimesWrapper}>
      <div className={styles.textMapWrap}>
        <Text />
        <div className={styles.mapSide}>
          <iframe className={styles.mapSide} src={mapLocation}></iframe>
        </div>
      </div>
      <Hours />
    </div>
  );
}

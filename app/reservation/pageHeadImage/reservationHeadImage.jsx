import Image from "next/image";
import React from "react";
import styles from "./reservationHeadImage.module.css";

export default function ReservationHeadImage({ image, value }) {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.overlayWrapper}>
        <h1>{value}</h1>
      </div>
      <div className={styles.imageDarkLayer}></div>
      <Image
        className={styles.mainImage}
        src={image}
        alt={image}
        width={1200}
        height={1200}
        priority
      />
    </div>
  );
}

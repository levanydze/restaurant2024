import Image from "next/image";
import React from "react";
import styles from "./pageHeadImage.module.css";

export default function PageHeadImage({ image, value, short }) {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.overlayWrapper}>
        <h1>{value}</h1>
      </div>
      <div className={styles.imageDarkLayer}></div>
      <Image
        className={` ${styles.mainImage} ${short ? styles.short : ""}`}
        src={image}
        alt={image}
        width={1200}
        height={1200}
        priority
      />
    </div>
  );
}

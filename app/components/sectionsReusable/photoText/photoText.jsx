import React from "react";
import styles from "./photoText.module.css";
import imagesJson from "../../../json/images.json";
import Image from "next/image";

export default function PhotoText({ image }) {
  return (
    <div className={styles.photoTextWrapper}>
      <Image src={image} height={1500} width={1500} alt={image} />
      <div className={styles.textDiv}>
        <h2>Chief’s Word</h2>
        <h1>MADE WITH LOVE</h1>
        <p className="twoLines"></p>
        <h3 className="text1">
          Fish is one of the most wholesome foods that man can eat. In fact,
          people have been eating fish throughout human history. These days,
          many cooks yearn to add fish to their repertoire, but the whole
          process of cleaning and filleting
        </h3>
        <h4>Chief’s Word</h4>
      </div>
    </div>
  );
}

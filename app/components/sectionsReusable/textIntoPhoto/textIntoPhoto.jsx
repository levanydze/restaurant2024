import React from "react";
import styles from "./textIntoPhoto.module.css";
import imagesJson from "../../../json/images.json";
import assetsJson from "../../../json/assets.json";
import Image from "next/image";

export default function TextIntoPhoto() {
  const { chair } = assetsJson;
  const { textIntoPhoto1 } = imagesJson;
  return (
    <div className={styles.TextIntoPhotoWrapper}>
      <Image
        className={styles.image}
        src={textIntoPhoto1}
        width={1000}
        height={1000}
        alt={textIntoPhoto1}
      ></Image>
      <div className={styles.textDivWrapper}>
        <div className={styles.textDiv}>
          <Image src={chair} alt="chair" width={60} height={60}></Image>
          <h2>BEAUTIFUL INTERIOR</h2>
          <p className="twoLines"></p>
          <h5 className="text1">
            Fish is one of the most wholesome foods that man can eat. In fact,
            people have been eating fish throughout human history. These days,
            many cooks yearn to add fish to their repertoire.
          </h5>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import styles from "./reverseTextIntoPhoto.module.css";
import imagesJson from "../../../json/images.json";
import assetsJson from "../../../json/assets.json";
import Image from "next/image";

export default function ReverseTextIntoPhoto() {
  const { chair } = assetsJson;
  const { textIntoPhoto2 } = imagesJson;
  return (
    <div className={styles.TextIntoPhotoWrapper}>
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
      <Image
        className={styles.image}
        src={textIntoPhoto2}
        width={1000}
        height={1000}
        alt={textIntoPhoto2}
      ></Image>
    </div>
  );
}

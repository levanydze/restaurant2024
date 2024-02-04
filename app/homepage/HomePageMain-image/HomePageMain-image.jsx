import Image from "next/image";
import React from "react";
import styles from "./HomePageMain-image.module.css";
import ImageOverlay from "./components/imageOverlay";
import imageJson from "../../json/images.json";

export default function MainImage() {
  const { homePagePhoto } = imageJson;
  return (
    <div className={styles.mainWrapper}>
      <ImageOverlay />
      <div className={styles.imageDarkLayer}></div>
      <Image
        className={styles.mainImage}
        src={homePagePhoto}
        alt={homePagePhoto}
        width={1200}
        height={1200}
        priority
      />
    </div>
  );
}

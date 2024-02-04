import React from "react";
import styles from "./fourth.module.css";
import Image from "next/image";
import Link from "next/link";

import imagesJosn from "../../json/images.json";
import infoJson from "../../json/info.json";

export default function Fourth() {
  const { instagram } = infoJson;
  const {
    instagramPost1,
    instagramPost2,
    instagramPost3,
    instagramPost4,
    instagramPost5,
    instagramPost6,
  } = imagesJosn;
  return (
    <main className={styles.wrapper}>
      <h5>Instagram</h5>

      <Link className={styles.imageWrapper} href={instagram} target="_blank">
        <Image width={70} height={70} alt="img" src={instagramPost1} />
        <Image width={70} height={70} alt="img" src={instagramPost2} />
        <Image width={70} height={70} alt="img" src={instagramPost3} />
        <Image width={70} height={70} alt="img" src={instagramPost4} />
        <Image width={70} height={70} alt="img" src={instagramPost5} />
        <Image width={70} height={70} alt="img" src={instagramPost6} />
      </Link>
      <Link href={instagram} target="_blank">
        <p>View More Photos</p>
      </Link>
    </main>
  );
}

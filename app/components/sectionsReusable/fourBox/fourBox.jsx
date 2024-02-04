import Image from "next/image";
import React from "react";
import assetsJson from "../../../json/assets.json";
import infoJson from "../../../json/info.json";
import styles from "./fourBox.module.css";
import Link from "next/link";

export default function FourBox() {
  const { arrows, phone, postbox, chat } = assetsJson;
  const { email, mobileNumber, address } = infoJson;
  return (
    <div className={styles.FourBoxMainWrapper}>
      <div className={`${styles.eachBox} ${styles.box1}`}>
        <Image src={arrows} width={70} height={70} alt={arrows} />
        <p className="twoLines"></p>
        <h4 className="text1">{address}</h4>
      </div>
      <div className={`${styles.eachBox} ${styles.box2}`}>
        <Image src={phone} width={70} height={70} alt={phone} />
        <p className="twoLines"></p>
        <h4 className="text1">{mobileNumber}</h4>
      </div>
      <div className={`${styles.eachBox} ${styles.box3}`}>
        <Image src={postbox} width={70} height={70} alt={postbox} />
        <p className="twoLines"></p>
        <h4 className="text1">{email}</h4>
      </div>
      <Link href="/contact" className={`${styles.eachBox} ${styles.box4}`}>
        <Image src={chat} width={70} height={70} alt={chat} />
        <p className="twoLines"></p>
        <h4 className="text1">GET IN TOUCH</h4>
      </Link>
    </div>
  );
}

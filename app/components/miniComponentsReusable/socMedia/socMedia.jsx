import React from "react";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { IoRestaurantOutline } from "react-icons/io5";
import styles from "./socMedia.module.css";
import infoJson from "../../../json/info.json";

export default function SocMedia() {
  const { instagram, facebook } = infoJson;
  return (
    <div className={styles.socialMedia}>
      <Link href={instagram} target="_blank">
        <FaInstagram className={styles.socialMediaIcon} />
      </Link>
      <Link href={facebook} target="_blank">
        <CiFacebook className={styles.socialMediaIcon} />
      </Link>
      <Link href={facebook} target="_blank">
        <IoRestaurantOutline className={styles.socialMediaIcon} />
      </Link>
    </div>
  );
}

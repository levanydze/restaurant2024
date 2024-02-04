import React from "react";
import styles from "./lowerFoot.module.css";
import { FaHeart } from "react-icons/fa";
import Link from "next/link";

export default function LowerFoot() {
  return (
    <div className={styles.lowerWrap}>
      <p className={styles.dimmed}>
        Created with <FaHeart className={styles.heart} />
        by
      </p>
      <Link href="https://www.levanidze.com/" target="_blank">
        <p className={styles.lighted}>ლევანი</p>
      </Link>
      <div className={styles.divider}></div>
      <p className={styles.dimmed}>Powered by</p>
      <p className={styles.lighted}> Levanidze</p>
      <div className={styles.divider}></div>
      <p className={styles.lighted}> Style Guide</p>
      <div className={styles.divider}></div>
      <p className={styles.lighted}>Licenses</p>
    </div>
  );
}

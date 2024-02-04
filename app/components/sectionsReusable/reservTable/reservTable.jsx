import React from "react";
import Link from "next/link";
import assetsJson from "../../../json/assets.json";

import styles from "./reservTable.module.css";
import Image from "next/image";
export default function ReservTable() {
  const { langari } = assetsJson;
  return (
    <Link href="/reservation" className={styles.reservTableWrap}>
      <Image src={langari} height={100} width={100} alt={langari} />
      <h3>RESERV A TABLE</h3>
    </Link>
  );
}

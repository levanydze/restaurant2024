import React from "react";
import styles from "./menuCard.module.css";
import Image from "next/image";
import Link from "next/link";

export default function MenuCard({
  image,
  name,
  ingredients,
  portions,
  special,
  season,
  vegan,
  spicy,
  newItem,
  price,
  id,
}) {
  return (
    <div className={styles.cardWrapper}>
      <Link href={`/menu/${id}`}>
        <Image src={image} width={600} height={600} alt={name}></Image>
      </Link>
      <div className={styles.cardInfoDiv}>
        <div className={styles.namePrice}>
          <h1>{name}</h1>
          <p className={styles.dotted}></p>
          <h6>{price} sek</h6>
        </div>
        <h2>{ingredients}</h2>
        <div className={styles.details}>
          {portions ? <h5>{portions}</h5> : ""}
          {vegan ? <p className={styles.vegan}>VEGAN</p> : ""}
          {special ? <p className={styles.special}>SPECIAL</p> : ""}
          {season ? <p className={styles.season}>SEASON</p> : ""}
          {spicy ? <p className={styles.spicy}>SPICY</p> : ""}
          {newItem ? <p className={styles.newItem}>NEW</p> : ""}
        </div>
      </div>
    </div>
  );
}

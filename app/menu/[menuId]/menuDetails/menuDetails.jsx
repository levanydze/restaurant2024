import React from "react";
import styles from "./menuDetails.module.css";
import Image from "next/image";
import { getMenu } from "../../../../lib/menusData";

export default async function MenuDetails({ menuId }) {
  const data = await getMenu(menuId);

  return (
    <div className={styles.menuDetailsWrapper}>
      <div className={styles.imgWrapper}>
        <Image
          priority
          src={data.image}
          alt={data.name}
          height={500}
          width={500}
        />
      </div>
      <div className={styles.infoWrapper}>
        <h1>{data.name}</h1>
        <h2 className="text1">INGREDIENTS: {data.ingredients}</h2>
        <h3 className="text1">{data.description}</h3>
        <h4>{data.portions}</h4>
        <div className={styles.specifications}>
          {data.special ? <p className={styles.special}>special</p> : null}
          {data.season ? <p className={styles.season}>season</p> : null}
          {data.vegan ? <p className={styles.vegan}>vegan</p> : null}
          {data.spicy ? <p className={styles.spicy}>spicy</p> : null}
          {data.newItem ? <p className={styles.newItem}>new</p> : null}
        </div>
        <h4 className={styles.price}>Price: {data.price} Sek</h4>
      </div>
    </div>
  );
}

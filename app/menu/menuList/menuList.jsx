import React from "react";
import styles from "./menuList.module.css";
import MenuCard from "../card/menuCard";
import { getMenus } from "../../../lib/menusData";

export default async function MenuList({ category }) {
  const menus = await getMenus();

  return (
    <div className={styles.menuWrapper}>
      {menus.filter((menu) => menu[category]).length > 0 && (
        <div className={styles.menuHead}>
          <h2>Menu</h2>
          <h1>{category}</h1>
          <p className="twoLines"></p>
        </div>
      )}
      <div className={styles.cardsMapWrap}>
        {menus
          .filter((menu) => menu[category])
          .map((menu, index) => (
            <div key={menu.id}>{menu && <MenuCard {...menu} />}</div>
          ))}
      </div>
    </div>
  );
}

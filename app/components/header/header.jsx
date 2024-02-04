import React from "react";
import styles from "./header.module.css";
import Navigation from "./navigation";
import BurgerNav from "./burgerNav";
import Logo from "./logo";
import PageHeadImage from "../sectionsReusable/pageHeadImage/pageHeadImage";

export default function Header() {
  return (
    <main className={styles.headWrapper}>
      <Logo />
      <div>
        <Navigation />
        <BurgerNav />
      </div>
    </main>
  );
}

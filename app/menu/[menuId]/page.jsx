import React, { Suspense } from "react";
import Link from "next/link";
import { RiArrowGoBackFill } from "react-icons/ri";

import styles from "./page.module.css";
import MenuDetails from "./menuDetails/menuDetails";
import PageHeadImage from "../../components/sectionsReusable/pageHeadImage/pageHeadImage";
import LoadingDiv from "../../components/sectionsReusable/error - loading/loadingDiv";

import imageJson from "../../json/images.json";

// import { getMenu } from "@/lib/menusData";
// import { notFound } from "next/navigation";
// export async function generateMetadata({ params }) {
//   const menu = getMenu(params.menuId);
//   if (!menu) {
//     notFound();
//   }
//   console.log(menu + "123");
//   return {
//     title: menu.name,
//     description: menu.description,
//   };
// }
//needs to be fixed!!!

export const metadata = {
  title: "Our Delicious Food | ChaCha Restaurant",
  description: "Delicious Food",
};

export default async function MenuDetailsPage({ params }) {
  const menuId = parseInt(params.menuId);

  const { menuDetailImage } = imageJson;
  return (
    <div className={styles.pageDetailWrapper}>
      <PageHeadImage image={menuDetailImage} short={true} />
      <div className={styles.lowerDiv}>
        <Link href="./">
          <RiArrowGoBackFill className={styles.goBackIcon} />
        </Link>
        <Suspense fallback={<LoadingDiv />}>
          <MenuDetails menuId={menuId} />
        </Suspense>
      </div>
    </div>
  );
}

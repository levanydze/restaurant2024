import React, { Suspense } from "react";
import PageHeadImage from "../components/sectionsReusable/pageHeadImage/pageHeadImage";
import imagesJson from "../json/images.json";
import MenuList from "./menuList/menuList";
import LoadingDiv from "../components/sectionsReusable/error - loading/loadingDiv";

export const metadata = {
  title: "Menu | ChaCha Restaurant",
  description: "Delicious Food",
};

export default function MenuPage() {
  const { menuPagePhoto } = imagesJson;
  return (
    <div>
      <PageHeadImage value="OUR DELICIOUS MENU" image={menuPagePhoto} />
      <Suspense fallback={<LoadingDiv />}>
        <MenuList category="pizza" />
        <MenuList category="breakfast" />
        <MenuList category="lunch" />
        <MenuList category="dinner" />
        <MenuList category="popular" />
        <MenuList category="must try" />
        <MenuList category="we reccomend" />
        <MenuList category="dessert" />
        <MenuList category="drink" />
      </Suspense>
    </div>
  );
}

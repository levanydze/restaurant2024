import React from "react";
import MapAndTimes from "./components/sectionsReusable/map&times/map&times";
import MainImage from "./homepage/HomePageMain-image/HomePageMain-image";
import TwoTextAbout from "./components/sectionsReusable/twoTextAbout/twoTextAbout";
import TextIntoPhoto from "./components/sectionsReusable/textIntoPhoto/textIntoPhoto";
import ReverseTextIntoPhoto from "./components/sectionsReusable/textIntoPhoto/reverseTextIntoPhoto";
import ReservTable from "./components/sectionsReusable/reservTable/reservTable";

export default function HomePage() {
  return (
    <main>
      <MainImage />
      <TwoTextAbout />
      <ReservTable />
      <TextIntoPhoto />
      <ReverseTextIntoPhoto />
      <MapAndTimes />
    </main>
  );
}

import React from "react";
import PageHeadImage from "../components/sectionsReusable/pageHeadImage/pageHeadImage";
import imagesJson from "../json/images.json";
import TwoTextAbout from "../components/sectionsReusable/twoTextAbout/twoTextAbout";
import TextIntoPhoto from "../components/sectionsReusable/textIntoPhoto/textIntoPhoto";
import ReverseTextIntoPhoto from "../components/sectionsReusable/textIntoPhoto/reverseTextIntoPhoto";
import PhotoText from "../components/sectionsReusable/photoText/photoText";
import FourBox from "../components/sectionsReusable/fourBox/fourBox";

export default function AboutPage() {
  const { aboutPagePhoto, PhotoTextImage } = imagesJson;
  return (
    <div>
      <PageHeadImage image={aboutPagePhoto} value="ABOUT US" />
      <PhotoText image={PhotoTextImage} />
      <TwoTextAbout />
      <TextIntoPhoto />
      <ReverseTextIntoPhoto />
      <FourBox />
    </div>
  );
}

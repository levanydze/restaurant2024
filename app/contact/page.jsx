import React from "react";
import MapAndTimes from "../components/sectionsReusable/map&times/map&times";
import PageHeadImage from "../components/sectionsReusable/pageHeadImage/pageHeadImage";
import ContactForm from "./form/contactForm";
import imagesJson from "../json/images.json";
export const metadata = {
  title: "Get In Touch | ChaCha Restaurant",
  description: "Delicious Food",
};

export default function ContactPage() {
  const { contactPagePhoto } = imagesJson;
  return (
    <div>
      <PageHeadImage value="CONTACT US" image={contactPagePhoto} />
      <ContactForm />
      <MapAndTimes />
    </div>
  );
}

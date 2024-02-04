import React from "react";
import imagesJson from "../json/images.json";
import ReservationHeadImage from "./pageHeadImage/reservationHeadImage";
import ReservationContactForm from "./reservationContactForm/reservationContactForm";
export const metadata = {
  title: "Reservation | ChaCha Restaurant",
  description: "Delicious Food",
};

export default function ReservationPage() {
  const { reservationPagePhoto } = imagesJson;
  return (
    <div>
      <ReservationHeadImage value="BOOK A TABLE" image={reservationPagePhoto} />
      <ReservationContactForm />
    </div>
  );
}

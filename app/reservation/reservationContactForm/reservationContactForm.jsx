import React from "react";
import styles from "./reservationContactForm.module.css";
import ReservationInputs from "./reservationInputs";

export default function ReservationContactForm() {
  return (
    <div className={styles.reservationWrapper}>
      <div className={styles.reservation}>
        <ReservationInputs />
      </div>
    </div>
  );
}

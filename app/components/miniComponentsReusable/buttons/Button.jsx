import Link from "next/link";
import React from "react";
export default function ReservationButton({ value, styling, target }) {
  return (
    <>
      <Link href={target} className={styling}>
        {value}
      </Link>
    </>
  );
}

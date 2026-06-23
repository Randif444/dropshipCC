"use client";
import { useState } from "react";

export default function DateHeader() {
  const [date] = useState(() =>
    new Date().toLocaleDateString("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  );

  return <div className="text-xs text-gray-600">{date}</div>;
}

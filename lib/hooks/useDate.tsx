import { useState } from "react";

type DateType = {
  time: string;
  day: string;
};

export default function useDate(): DateType {
  const [time, setTime] = useState("Loading Time...");
  const [day, setDay] = useState("Loading Day...");

  setInterval(() => {
    const current = new Date();
    setTime(current.toLocaleTimeString());
    setDay(current.toDateString());
  }, 1000);

  return { time, day };
}

import { useState } from "react";
import { useEffect } from "react";

export const Clock = () => {
  const [hourHand, setHourHand] = useState(null);
  const [minuteHand, setMinuteHand] = useState(null);
  const [secondHand, setSecondHand] = useState(null);

  useEffect(() => {
    setHourHand(document.querySelector(".data-hour-hand"));
    setMinuteHand(document.querySelector(".data-minute-hand"));
    setSecondHand(document.querySelector(".data-second-hand"));
  }, []);

  function setRotation(element, rotationRatio) {
    if (element) {
      element.style.setProperty("--rotation", rotationRatio * 360);
    } else {
      console.error("Element is null");
    }
  }

  function setClock() {
    const currentDate = new Date();

    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setClock();
    }, 1000);
    return () => clearInterval(intervalId);
  }, [hourHand, minuteHand, secondHand]);

  return null;
};

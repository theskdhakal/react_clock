import { useState } from "react";

export const Clock = () => {
  function Clock() {
    const [hourHand, setHourHand] = useState(null);
    const [minuteHand, setMinuteHand] = useState(null);
    const [secondHand, setSecondHand] = useState(null);

    function setClock() {
      const currentDate = new Date();

      const secondsRatio = currentDate.getSeconds() / 60;
      const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
      const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

      setRotation(secondHand, secondsRatio);
      setRotation(minuteHand, minutesRatio);
      setRotation(hourHand, hoursRatio);
    }

    function setRotation(element, rotationRatio) {
      if (element) {
        element.style.setProperty("--rotation", rotationRatio * 360);
      } else {
        console.error("Element is null");
      }
    }

    function initializeClock() {
      setHourHand(document.querySelector(".data-hour-hand"));
      setMinuteHand(document.querySelector(".data-minute-hand"));
      setSecondHand(document.querySelector(".data-second-hand"));
      setInterval(setClock, 1000);
    }

    return (
      <div>
        <div class="wrapper">
          <div class="clock">
            <div class="hand hour" data-hour-hand></div>
            <div class="hand minute" data-minute-hand></div>
            <div class="hand second" data-second-hand></div>
            <div class="number number1">1</div>
            <div class="number number2">2</div>
            <div class="number number3">3</div>
            <div class="number number4">4</div>
            <div class="number number5">5</div>
            <div class="number number6">6</div>
            <div class="number number7">7</div>
            <div class="number number8">8</div>
            <div class="number number9">9</div>
            <div class="number number10">10</div>
            <div class="number number11">11</div>
            <div class="number number12">12</div>
          </div>
        </div>
        <div onLoad={initializeClock}>
          <div className="data-hour-hand"></div>
          <div className="data-minute-hand"></div>
          <div className="data-second-hand"></div>
        </div>
      </div>
    );
  }
};

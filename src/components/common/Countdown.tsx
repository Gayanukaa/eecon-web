"use client";

import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [isLive, setIsLive] = useState(false);

  const targetDate = new Date("2024-12-12T08:30:00");
  const endLiveDate = new Date("2024-12-12T17:30:00");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const timeRemaining = targetDate.getTime() - now.getTime();
      const liveTimeRemaining = endLiveDate.getTime() - now.getTime();

      if (liveTimeRemaining < 0) {
        clearInterval(intervalId);
      } else if (timeRemaining < 0) {
        setIsLive(true);
        setDays(0);
        setHours(0);
        setMinutes(0);
      } else {
        const daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hoursRemaining = Math.floor(
          (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutesRemaining = Math.floor(
          (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
        );

        setDays(daysRemaining);
        setHours(hoursRemaining);
        setMinutes(minutesRemaining);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-white flex flex-col justify-center items-center min-h-[calc(100vh-650px)] p-2">
      <h2
        className={`font-bold mb-4 text-black ${
          isLive ? "text-4xl" : "text-2xl"
        }`}
      >
        {isLive ? "HAPPENING LIVE!" : "COUNTDOWN TO EECON 2024"}
      </h2>
      {!isLive && (
        <div className="flex w-full justify-center gap-4 max-w-2xl">
          <div className="bg-red-500 text-white flex-1 rounded-lg flex flex-col justify-center items-center py-2 px-1">
            <span className="text-4xl">{days}</span>
            <span className="text-lg">Days</span>
          </div>
          <div className="bg-red-500 text-white flex-1 rounded-lg flex flex-col justify-center items-center py-2 px-1">
            <span className="text-4xl">{hours}</span>
            <span className="text-lg">Hours</span>
          </div>
          <div className="bg-red-500 text-white flex-1 rounded-lg flex flex-col justify-center items-center py-2 px-1">
            <span className="text-4xl">{minutes}</span>
            <span className="text-lg">Minutes</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountdownTimer;

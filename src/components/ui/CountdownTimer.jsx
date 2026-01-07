import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const getTimeLeft = (endDate) => {
  const total = Date.parse(endDate) - Date.now();

  if (total <= 0) {
    return {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };
  }

  return {
    days: String(Math.floor(total / (1000 * 60 * 60 * 24))).padStart(2, "0"),
    hours: String(Math.floor((total / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
    minutes: String(Math.floor((total / 1000 / 60) % 60)).padStart(2, "0"),
    seconds: String(Math.floor((total / 1000) % 60)).padStart(2, "0"),
  };
};

const CountdownTimer = ({ endDate }) => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(endDate));
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(endDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  return (
    <div className="flex items-center gap-4">
      <div className="text-center">
        <p className="text-xs text-primary font-medium font-poppins">
          {t("Days")}
        </p>
        <p className=" text-2xl md:text-[32px] font-bold font-inter">
          {timeLeft.days}
        </p>
      </div>
      <span className="text-xl font-bold text-red-500">:</span>
      <div className="text-center">
        <p className="text-xs text-primary font-medium font-poppins">
          {t("Hours")}
        </p>
        <p className="text-2xl md:text-[32px] font-bold font-inter">
          {timeLeft.hours}
        </p>
      </div>
      <span className="text-xl font-bold text-red-500">:</span>
      <div className="text-center">
        <p className="text-xs text-primary font-medium font-poppins">
          {t("Minutes")}
        </p>
        <p className="text-2xl md:text-[32px] font-bold font-inter">
          {timeLeft.minutes}
        </p>
      </div>
      <span className="text-xl font-bold text-red-500">:</span>
      <div className="text-center">
        <p className="text-xs text-primary font-medium font-poppins">
          {t("Seconds")}
        </p>
        <p className="text-2xl md:text-[32px] font-bold font-inter">
          {timeLeft.seconds}
        </p>
      </div>
    </div>
  );
};

export default CountdownTimer;

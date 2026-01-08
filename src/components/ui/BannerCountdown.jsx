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

const BannerCountdown = ({ endDate }) => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(endDate));
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(endDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  return (
    <div className="flex items-center gap-6 font-poppins">
      <div className="flex flex-col items-center justify-center size-15.5 rounded-full bg-white text-primary">
        <p className="font-semibold">{timeLeft.days}</p>
        <p className="text-xs">{t("Days")}</p>
      </div>
      <div className="flex flex-col items-center justify-center size-15.5 rounded-full bg-white text-primary">
        <p className="font-semibold">{timeLeft.hours}</p>
        <p className="text-xs">{t("Hours")}</p>
      </div>
      <div className="flex flex-col items-center justify-center size-15.5 rounded-full bg-white text-primary">
        <p className="font-semibold">{timeLeft.minutes}</p>
        <p className="text-xs">{t("Minutes")}</p>
      </div>
      <div className="flex flex-col items-center justify-center size-15.5 rounded-full bg-white text-primary">
        <p className="font-semibold">{timeLeft.seconds}</p>
        <p className="text-xs">{t("Seconds")}</p>
      </div>
    </div>
  );
};

export default BannerCountdown;

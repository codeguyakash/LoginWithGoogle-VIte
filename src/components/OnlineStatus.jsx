import { useState } from "react";
import { useEffect } from "react";

const OnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  useEffect(() => {
    window.addEventListener("offline", () => {
      setIsOnline(false);
    });
    window.addEventListener("online", () => {
      setIsOnline(true);
    });
  }, []);

  return (
    <div>
      {isOnline ? (
        <h4 className="text-[18px] text-start mx-2 text-green-600 font-bold">
          Online ●
        </h4>
      ) : (
        <h4 className="text-[18px] text-start mx-2 text-red-600 font-bold">
          Offline ●
        </h4>
      )}
    </div>
  );
};

export default OnlineStatus;

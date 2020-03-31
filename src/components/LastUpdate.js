import React from "react";

function LastUpdate() {
  const date = new Date();
  const newDate = date.toLocaleString(["ban", "id"], {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  const newTime = date.toLocaleTimeString("en-US", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit"
  });
  return (
    <div className="last-update">
      Last Update: {String(newDate)} | {String(newTime)}
    </div>
  );
}
export default LastUpdate;

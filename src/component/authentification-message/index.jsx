import React from "react";

export default function ValidateMessage({ message, display, error }) {
  const BgColor = error ? "bg-red-500" : "bg-green-500";

  return (
    <div className={`flex ${BgColor} ${display} m-4`}>
      <div className="w-full h-7 text-white text-center">{message}</div>
    </div>
  );
}

import React from "react";

export default function CustomButton({ onClick, children }) {
  return (
    <div className="">
      <button
        className="bg-red-400 w-full rounded-full my-3 p-1"
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}

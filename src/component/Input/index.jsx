import React, { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";

export default function InputField({
  onChange,
  type,
  placeholder,
  label,
  message,
  className,
  value,
  error = false,
  disabled = false,
  labelStyle,
  touches,
  maxLength,
  moneyIcon = false,
}) {
  const [open, setOpen] = useState(false);
  const errorColor = error ? "text-red-500" : "text-green-500";

  return (
    <div className="flex flex-col w-full">
      <label className="capitalize">{label}</label>

      <div className="flex items-center justify-between w-full bg-white p-[5px] rounded-[10px]">
        <input
          onChange={onChange}
          className=" outline-none"
          type={open ? "text" : type}
          placeholder={placeholder}
        />
        {type === "password" && (
          <div
            onClick={function (e) {
              setOpen(!open);
            }}
          >
            {open ? <FaRegEye /> : <FaEyeSlash />}
          </div>
        )}
      </div>

      {error && (
        <div className={`flex items-center gap-1 ${errorColor}`}>
          <div className="">
            <MdErrorOutline />
          </div>
          <small className={""}>{message}</small>
        </div>
      )}
    </div>
  );
}

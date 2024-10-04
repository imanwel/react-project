import React from "react";
import { Link } from "react-router-dom";

export default function ForgotPassWOrd() {
  return (
    <div className="flex flex-col justify-center p-[7%] w-full">
      <div className="my-3">
        <h2 className="text-center font-semibold text-[25px]">
          Recover password
        </h2>
        <p className="text-center">
          Please provide your email and we'll send you a code.
        </p>
      </div>

      <form className="flex flex-col px-4 gap-[50px]">
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            className="p-[5px] rounded-[10px] outline-none"
            type="email"
            id="email"
            placeholder="example@gmail.com"
          />
        </div>

        <button className="bg-blue-400 rounded-full my-3 p-1">
          <Link to={"/auth/send-code"}>Send code</Link>
        </button>
      </form>

      <div className="text-xs font-semibold flex gap-2 justify-center">
        <p>Don't have an account?</p>
        <p className="text-[blue]">
          <Link to={"/auth"}>Create one</Link>
        </p>
      </div>
    </div>
  );
}

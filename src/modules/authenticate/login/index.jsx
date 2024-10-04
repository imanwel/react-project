import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex flex-col justify-center p-[7%] w-full">
      <div className="my-3">
        <h2 className="text-center font-semibold text-[25px]">Login</h2>
        <p className="text-center">Please provide your email and password.</p>
      </div>

      <form className="flex flex-col px-4 gap-[10px]">
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            className="p-[5px] rounded-[10px] outline-none"
            type="email"
            id="email"
            placeholder="example@gmail.com"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            className="p-[5px] rounded-[10px] outline-none"
            type="password"
            id="password"
            placeholder="********"
          />
          <p className="text-right text-[15px]">
            <Link to={"/auth/forgot-password"}>Forgot password?</Link>
          </p>
        </div>

        <button className="bg-blue-400 rounded-full my-3 p-1">Continue</button>
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

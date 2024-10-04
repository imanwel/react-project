import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function CreateAccount() {
  const navigate = useNavigate();

  function createAccount() {
    navigate("/auth/contact-info");
  }

  return (
    <div className="flex flex-col justify-center w-full">
      <div className="my-3">
        <h2 className="text-center font-semibold text-[25px]">
          Create an account
        </h2>
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
        </div>

        <div className="flex flex-col">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            className="p-[5px] rounded-[10px] outline-none"
            type="password"
            id="confirmPassword"
            placeholder="********"
          />
        </div>

        <button
          className="bg-blue-400 rounded-full my-3 p-1"
          onClick={createAccount}
        >
          Continue
        </button>
      </form>

      <div className="text-xs font-semibold flex gap-2 justify-center">
        <p>Already have an account?</p>
        <p className="text-[blue]">
          <Link to={"/auth/sign-in"}>Login</Link>
        </p>
      </div>
    </div>
  );
}

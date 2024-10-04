import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function NewPassWord() {
  const navigate = useNavigate();

  function passwordChange() {
    navigate("/auth/sign-in");
  }

  return (
    <div className="flex flex-col justify-center p-[7%] w-full">
      <div className="my-3">
        <h2 className="text-center font-semibold text-[25px]">
          Create new password
        </h2>
        <p className="text-center">
          Please create a password that is 8 characters long and includes at
          least one special character and one uppercase letter.
        </p>
      </div>

      <form className="flex flex-col px-4 gap-[10px]">
        <div className="flex flex-col">
          <label htmlFor="password">New password</label>
          <input
            className="p-[5px] rounded-[10px] outline-none"
            type="password"
            id="password"
            placeholder="********"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password">Confirm new password</label>
          <input
            className="p-[5px] rounded-[10px] outline-none"
            type="password"
            id="password"
            placeholder="********"
          />
        </div>

        <button
          className="bg-blue-400 rounded-full my-3 p-1"
          onClick={passwordChange}
        >
          Reset password
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

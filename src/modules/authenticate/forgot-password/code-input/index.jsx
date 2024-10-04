import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function CodeInput() {
  const navigate = useNavigate();

  function resetPassword() {
    navigate("/auth/new-password");
  }
  return (
    <div className="flex flex-col justify-center p-[7%] w-full">
      <div className="my-3">
        <h2 className="text-center font-semibold text-[25px]">
          Recover password
        </h2>
        <p className="text-center">
          enter the code sent to {"theemail@gmail.com"}
        </p>
      </div>

      <form className="flex flex-col px-4 gap-[10px]">
        <div className="flex flex-col ">
          <div className="flex justify-between">
            <input
              className="px-[15px] py-[10px] text-xl rounded-[10px] w-[20%] border border-black bg-transparent text-center"
              type="password"
            />
            <input
              className="px-[15px] py-[10px] text-xl rounded-[10px] w-[20%] border border-black bg-transparent text-center"
              type="password"
            />
            <input
              className="px-[15px] py-[10px] text-xl rounded-[10px] w-[20%] border border-black bg-transparent text-center"
              type="password"
            />
            <input
              className="px-[15px] py-[10px] text-xl rounded-[10px] w-[20%] border border-black bg-transparent text-center"
              type="password"
            />
          </div>

          <div className="text-xs font-semibold p-4 flex gap-2 justify-end">
            <p>Didn't get a code?</p>
            <p className="text-[blue]">
              <Link to={""}>Resend code</Link>
            </p>
          </div>
        </div>

        <button
          className="bg-blue-400 rounded-full my-3 p-1"
          onClick={resetPassword}
        >
          Continue
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

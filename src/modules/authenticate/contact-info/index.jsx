import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ContactInfo() {
  const navigate = useNavigate();

  function finishAccount() {
    navigate("/auth/sign-in");
  }

  return (
    <div className="flex flex-col justify-center w-full">
      <div className="my-5">
        <h2 className="text-center font-semibold text-[25px]">
          Contact information
        </h2>
        <p className="text-center">
          This information verifies you and lets us reach out to you.
        </p>
      </div>

      <form className="flex flex-col px-4 gap-[10px]">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <label htmlFor="firstName">First name</label>
            <input
              className="p-[5px] rounded-[10px] outline-none"
              type="text"
              id="firstName"
              placeholder="Emmanuel"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="lastName">Last name</label>
            <input
              className="p-[5px] rounded-[10px] outline-none"
              type="text"
              id="lastName"
              placeholder="James"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="businessName">Business name</label>
          <input
            className="p-[5px] rounded-[10px] outline-none"
            type="text"
            id="businessName"
            placeholder="Student"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="phoneNumber">Phone number</label>

          <div className="flex">
            <select
              name="tel"
              id="phoneNumber"
              className="rounded-[10px] rounded-r-none font-semibold px-2 bg-slate-200"
            >
              <option value="">+234</option>
              <option value="">+233</option>
            </select>
            <input
              className="p-[5px] rounded-[10px] rounded-l-none outline-none w-full"
              type="tel"
              placeholder="8012345678"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="businessAddress">Business address</label>
          <input
            className="p-[5px] rounded-[10px] outline-none"
            type="text"
            id="businessAddress"
            placeholder="7 Saraki Bukola Street"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="country">Country of registered business</label>
          <select
            name="tel"
            id="country"
            className="p-1 rounded-[10px] outline-none"
          >
            <option value="">Select option</option>
            <option value="">Nigeria</option>
          </select>
        </div>

        <div className="flex justify-between">
          <div className="flex flex-col w-[40%]">
            <label htmlFor="state">State</label>
            <select
              name="tel"
              id="state"
              className="p-1 rounded-[10px] outline-none"
            >
              <option value="">Select option</option>
              <option value="">Lagos</option>
            </select>
          </div>

          <div className="flex flex-col w-1/2">
            <label htmlFor="l-gov">Local government </label>
            <select
              name="tel"
              id="l-gov"
              className="p-1 rounded-[10px] outline-none"
            >
              <option value="">Select option</option>
              <option value="">Alimosho</option>
            </select>
          </div>
        </div>

        <button
          className="bg-blue-400 rounded-full my-3 p-1"
          onClick={finishAccount}
        >
          Finish
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

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../../../component/Input";
import ValidateMessage from "../../../component/authentification-message";

export default function Login() {
  function validateEmail(email) {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
  }

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  function verifyInfo(e) {
    e.preventDefault();
    let accountDetail = "";
    if (localStorage.getItem("accountDetail") === null) {
      accountDetail = [];
    } else {
      accountDetail = JSON.parse(localStorage.getItem("accountDetail"));
    }
    accountDetail.forEach((element, index) => {
      if (loginEmail === element.Email && loginPassword === element.Password) {
        navigate("/");
      } else {
        setErr(true);
        setTimeout(() => {
          setErr(false);
        }, 3000);
      }
    });
  }

  return (
    <div className="flex flex-col justify-center p-[7%] w-full">
      <div className="my-3">
        <h2 className="text-center font-semibold text-[25px]">Login</h2>
        <p className="text-center">Please provide your email and password.</p>
      </div>

      {err && (
        <div className="">
          <ValidateMessage
            message={"invalid credentials"}
            display={"block"}
            error={err}
          />
        </div>
      )}

      <form className="flex flex-col px-4 gap-[10px]">
        <InputField
          label="Email"
          onChange={(e) => setLoginEmail(e.target.value)}
          placeholder="User@email.com"
          type={"email"}
          error={
            loginEmail === ""
              ? false
              : !validateEmail(loginEmail)
              ? true
              : false
          }
          message={"not an email"}
        />

        <div className="flex flex-col">
          <InputField
            label="password"
            onChange={(e) => setLoginPassword(e.target.value)}
            placeholder="*****"
            type={"password"}
            // error={
            //   loginPassword === ""
            //     ? false
            //     : loginPassword.length < 8
            //     ? true
            //     : false
            // }
            // message={""}
          />
          <p className="text-right text-[15px]">
            <Link to={"/auth/forgot-password"}>Forgot password?</Link>
          </p>
        </div>

        <button
          onClick={verifyInfo}
          className="bg-blue-400 rounded-full my-3 p-1"
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

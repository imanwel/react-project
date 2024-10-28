import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../../../component/Input";

export default function CreateAccount() {
  const [formBody, setFormBody] = useState({
    Email: "",
    Password: "",
  });

  function validateEmail(email) {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
  }

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [c_Pasword, set_Cpassword] = React.useState("");
  const navigate = useNavigate();

  function createAccount(e) {
    e.preventDefault();

    if (validateEmail(email) && c_Pasword === password) {
      navigate("/auth/contact-info");
      // setEmail(email);
    } else {
      // alert("not an email");
    }

    // if (c_Pasword === password) {
    //   console.log("correct");
    //   // set_Cpassword(c_Pasword);
    // } else {
    //   console.log(null);
    // }

    const body = {
      ...formBody,
      Email: email,
      Password: c_Pasword,
    };

    console.log(body);

    let accountDetail;

    if (localStorage.getItem("accountDetail") === null) {
      accountDetail = [];
    } else {
      accountDetail = JSON.parse(localStorage.getItem("accountDetail"));
    }
    accountDetail.push(body);
    localStorage.setItem("accountDetail", JSON.stringify(accountDetail));
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
        <InputField
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="User@email.com"
          type={"email"}
          error={email === "" ? false : !validateEmail(email) ? true : false}
          message={"not an email"}
        />

        <InputField
          label="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="*****"
          type={"password"}
          error={password === "" ? false : password.length < 8 ? true : false}
          message={"password must not be less than 8"}
        />

        <InputField
          label="Confirm password"
          onChange={(e) => set_Cpassword(e.target.value)}
          placeholder="*****"
          type={"password"}
          error={
            c_Pasword === "" ? false : c_Pasword !== password ? true : false
          }
          message={"incorrect password"}
        />

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

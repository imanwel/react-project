import React from "react";
import { Link } from "react-router-dom";

const Authenticated = () => {
  return (
    <div className="flex gap-5">
      <p>this is the authenticated page</p>
      <p>
        <Link to={"/auth"} className="text-[red]">
          sign up
        </Link>
        /
        <Link to={"/auth/sign-in"} className="text-[blue]">
          sign in
        </Link>
      </p>
    </div>
  );
};

export default Authenticated;

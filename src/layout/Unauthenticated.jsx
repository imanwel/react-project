import React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { Outlet } from "react-router-dom";

const UnAuthenticate = () => {
  return (
    <div className="w-full h-screen bg-slate-300">
      <div className="flex h-full ">
        <div className="flex  justify-center flex-col w-1/2 border h-full px-8 gap-4">
          <h1 className="text-gray-800 font-extrabold text-[2rem]">
            Hello welcome to my page
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eius
            tempora numquam rerum id ad sed. Vel perferendis sunt dolor quia,
            voluptas, harum voluptate reiciendis vero recusandae doloribus,
            distinctio iste.
          </p>

          <div className="text-[14px] font-semibold text-gray-950">
            Follow us on our media platforms
            <div className="flex items-center gap-3 py-2">
              <FaSquareXTwitter /> <FaFacebookF /> <FaInstagramSquare />
            </div>
          </div>
        </div>

        <div className="bg-slate-100 w-1/2 flex justify-center items-center p-[7%]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UnAuthenticate;

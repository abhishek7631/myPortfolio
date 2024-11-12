import React, { useState } from "react";
import pic from "../../public/abhi.png";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Skills",
    },
    {
      id: 4,
      text: "Experiance",
    },
    {
      id: 5,
      text: "Projects",
    },
    {
      id: 6,
      text: "Contacts",
    },
  ];
  return (
    <div className="max-w-screen-2xl container h-16  mx-auto md:px-20 shadow-md fixed top-0 left-0 right-0 bg-white">
      <div className="flex justify-between items-center h-16">
        <div className="flex space-x-2">
          <img src={pic} alt="" className="h-12 w-12 rounded-full" />
          <h1 className="font-semibold text-xl cursor-pointer">
            Abhishe<span className="text-green-500 text-2xl">k</span>
            <p className="text-sm">Web Developer</p>
          </h1>
        </div>
        <div>
          <ul className="hidden md:flex space-x-8">
            {navItems.map(({ id, text }) => (
              <li
                className="hover:scale-105 duration-200 cursor-pointer"
                key={id}
              >
                {text}
              </li>
            ))}
          </ul>

          <div onClick={() => setMenu(!menu)} className="md:hidden">
            {menu ? <AiOutlineMenu size={24} /> : <IoCloseSharp size={24} />}
          </div>
        </div>
      </div>

      {/* mobile navbar */}
      {menu && (
        <div>
          <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl">
            {navItems.map(({ id, text }) => (
              <li
                className="hover:scale-105 duration-200 font-semibold cursor-pointer"
                key={id}
              >
                {text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

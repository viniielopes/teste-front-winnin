"use client";
import { useState } from "react";
import { RxMoon, RxSun } from "react-icons/rx";

const Header = () => {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    if (theme !== "dark") {
      setTheme("dark");

      document.documentElement.setAttribute("data-mode", "dark");
    } else {
      setTheme("light");
      document.documentElement.setAttribute("data-mode", "light");
    }
  };

  return (
    <div className="flex w-full items-center justify-center bg-primary">
      <div className="w-16"></div>
      <h1 className="py-6 text-4xl font-bold text-white">
        REACT<span className="text-feedback-warning">JS</span>
      </h1>
      <div className="w-16 pl-8">
        {theme === "light" ? (
          <RxMoon
            onClick={() => changeTheme()}
            className="h-6 w-6 cursor-pointer"
          ></RxMoon>
        ) : (
          <RxSun
            onClick={() => changeTheme()}
            className="h-6 w-6 cursor-pointer"
          ></RxSun>
        )}
      </div>
    </div>
  );
};
export default Header;

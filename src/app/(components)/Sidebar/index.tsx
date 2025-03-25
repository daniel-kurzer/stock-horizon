"use client";
import React from "react";
import { Menu } from "lucide-react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/app/redux";
import { setIsSidebarCollapsed } from "@/app/state";

const index = () => {

  const dispatch = useDispatch();
  const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed)

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))
  }

  const sidebarClassNames = `fixed flex flex-col ${isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"} bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40`

  return (
    <div className={sidebarClassNames}>
      {/* TOP LOGO */}
      <div className="flex gap-3 justify-between md:justify-normal items-center pt-8 m-auto">
        <img
          className="w-36 h-36"
          src="STOCK_HORIZON_Logo.png"
          alt="Logo"
        />

        <button
          className="px-3 py-3 bg-gray-100 rounded-full hover:bg-purple-300"
          onClick={toggleSidebar}
        >
          <Menu className="h-4 w-4" />
        </button>
      </div>
      
      {/* Links */}
    <div className="flex-grow mt-8">
      {/* Insert Links */}
    </div>

    {/* FOOTER */}
    <div>
      <p className="text-center text-xs text-gray-500">&copy; KurzerCode 2025</p>
    </div>
    </div>
  );
};

export default index
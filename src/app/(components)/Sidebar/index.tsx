"use client";
import React from "react";
import { Menu } from "lucide-react";

const index = () => {
  return (
    <div>
      {/* TOP LOGO */}
      <div className="flex gap-3 justify-between md:justify-normal items-center pt-8">
        <img
          className="w-36 h-36"
          src="STOCK_HORIZON_Logo.png"
          alt="Logo"
        />

        <button
          className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-purple-300"
          onClick={() => {}}
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
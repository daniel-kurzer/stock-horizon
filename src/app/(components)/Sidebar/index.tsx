"use client";
import React from "react";
import { Archive, CircleDollarSign, Clipboard, Layout, LucideIcon, Menu, SlidersHorizontal, User } from "lucide-react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/app/redux";
import { setIsSidebarCollapsed } from "@/app/state";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface SidebarLinkProps {
  href: string; icon: LucideIcon; label: string; isCollapsed: boolean
}

const SidebarLink = ({
  href, icon: Icon, label, isCollapsed
} : SidebarLinkProps) => {
  const pathname = usePathname()
  const isActive = pathname === href || (pathname === "/" && href === "/dashboard")

  return(
    <Link href={href}>
      <div className={`cursor-pointer flex items-center ${isCollapsed ? "justify-center py-4" : "justify-start py-4 px-8"} hover:text-blue-500 hover:bg-purple-100 gap-3 transition-colors ${isActive ? "bg-purple-200 text-white" : ""}`}>
        <Icon className="h-6 w-6 !text-gray-700" />
        <span className={`${isCollapsed ? "hidden" : "block"} font-medium text-gray-700`}>{label}</span>
      </div>
    </Link>
  )
}

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
      <div className={`flex gap-3 justify-between md:justify-normal items-center pt-8 m-auto ${isSidebarCollapsed ? "px-0" : "px-8"}`}>
        <img
          className={`w-20 h-20 transition-all duration-500 ${isSidebarCollapsed ? "w-10 h-10" : "w-20 h-20"}`}
          src="SH-Logo.png"
          alt="Logo"
        />
        <h1 className={`font-extrabold [text-shadow:_0_4px_4px_rgb(99_102_241_/_0.3)] text-lg filter drop-shadow-md leading-none text-center text-gray-600 ${isSidebarCollapsed ? "hidden" : "block"}`}>STOCK HORIZON</h1>

        
      </div>
      
      {/* Links */}
    <div className="flex-grow mt-8">
      <SidebarLink href="/dashboard" icon={Layout} label="Dashboard" isCollapsed={isSidebarCollapsed} />
      <SidebarLink href="/inventory" icon={Archive} label="Inventory" isCollapsed={isSidebarCollapsed} />
      <SidebarLink href="/products" icon={Clipboard} label="Products" isCollapsed={isSidebarCollapsed} />
      <SidebarLink href="/users" icon={User} label="Users" isCollapsed={isSidebarCollapsed} />
      <SidebarLink href="/settings" icon={SlidersHorizontal} label="Settings" isCollapsed={isSidebarCollapsed} />
      <SidebarLink href="/expenses" icon={CircleDollarSign} label="Expenses" isCollapsed={isSidebarCollapsed} />
    </div>

    {/* FOOTER */}
    <div className={`${isSidebarCollapsed ? "hidden" : "block"}`}>
      <p className="text-center text-xs text-gray-500 p-2">&copy; KurzerCode GmbH 2025</p>
    </div>
    </div>
  );
};

export default index
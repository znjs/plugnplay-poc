"use client";

import { CircleGauge, Cog, Gamepad2, ShieldCheck } from "lucide-react";
import React from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NAV_ITEMS = [
  {
    icon: <CircleGauge />,
    title: "Opportunities",
    path: "/opportunities"
  },
  {
    icon: <Gamepad2 />,
    title: "Gamification",
    path: "/gamification"
  },
  {
    icon: <ShieldCheck />,
    title: "Admin",
    path: "/admin"
  }
];

export const SideNav = () => {
  const path = usePathname();
  console.log(path);
  return (
    <div className="dark:bg-gray-700 bg-green-600 p-2 flex flex-col justify-between">
      <div>
        <TooltipProvider>
          {NAV_ITEMS.map((item) => (
            <div
              key={item.path}
              className={
                "flex items-center p-2 rounded-lg hover:bg-gray-600 " +
                (path === item.path ? "bg-gray-600" : "")
              }
            >
              <a href={item.path} className="m-1 flex items-center gap-3">
                <Tooltip>
                  <TooltipTrigger>{item.icon}</TooltipTrigger>
                  <TooltipContent side="right">{item.title}</TooltipContent>
                </Tooltip>
              </a>
            </div>
          ))}
        </TooltipProvider>
      </div>
      <Link
        href={"/settings"}
        className={
          "rounded-lg hover:bg-gray-600 p-2 " + (path === "/settings" ? "bg-gray-600" : "")
        }
      >
        <Cog />
      </Link>
    </div>
  );
};

import { SideNav } from "@/components/SideNav";
import React from "react";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="bg-red-900 grow flex">
      <SideNav />
      {children}
    </div>
  );
};

export default Layout;

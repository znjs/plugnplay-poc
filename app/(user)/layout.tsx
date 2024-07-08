import { SideNav } from "@/components/SideNav";
import React from "react";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="grow flex">
      <SideNav />
      <div className="p-2 grow">{children}</div>
    </div>
  );
};

export default Layout;

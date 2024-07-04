import { Cog } from "lucide-react";
import { ToggleTheme } from "./ToggleTheme";

export const Navbar = () => {
  return (
    <div className="p-2 flex bg-gray-800 items-center justify-between">
      <div className="flex gap-2 item-center">
        <Cog />
        <p>POC App</p>
      </div>
      <ToggleTheme />
    </div>
  );
};

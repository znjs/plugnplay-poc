import { Login } from "@/components/Login";
import { ToggleTheme } from "@/components/ToggleTheme";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center justify-center grow">
      <Login />
    </main>
  );
}

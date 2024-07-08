"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { usePathname } from "next/navigation";
import path from "path";
import React from "react";
import ActionCards from "./_components/ActionCards";
import BattleCard from "./_components/BattleCard";

const Opportunity = () => {
  const path = usePathname();
  console.log(path);
  return (
    <div>
      <h1 className="font-semibold">
        <span className="text-xl">Opportunity:</span>{" "}
        <span className="opacity-70">{path.split("/")[2]}</span>
      </h1>
      <Card className="p-2 mt-2 flex">
        <div>
          <img src="/map.png" alt="map" className="w-40" />
          <p>Location: 24, Boulivard California State, USA</p>
        </div>
        <div>
          <h1 className="text-xl">Client Details:</h1>
          <p>Name: John Doe</p>
          <p>Email: {path.split("/")[2].toLowerCase().replace(" ", "")}</p>
          <p>Phone: 1234567890</p>
        </div>
      </Card>
      <div className="flex items-center justify-center h-60 bg-gray-800 mt-2">
        <h1>Customer 360 details</h1>
      </div>
      <div className="flex items-center justify-center p-4 bg-gray-800 mt-2">
        <h1>
          Twilio call: <Button className="bg-green-600 hover:bg-green-700 text-white">Call</Button>
        </h1>
      </div>
      <div className="flex items-center gap-2 mt-2">
        <ActionCards />
        <BattleCard />
      </div>
    </div>
  );
};

export default Opportunity;

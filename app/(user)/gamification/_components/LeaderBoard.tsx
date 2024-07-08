"use client";

import { Avatar } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";

export const Leaderboard = ({ contenders }: { contenders: { name: string; score: number }[] }) => {
  // Destructure the top 3 and the rest of the contenders
  const [first, second, third, ...others] = contenders;

  return (
    <Card>
      <CardHeader>
        <p>Leaderboard</p>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-evenly">
          <div className="leader">
            <p>1st: {first.name}</p>
            <p>{first.score} points</p>
          </div>
          <div className="leader">
            <p>2nd: {second.name}</p>
            <p>{second.score} points</p>
          </div>
          <div className="leader">
            <p>3rd: {third.name}</p>
            <p>{third.score} points</p>
          </div>
        </div>
        <img src="/leaderboard.avif" alt="leader board" className="mx-auto mt-4" />
      </CardContent>
    </Card>
  );
};

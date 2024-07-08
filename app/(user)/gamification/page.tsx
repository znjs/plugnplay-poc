import React from "react";
import { Leaderboard } from "./_components/LeaderBoard";

const sampleContenders = [
  { name: "Alice", score: 95 },
  { name: "Bob", score: 85 },
  { name: "Charlie", score: 75 },
  { name: "David", score: 70 },
  { name: "Eve", score: 65 },
  { name: "Frank", score: 60 }
];

const Gamification = () => {
  return (
    <div>
      <h1 className="text-xl font-semibold mb-2">Gamification</h1>
      <Leaderboard contenders={sampleContenders} />
    </div>
  );
};

export default Gamification;

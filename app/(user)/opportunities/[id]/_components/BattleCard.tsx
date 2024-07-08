"use client";

import React, { useEffect } from "react";

const BattleCard = () => {
  const [data, setData] = React.useState({ data: { message: "" } });

  const getData = async () => {
    const res = await fetch("/api/battlecard/action").then((res) => res.json());
    return res;
  };

  useEffect(() => {
    (async () => {
      let res = await getData();
      console.log(res, "res");
      setData(res);
    })();
  }, []);

  return (
    <div className="bg-gray-800 rounded-lg h-40 flex items-center justify-center grow">
      BattleCard : {data.data.message}
    </div>
  );
};

export default BattleCard;

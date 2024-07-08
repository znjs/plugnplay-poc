"use client";

import React, { useEffect, useState } from "react";

const ActionCards = () => {
  const [res, setRes] = useState({ data: { message: "" } });

  const getData = async () => {
    const res = await fetch("/api/actioncard/action").then((res) => res.json());
    console.log(res);
    return res;
  };

  useEffect(() => {
    (async () => {
      const res = await getData();
      console.log("res", res);
      setRes(res);
    })();
  }, []);

  return (
    <div className="bg-gray-800 rounded-lg h-40 flex items-center justify-center grow">
      ActionCards: {res.data.message}
    </div>
  );
};

export default ActionCards;

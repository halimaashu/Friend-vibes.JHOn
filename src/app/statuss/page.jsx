"use client";

import React, { useContext } from "react";
import { PieChart, Pie, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { Context } from "@/provider/ContextProvider";
import { RechartsDevtools } from "@recharts/devtools";

const StatusPage = ({ isAnimationActive = true }) => {
  const [remember] = useContext(Context);

  const callLag = remember.filter((re) => re.type === "call");
  const massageLag = remember.filter((re) => re.type === "Message");
  const videoLag = remember.filter((re) => re.type === "Video-call");

  const data = [
    { name: "call", value: callLag.length, fill: "#3b82f6" },
    { name: "text", value: massageLag.length, fill: "#ef4444" },
    { name: "video", value: videoLag.length, fill: "#73d13d" },
  ];

  const total = data.reduce((sum, item) => sum + item.value, 0);

  if (total === 0) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold text-center text-yellow-500 px-4">
          no data available
        </h1>
      </div>
    );
  }

  return (
    <div className=" my-10 shadow p-10 rounded-md border border-slate-300 container mx-auto">
      <h2 className="font-semibold text-3xl mb-16 text-center">
        Your Call Logs
      </h2>
      <PieChart
        style={{
          width: "100%",
          maxWidth: "500px",
          maxHeight: "80vh",
          margin: "auto",
          aspectRatio: 1,
        }}
        responsive
      >
        <Pie
          data={data}
          innerRadius="80%"
          outerRadius="100%"
          // Corner radius is the rounded edge of each pie slice
          cornerRadius="50%"
          fill="#8884d8"
          // padding angle is the gap between each pie slice
          paddingAngle={5}
          dataKey="value"
          isAnimationActive={true}
        />
        <Legend />
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default StatusPage;
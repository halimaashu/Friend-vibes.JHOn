"use client";

import React, { useContext } from "react";
import { PieChart, Pie, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { RechartsDevtools } from "@recharts/devtools";
import { Context } from "@/provider/ContextProvider";

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
  const total=data.reduce((sum ,item)=> sum+item.value,0)

  return (
    <div className="">
      {total === 0 ? (
        <h1 className="text-6xl font-bold py-20 text-yellow-500 text-center">no data found here</h1>
      ) : (
        <div className="w-full h-[400px]">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                innerRadius={80}
                outerRadius={120}
                cornerRadius={10}
                fill="#ef4444"
                paddingAngle={5}
                isAnimationActive={isAnimationActive}
              />
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>

          <RechartsDevtools />
        </div>
      )}
    </div>
  );
};

export default StatusPage;

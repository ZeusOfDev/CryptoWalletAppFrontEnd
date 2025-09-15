import React from "react";
import {
  Tooltip as ReTooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import currency from "../utils/Currency";

function BalanceGrowth({ snapshots, height }) {
  return (
    <div
      style={{ height: `${height}rem` }}
      className="bg-inherit rounded-2xl p-4"
    >
      <h2 className="text-lg font-semibold mb-2 text-slate-100">
        Balance Over Time
      </h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          data={snapshots}
          margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis
            tickFormatter={(v) => "$" + (v / 1000).toFixed(1) + "k"}
            width={60}
          />
          <ReTooltip formatter={(v) => currency(v)} />
          <Line type="monotone" dataKey="value" dot={false} strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
export default BalanceGrowth;

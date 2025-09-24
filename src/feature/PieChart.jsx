/* eslint-disable react/prop-types */
import React, { useMemo } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip as ReTooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "#6366F1",
  "#22C55E",
  "#F59E0B",
  "#EF4444",
  "#06B6D4",
  "#8B5CF6",
  "#EC4899",
  "#3B82F6",
  "#84CC16",
  "#F97316",
];

function numberFormat(n) {
  return n.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export default function PortfolioPie({ assets, height }) {
  const pieData = useMemo(
    () => assets.map((a) => ({ name: a.symbol, value: a.amount * a.price })),
    [assets]
  );

  return (
    <div
      style={{ height: `${height}rem` }}
      className="bg-inherit rounded-2xl p-4"
    >
      <h2 className="text-lg font-semibold mb-2 text-slate-100">
        Portfolio Breakdown
      </h2>
      <ResponsiveContainer width="100%" height="90%">
        <PieChart>
          <Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            innerRadius={50}
            outerRadius={80}
            label={({ percent }) => `${(percent * 100).toFixed(1)}%`} // 👈 show %
          >
            {pieData.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend />
          <ReTooltip
            formatter={(v, n, p) => [numberFormat(v), p?.payload?.name]}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

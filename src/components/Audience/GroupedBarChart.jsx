import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { category: "Shares", gray: 40, blue: 60 },
  { category: "Comment", gray: 30, blue: 50 },
  { category: "Likes", gray: 70, blue: 80 },
  { category: "Saves", gray: 80, blue: 90 },
  { category: "Follows", gray: 20, blue: 30 },
];

const GroupedBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 20,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="gray" fill="#B0BEC5" name="Gray Bar" />
        <Bar dataKey="blue" fill="#2979FF" name="Blue Bar" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default GroupedBarChart;

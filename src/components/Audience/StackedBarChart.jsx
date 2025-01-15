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
  { ageGroup: "13-17 years", females: 40, males: 60 },
  { ageGroup: "18-24 years", females: 50, males: 70 },
  { ageGroup: "25-34 years", females: 60, males: 80 },
  { ageGroup: "35-44 years", females: 30, males: 50 },
  { ageGroup: "45-54 years", females: 20, males: 40 },
  { ageGroup: "55-64 years", females: 10, males: 30 },
  { ageGroup: "65+ years", females: 5, males: 15 },
];

const StackedBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        layout="vertical"
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 40,
          bottom: 20,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis dataKey="ageGroup" type="category" />
        <Tooltip />
        <Legend />
        <Bar dataKey="females" stackId="a" fill="#E57373" name="Females" />
        <Bar dataKey="males" stackId="a" fill="#2979FF" name="Males" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default StackedBarChart;

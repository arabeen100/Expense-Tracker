import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import type { Expense } from "../types";
import { useState, useEffect } from "react";

const COLORS = [
  "#8884d8",
  "#82ca9d",
  "#ffc658",
  "#ff7f50",
  "#00bfff",
  "#ff69b4",
  "#a0522d",
  "#8a2be2",
  "#3cb371",
  "#ff4500",
];

interface Props {
  expenses: Expense[];
  income: number;
}

const ExpenseChart = ({ expenses, income }: Props) => {

  const grouped = expenses.reduce<Record<string, number>>((acc, exp) => {
    acc[exp.category] = (acc[exp.category] || 0) + exp.amount;
    return acc;
  }, {});
  const [radius, setRadius] = useState(100);

  const totalExpenses = Object.values(grouped).reduce((a, b) => a + b, 0);
  const remaining = income - totalExpenses;

  const data = [
    ...Object.entries(grouped).map(([name, value]) => ({ name, value })),
    { name: "Remaining", value: remaining > 0 ? remaining : 0 },
  ];
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setRadius(75);   
      else if (window.innerWidth < 1024) setRadius(90); 
      else setRadius(110); 
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow w-full h-[400px]">
      <h2 className="text-xl font-bold mb-4">Expenses Overview</h2>
      <ResponsiveContainer  width="100%" height="100%">
        <PieChart >
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={radius}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={
                  entry.name === "Remaining"
                    ? "#4caf50"
                    : COLORS[index % COLORS.length]
                }
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpenseChart;

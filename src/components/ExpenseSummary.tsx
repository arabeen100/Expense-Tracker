import type { Expense } from "../types";

interface Props {
  expenses: Expense[];
  income: number;
}

export default function ExpenseSummary({ expenses, income }: Props) {
  const total = expenses.reduce((sum, e) => sum + e.amount, 0);
  const remaining = income - total;

  return (
    <div className="mb-6 border p-4 rounded bg-gray-50">
      <h2 className="text-xl font-semibold mb-3">Summary</h2>
      <p>Total Income: ${income}</p>
      <p>Total Expenses: ${total}</p>
      <p>Remaining: ${remaining}</p>
    </div>
  );
}

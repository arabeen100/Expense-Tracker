import type { Expense } from "../types";

interface Props {
  expenses: Expense[];
  onDelete: (id: string) => void;
}

export default function ExpenseList({ expenses, onDelete }: Props) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-3">Expenses</h2>
      {expenses.length === 0 ? (
        <p className="text-gray-600">No expenses yet.</p>
      ) : (
        <ul className="space-y-2">
          {expenses.map((expense) => (
            <li
              key={expense.id}
              className="flex justify-between items-center border p-2 rounded"
            >
              <div>
                <p className="font-medium">{expense.title}</p>
                <p className="text-sm text-gray-500">
                  {expense.category} | {expense.date}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-bold">${expense.amount}</span>
                <button
                  onClick={() => onDelete(expense.id)}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

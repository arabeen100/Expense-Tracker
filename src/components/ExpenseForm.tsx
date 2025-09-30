import { useState } from "react";
import type { Expense } from "../types";

interface Props {
  onAdd: (expense: Expense) => void;
}

export default function ExpenseForm({ onAdd }: Props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState<number>(0);
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || amount <= 0 || !category || !date) return;

    const newExpense: Expense = {
      id: crypto.randomUUID(),
      title,
      amount,
      category,
      date,
    };

    onAdd(newExpense);

    setTitle("");
    setAmount(0);
    setCategory("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 space-y-3">
      <input
        type="text"
        placeholder="Expense title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 rounded w-full"
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount || ""}
        onChange={(e) => setAmount(Number(e.target.value))}
        className="border p-2 rounded w-full"
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border p-2 rounded w-full"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="border p-2 rounded w-full"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded w-full"
      >
        Add Expense
      </button>
    </form>
  );
}

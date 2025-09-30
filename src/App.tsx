import { useState } from "react";
import { saveToStorage, getFromStorage } from "./utils/localStorage";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseSummary from "./components/ExpenseSummary";
import ExpenseChart from "./components/ExpenseChart";
import type { Expense } from "./types";

function App() {
  const [expenses, setExpenses] = useState<Expense[]>(() => getFromStorage("expenses", []));
  const [income, setIncome] = useState<string>(() => getFromStorage("income", ""));
   useEffect(() => {
    saveToStorage("income", income);
  }, [income]);

  useEffect(() => {
    saveToStorage("expenses", expenses);
  }, [expenses]);
  const handleIncomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIncome(e.target.value);
  };

  const addExpense = (expense: Expense) => {
     const updatedExpenses = [...expenses, expense];
    const total = updatedExpenses.reduce((sum, e) => sum + e.amount, 0);
    if(total>Number(income)){
      toast.error("⚠️ Cannot add more expenses as you have reached your income limit!");
      return;
    }else{
    setExpenses(updatedExpenses);
    checkBudgetAlerts(updatedExpenses);}
  };

  const deleteExpense = (id: string) => {
    const updatedExpenses = expenses.filter((e) => e.id !== id);
    setExpenses(updatedExpenses);
    checkBudgetAlerts(updatedExpenses);
  };

  const checkBudgetAlerts = (updatedExpenses: Expense[]) => {
    const total = updatedExpenses.reduce((sum, e) => sum + e.amount, 0);

    if (income&& Number(income) > 0) {
      if (total >= Number(income)) {
        toast.warn("⚠️ You’ve reached your income limit!");
      } else if (total >= Number(income) * 0.8) {
        toast.info("ℹ️ You’ve reached 80% of your income!");
      }
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">💰 Expense Tracker</h1>

      <div className="mb-6">
        <label className="block font-medium mb-2">Set Your Income:</label>
        <input
          type="text"
          value={income}
          onChange={handleIncomeChange}
          className="border p-2 rounded w-full"
          placeholder="Enter your monthly income"
        />
      </div>

      <ExpenseForm onAdd={addExpense} />
      <ExpenseList expenses={expenses} onDelete={deleteExpense} />
      <ExpenseSummary expenses={expenses} income={Number(income)} />
      <ExpenseChart expenses={expenses} income={Number(income)} />

      <ToastContainer position="top-right" />
    </div>
  );
}

export default App;

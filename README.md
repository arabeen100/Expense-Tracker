# 💰 Expense Tracker

A simple and intuitive **Expense Tracker** built with **React**, **TypeScript**, and **Tailwind CSS**.  
This app helps you manage your expenses, set a monthly budget, and visualize your spending through interactive charts.

---

## ✨ Features

- 💵 Set a **monthly income/budget limit**  
- ➕ Add expenses with title, amount, category, and date  
- ✏️ Edit existing expenses  
- 🗑️ Delete individual expenses  
- 📊 View a **summary of total expenses, remaining balance, and budget usage**  
- 📈 Interactive **charts** to visualize spending trends by category  
- 🔔 Budget **alerts with toast notifications**:  
  - ⚠️ Warning when expenses exceed **80% of income**  
  - ❌ Error when expenses go **over the limit**  
- 💾 Data is saved in **localStorage** (no backend required)  

---

## 🚀 Tech Stack

- **React** (with Hooks & Functional Components)  
- **TypeScript** (for type safety)  
- **Tailwind CSS** (for styling)  
- **Recharts** (for data visualization & charts)  
- **React Toastify** (for budget alerts & notifications)  
- **localStorage** (to persist data)  

---

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/arabeen100/Expense-Tracker
   cd expense-tracker
   npm install

## 🛠️ Development

Run the app in development mode:

npm run dev

## 🏗️ Build

Build the app for production:

npm run build

## 🌍 Deployment

This project is deployed and accessible online.
✨ You can explore the live website here: https://expense-tracker-arabeen.vercel.app/

## 📂 Folder Structure
src/
├── components/
│   ├── BudgetInput.tsx
│   ├── ExpenseForm.tsx
│   ├── ExpenseList.tsx
│   ├── ExpenseSummary.tsx
│   └── ExpenseChart.tsx
├── utils/
│   └── localStorage.ts
├── types.ts
├── App.tsx
└── main.tsx

## 👩‍💻 Author

Mahmoud Samy Arabeen

## 📜 License

This project is open-source and available under the MIT License.
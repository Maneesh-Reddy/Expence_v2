import { useMemo } from 'react';
import { FaChartLine, FaCalendarAlt, FaShoppingCart, FaChartPie } from 'react-icons/fa';

function ExpenseSummary({ expenses }) {
  const summary = useMemo(() => {
    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    const today = new Date().toISOString().split('T')[0];
    const todayExpenses = expenses
      .filter(expense => expense.date === today)
      .reduce((sum, expense) => sum + expense.amount, 0);
    
    const categories = expenses.reduce((acc, expense) => {
      if (!acc[expense.category]) acc[expense.category] = 0;
      acc[expense.category] += expense.amount;
      return acc;
    }, {});
    
    const topCategory = Object.entries(categories)
      .sort(([,a], [,b]) => b - a)[0]?.[0] || 'None';

    return { total, todayExpenses, topCategory };
  }, [expenses]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Total Expenses</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">₹{summary.total.toFixed(2)}</p>
          </div>
          <FaChartLine className="text-blue-500 text-3xl" />
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Today's Expenses</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">₹{summary.todayExpenses.toFixed(2)}</p>
          </div>
          <FaCalendarAlt className="text-green-500 text-3xl" />
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Top Category</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">{summary.topCategory}</p>
          </div>
          <FaChartPie className="text-purple-500 text-3xl" />
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Total Transactions</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">{expenses.length}</p>
          </div>
          <FaShoppingCart className="text-orange-500 text-3xl" />
        </div>
      </div>
    </div>
  );
}

export default ExpenseSummary;
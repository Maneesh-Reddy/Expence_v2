import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import ExpenseList from './ExpenseList';
import ExpenseForm from './ExpenseForm';
import ExpenseChart from './ExpenseChart';
import ExpenseSummary from './ExpenseSummary';
import SearchBar from './SearchBar';
import axios from 'axios';
import { toast } from 'react-toastify';

function Dashboard() {
  const [expenses, setExpenses] = useState([]);
  const [filteredExpenses, setFilteredExpenses] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetchExpenses();
  }, [user.id]);

  useEffect(() => {
    setFilteredExpenses(expenses);
  }, [expenses]);

  const fetchExpenses = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/expenses?userId=${user.id}`);
      setExpenses(response.data);
    } catch (error) {
      toast.error('Failed to fetch expenses');
    }
  };

  const handleSearch = (searchTerm) => {
    if (!searchTerm) {
      setFilteredExpenses(expenses);
      return;
    }

    const filtered = expenses.filter(expense => 
      expense.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expense.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expense.amount.toString().includes(searchTerm) ||
      expense.date.includes(searchTerm)
    );
    setFilteredExpenses(filtered);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <ExpenseSummary expenses={expenses} />
      
      <div className="mt-8 mb-6">
        <SearchBar onSearch={handleSearch} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-8">
          <ExpenseForm onExpenseAdded={fetchExpenses} />
          <ExpenseList expenses={filteredExpenses} onExpenseUpdated={fetchExpenses} />
        </div>
        <div className="space-y-8">
          <ExpenseChart expenses={filteredExpenses} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
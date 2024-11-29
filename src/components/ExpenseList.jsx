import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

function ExpenseList({ expenses, onExpenseUpdated }) {
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});

  const handleEdit = (expense) => {
    setEditingId(expense.id);
    setEditForm(expense);
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:3001/expenses/${editingId}`, editForm);
      setEditingId(null);
      onExpenseUpdated();
      toast.success('Expense updated successfully');
    } catch (error) {
      toast.error('Failed to update expense');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/expenses/${id}`);
      onExpenseUpdated();
      toast.success('Expense deleted successfully');
    } catch (error) {
      toast.error('Failed to delete expense');
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Expense List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-700">
              <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-200">Date</th>
              <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-200">Category</th>
              <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-200">Amount</th>
              <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-200">Description</th>
              <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-200">Actions</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id} className="border-b dark:border-gray-700">
                {editingId === expense.id ? (
                  <>
                    <td className="px-4 py-2">
                      <input
                        type="date"
                        value={editForm.date}
                        onChange={(e) => setEditForm({ ...editForm, date: e.target.value })}
                        className="w-full p-1 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      />
                    </td>
                    <td className="px-4 py-2">
                      <select
                        value={editForm.category}
                        onChange={(e) => setEditForm({ ...editForm, category: e.target.value })}
                        className="w-full p-1 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      >
                        <option value="Food">Food</option>
                        <option value="Transport">Transport</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Shopping">Shopping</option>
                        <option value="Others">Others</option>
                      </select>
                    </td>
                    <td className="px-4 py-2">
                      <input
                        type="number"
                        value={editForm.amount}
                        onChange={(e) => setEditForm({ ...editForm, amount: parseFloat(e.target.value) })}
                        className="w-full p-1 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      />
                    </td>
                    <td className="px-4 py-2">
                      <input
                        type="text"
                        value={editForm.description}
                        onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                        className="w-full p-1 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      />
                    </td>
                    <td className="px-4 py-2">
                      <button
                        onClick={handleUpdate}
                        className="bg-green-500 text-white px-2 py-1 rounded mr-2 hover:bg-green-600"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditingId(null)}
                        className="bg-gray-500 text-white px-2 py-1 rounded hover:bg-gray-600"
                      >
                        Cancel
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="px-4 py-2 text-gray-900 dark:text-gray-200">{expense.date}</td>
                    <td className="px-4 py-2 text-gray-900 dark:text-gray-200">{expense.category}</td>
                    <td className="px-4 py-2 text-gray-900 dark:text-gray-200">₹{expense.amount.toFixed(2)}</td>
                    <td className="px-4 py-2 text-gray-900 dark:text-gray-200">{expense.description}</td>
                    <td className="px-4 py-2">
                      <button
                        onClick={() => handleEdit(expense)}
                        className="bg-blue-500 text-white px-2 py-1 rounded mr-2 hover:bg-blue-600"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(expense.id)}
                        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ExpenseList;
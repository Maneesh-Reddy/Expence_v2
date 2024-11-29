import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { FaMoon, FaSun, FaUser, FaBell, FaLock, FaPalette, FaCog } from 'react-icons/fa';
import axios from 'axios';
import { toast } from 'react-toastify';

function Settings({ isOpen, onClose }) {
  const { user, login } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [name, setName] = useState(user?.name || '');
  const [notifications, setNotifications] = useState(true);
  const [currency, setCurrency] = useState('₹');

  const handleUpdateName = async () => {
    try {
      const response = await axios.patch(`http://localhost:3001/users/${user.id}`, {
        ...user,
        name
      });
      login(response.data);
      toast.success('Name updated successfully');
    } catch (error) {
      toast.error('Failed to update name');
    }
  };

  const handleToggleNotifications = () => {
    setNotifications(!notifications);
    toast.success(`Notifications ${!notifications ? 'enabled' : 'disabled'}`);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl w-[480px] max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
          <FaCog className="mr-2" />
          Settings
        </h2>
        
        <div className="space-y-6">
          {/* Profile Section */}
          <div className="border-b dark:border-gray-700 pb-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
              <FaUser className="mr-2" />
              Profile Settings
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2">
                  Display Name
                </label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="flex-1 p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                  <button
                    onClick={handleUpdateName}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Appearance Section */}
          <div className="border-b dark:border-gray-700 pb-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
              <FaPalette className="mr-2" />
              Appearance
            </h3>
            <div className="flex items-center justify-between">
              <span className="text-gray-700 dark:text-gray-200">Theme</span>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {theme === 'dark' ? (
                  <FaSun className="text-yellow-500 text-xl" />
                ) : (
                  <FaMoon className="text-gray-500 text-xl" />
                )}
              </button>
            </div>
          </div>

          {/* Preferences Section */}
          <div className="border-b dark:border-gray-700 pb-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
              <FaBell className="mr-2" />
              Preferences
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-700 dark:text-gray-200">Notifications</span>
                <button
                  onClick={handleToggleNotifications}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    notifications ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      notifications ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700 dark:text-gray-200">Currency</span>
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                >
                  <option value="₹">₹ (INR)</option>
                  <option value="$">$ (USD)</option>
                  <option value="€">€ (EUR)</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings;
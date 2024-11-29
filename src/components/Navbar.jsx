import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { FaWallet, FaChartBar, FaPlus, FaCog, FaMoon, FaSun } from 'react-icons/fa';
import Settings from './Settings';

function Navbar() {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-blue-600 dark:bg-gray-800 text-white shadow-lg transition-colors duration-200 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <Link to="/dashboard" className="flex items-center space-x-2">
                <FaWallet className="text-2xl" />
                <span className="text-xl font-bold">ExpenseTracker</span>
              </Link>
              <div className="flex items-center space-x-4">
                <Link
                  to="/dashboard"
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md ${
                    location.pathname === '/dashboard' 
                      ? 'bg-blue-700 dark:bg-gray-700' 
                      : 'hover:bg-blue-700 dark:hover:bg-gray-700'
                  }`}
                >
                  <FaChartBar />
                  <span>Dashboard</span>
                </Link>
                <Link
                  to="/dashboard#new-expense"
                  className="flex items-center space-x-1 px-3 py-2 rounded-md hover:bg-blue-700 dark:hover:bg-gray-700"
                >
                  <FaPlus />
                  <span>New Expense</span>
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm">
                <span className="opacity-75">Welcome,</span>{' '}
                <span className="font-semibold">{user.name}</span>
              </div>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-blue-700 dark:hover:bg-gray-700"
              >
                {theme === 'dark' ? (
                  <FaSun className="text-yellow-500" />
                ) : (
                  <FaMoon className="text-gray-200" />
                )}
              </button>
              <button
                onClick={() => setIsSettingsOpen(true)}
                className="p-2 rounded-full hover:bg-blue-700 dark:hover:bg-gray-700"
              >
                <FaCog />
              </button>
              <button
                onClick={logout}
                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md text-sm transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
      <Settings isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
    </>
  );
}

export default Navbar;
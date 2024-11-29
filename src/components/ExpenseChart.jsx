import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import { useTheme } from '../context/ThemeContext';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

function ExpenseChart({ expenses }) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const colors = [
    'rgb(59, 130, 246)', // blue-500
    'rgb(16, 185, 129)', // green-500
    'rgb(239, 68, 68)',  // red-500
    'rgb(168, 85, 247)', // purple-500
    'rgb(245, 158, 11)'  // amber-500
  ];

  const processBarData = () => {
    // Group by category and sum amounts
    const categoryData = expenses.reduce((acc, expense) => {
      if (!acc[expense.category]) {
        acc[expense.category] = 0;
      }
      acc[expense.category] += expense.amount;
      return acc;
    }, {});

    // Sort categories by amount
    const sortedCategories = Object.entries(categoryData)
      .sort(([,a], [,b]) => b - a);

    return {
      labels: sortedCategories.map(([category]) => category),
      datasets: [
        {
          label: 'Spending by Category',
          data: sortedCategories.map(([,amount]) => amount),
          backgroundColor: colors,
          borderColor: colors.map(color => color.replace('rgb', 'rgba').replace(')', ', 1)')),
          borderWidth: 1
        }
      ]
    };
  };

  const processPieData = () => {
    const categoryData = expenses.reduce((acc, expense) => {
      if (!acc[expense.category]) {
        acc[expense.category] = 0;
      }
      acc[expense.category] += expense.amount;
      return acc;
    }, {});

    return {
      labels: Object.keys(categoryData),
      datasets: [
        {
          data: Object.values(categoryData),
          backgroundColor: colors,
          borderColor: colors.map(color => color.replace('rgb', 'rgba').replace(')', ', 1)')),
          borderWidth: 1
        }
      ]
    };
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Spending by Category',
        color: isDark ? 'white' : 'black',
        font: {
          size: 16,
          weight: 'bold'
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Amount (₹)',
          color: isDark ? 'white' : 'black'
        },
        ticks: {
          color: isDark ? 'white' : 'black'
        },
        grid: {
          color: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
        }
      },
      x: {
        ticks: {
          color: isDark ? 'white' : 'black'
        },
        grid: {
          color: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
        }
      }
    }
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: isDark ? 'white' : 'black',
          font: {
            size: 12
          }
        }
      },
      title: {
        display: true,
        text: 'Expense Distribution',
        color: isDark ? 'white' : 'black',
        font: {
          size: 16,
          weight: 'bold'
        }
      }
    }
  };

  return (
    <div className="space-y-8">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <Bar data={processBarData()} options={barOptions} />
      </div>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <Pie data={processPieData()} options={pieOptions} />
      </div>
    </div>
  );
}

export default ExpenseChart;
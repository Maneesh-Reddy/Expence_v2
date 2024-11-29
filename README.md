# ExpenseTracker - Personal Finance Management Application

![ExpenseTracker Logo](public/vite.svg)

## 🚀 Features

- **User Authentication**
  - Secure login system
  - Persistent sessions
  - Demo account available

- **Expense Management**
  - Add, edit, and delete expenses
  - Categorize expenses
  - Date-wise tracking
  - Real-time search and filtering

- **Visual Analytics**
  - Interactive charts
  - Category-wise distribution
  - Daily spending patterns
  - Expense trends visualization

- **Smart Dashboard**
  - Total expenses overview
  - Today's spending
  - Top spending categories
  - Transaction count

- **User Preferences**
  - Dark/Light theme
  - Currency customization
  - Profile settings
  - Notification preferences

## 🛠️ Technology Stack

- **Frontend Framework**: React 18.3
- **Routing**: React Router DOM 6
- **Styling**: Tailwind CSS
- **State Management**: React Context
- **Charts**: Chart.js with react-chartjs-2
- **Icons**: React Icons
- **HTTP Client**: Axios
- **Backend**: JSON Server
- **Notifications**: React Toastify
- **Build Tool**: Vite

## 🏃‍♂️ Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/expense-tracker.git
   cd expense-tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Access the application**
   - Open [http://localhost:5173](http://localhost:5173)
   - Demo credentials:
     - Email: demo@example.com
     - Password: demo123

## 📁 Project Structure

```
expense-tracker/
├── src/
│   ├── components/        # React components
│   ├── context/          # Context providers
│   ├── layouts/          # Layout components
│   ├── assets/           # Static assets
│   └── main.jsx          # Application entry
├── public/               # Public assets
└── db.json              # Mock database
```

## 🔧 Configuration

- **Environment Variables**: None required
- **API Port**: 3001 (JSON Server)
- **Development Port**: 5173 (Vite)

## 📊 Features in Detail

### Authentication System
- Secure login with email/password
- Session persistence using localStorage
- Protected routes with authentication guards

### Expense Management
- CRUD operations for expenses
- Category-based organization
- Date range filtering
- Real-time search functionality

### Data Visualization
- Bar charts for category-wise spending
- Pie charts for expense distribution
- Daily spending trends
- Interactive and responsive charts

### Theme System
- Dark/Light mode toggle
- System preference detection
- Persistent theme selection

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Technical Report

### Architecture Overview

1. **Frontend Architecture**
   - Component-based structure using React
   - Context API for global state management
   - Custom hooks for reusable logic
   - Responsive design with Tailwind CSS

2. **State Management**
   - AuthContext: Handles user authentication state
   - ThemeContext: Manages application theme
   - Local component state for UI interactions

3. **Data Flow**
   - RESTful API calls using Axios
   - JSON Server as mock backend
   - Real-time data updates
   - Optimistic UI updates

4. **Performance Optimizations**
   - Lazy loading of components
   - Memoization of expensive calculations
   - Efficient re-rendering with React hooks
   - Optimized bundle size

5. **Security Measures**
   - Protected routes
   - Session management
   - Input validation
   - Secure data handling

### Component Structure

1. **Core Components**
   - Dashboard: Main application view
   - ExpenseForm: New expense creation
   - ExpenseList: Expense management
   - ExpenseChart: Data visualization
   - SearchBar: Expense filtering

2. **Layout Components**
   - MainLayout: Application shell
   - Navbar: Navigation component
   - Settings: User preferences

3. **Context Providers**
   - AuthProvider: Authentication context
   - ThemeProvider: Theme management

### Data Management

1. **Local Storage**
   - User session data
   - Theme preferences
   - Application settings

2. **API Integration**
   - RESTful endpoints
   - CRUD operations
   - Error handling
   - Loading states

### User Interface

1. **Design System**
   - Consistent color scheme
   - Responsive layouts
   - Accessible components
   - Dark/Light themes

2. **Interactive Elements**
   - Real-time search
   - Dynamic charts
   - Form validation
   - Toast notifications

### Future Improvements

1. **Potential Enhancements**
   - Budget planning features
   - Export functionality
   - Multiple currency support
   - Advanced analytics

2. **Technical Debt**
   - Unit test coverage
   - E2E testing
   - Performance monitoring
   - Code documentation

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details

import { useAuth } from '../context/AuthContext';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';

function MainLayout({ children }) {
  const { user } = useAuth();
  const location = useLocation();
  const isLoginPage = location.pathname === '/';
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {user && !isLoginPage && <Navbar />}
      <div className={user && !isLoginPage ? 'pt-16' : ''}>
        {children}
      </div>
    </div>
  );
}

export default MainLayout;
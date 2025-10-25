import React from 'react';
import { useAuth } from '../context/AuthProvider';
import toast from 'react-hot-toast';

function Logout() {
  const [authUser, setAuthUser] = useAuth();

  const handleLogout = () => {
    try {
      // Immediately clear user data
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem('userInfo');

      // Show toast instantly
      toast.success('Logged out successfully! ', {
        duration: 1000,
      });

      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      toast.error(`Logout failed: ${error.message || error}`, {
        duration: 2000,
      });
    }
  };

  return (
    <button
      className="px-3 py-2 bg-red-500 text-white font-bold rounded-md hover:bg-red-700 transition duration-200 cursor-pointer"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
}

export default Logout;

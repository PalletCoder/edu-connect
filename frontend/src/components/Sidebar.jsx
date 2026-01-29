import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Users, Calendar, Bell, Book, LogOut } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 flex flex-col items-center w-20 h-screen py-8 bg-gradient-to-b from-white via-gray-50 to-white shadow-2xl border-r border-gray-100 z-50">
      {/* Logo */}
      <div className="mb-12 relative group">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
        <div className="relative w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
          <span className="text-2xl font-bold text-white">E</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col items-center space-y-4 flex-1">
        <NavLink 
          to="/dashboard" 
          className={({ isActive }) => `
            relative p-3.5 rounded-xl transition-all duration-300 group
            ${isActive 
              ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-200' 
              : 'text-gray-500 hover:bg-gradient-to-br hover:from-gray-100 hover:to-gray-50 hover:text-blue-600'
            }
          `}
        >
          {({ isActive }) => (
            <>
              {isActive && (
                <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-blue-500 to-blue-600 rounded-r-full"></div>
              )}
              <Home size={22} strokeWidth={isActive ? 2.5 : 2} />
            </>
          )}
        </NavLink>

        <NavLink 
          to="/network" 
          className={({ isActive }) => `
            relative p-3.5 rounded-xl transition-all duration-300 group
            ${isActive 
              ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-200' 
              : 'text-gray-500 hover:bg-gradient-to-br hover:from-gray-100 hover:to-gray-50 hover:text-blue-600'
            }
          `}
        >
          {({ isActive }) => (
            <>
              {isActive && (
                <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-blue-500 to-blue-600 rounded-r-full"></div>
              )}
              <Users size={22} strokeWidth={isActive ? 2.5 : 2} />
            </>
          )}
        </NavLink>

        <NavLink 
          to="/schedule" 
          className={({ isActive }) => `
            relative p-3.5 rounded-xl transition-all duration-300 group
            ${isActive 
              ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-200' 
              : 'text-gray-500 hover:bg-gradient-to-br hover:from-gray-100 hover:to-gray-50 hover:text-blue-600'
            }
          `}
        >
          {({ isActive }) => (
            <>
              {isActive && (
                <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-blue-500 to-blue-600 rounded-r-full"></div>
              )}
              <Calendar size={22} strokeWidth={isActive ? 2.5 : 2} />
            </>
          )}
        </NavLink>

        <NavLink 
          to="/notifications" 
          className={({ isActive }) => `
            relative p-3.5 rounded-xl transition-all duration-300 group
            ${isActive 
              ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-200' 
              : 'text-gray-500 hover:bg-gradient-to-br hover:from-gray-100 hover:to-gray-50 hover:text-blue-600'
            }
          `}
        >
          {({ isActive }) => (
            <>
              {isActive && (
                <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-blue-500 to-blue-600 rounded-r-full"></div>
              )}
              <Bell size={22} strokeWidth={isActive ? 2.5 : 2} />
            </>
          )}
        </NavLink>

        <NavLink 
          to="/courses" 
          className={({ isActive }) => `
            relative p-3.5 rounded-xl transition-all duration-300 group
            ${isActive 
              ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-200' 
              : 'text-gray-500 hover:bg-gradient-to-br hover:from-gray-100 hover:to-gray-50 hover:text-blue-600'
            }
          `}
        >
          {({ isActive }) => (
            <>
              {isActive && (
                <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-blue-500 to-blue-600 rounded-r-full"></div>
              )}
              <Book size={22} strokeWidth={isActive ? 2.5 : 2} />
            </>
          )}
        </NavLink>
      </nav>

      {/* Logout Button */}
      <div className="mt-auto pt-4 border-t border-gray-200 w-16">
        <button className="p-3.5 text-gray-500 rounded-xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100 hover:text-blue-600 transition-all duration-300 hover:shadow-md group relative">
          <LogOut size={22} strokeWidth={2} />
          <span className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Logout
          </span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

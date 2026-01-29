
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import Sidebar from './components/Sidebar';
import Network from './pages/Network';
import StudySchedule from './pages/StudySchedule';

const App = () => {
  const location = useLocation();
  const noSidebarRoutes = ['/login', '/signup'];

  return (
    <div className="flex">
      {!noSidebarRoutes.includes(location.pathname) && <Sidebar />}
      <div className="flex-1">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/network"
            element={
              <PrivateRoute>
                <Network />
              </PrivateRoute>
            }
          />
          <Route
            path="/schedule"
            element={
              <PrivateRoute>
                <StudySchedule />
              </PrivateRoute>
            }
          />
          {/* Redirect to login by default if no other route matches */}
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

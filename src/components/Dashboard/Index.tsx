import React from 'react';
import Sidebar from './Sidebar';
import DashboardPage from './DashboardPage';

const Dashboard: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <DashboardPage />
    </div>
  );
};

export default Dashboard;

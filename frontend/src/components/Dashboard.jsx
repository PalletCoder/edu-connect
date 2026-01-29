import React from 'react';
import StudySchedule from './StudySchedule';
import SkillsMastery from './SkillsMastery';
import CareerOpportunities from './CareerOpportunities';
import Chart from './Chart';
import RecentActivity from './RecentActivity';

const Dashboard = () => {
  return (
    <div className="flex-1 min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden ml-20">
      <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 py-4 md:py-6 lg:py-8 max-w-[1800px] mx-auto overflow-hidden">
        {/* Main Grid Layout - No Overflow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5 lg:gap-6">
          
          {/* Left Column - Stats & Progress */}
          <div className="lg:col-span-4 space-y-3 md:space-y-4">
            <SkillsMastery />
            <RecentActivity />
          </div>

          {/* Middle Column - Schedule & Activity */}
          <div className="lg:col-span-5 space-y-4 md:space-y-5 lg:space-y-6">
            <StudySchedule />
            <Chart />
          </div>

          {/* Right Column - Opportunities */}
          <div className="lg:col-span-3">
            <CareerOpportunities />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;


import React from 'react';
import { Activity, MessageCircle, FileCheck, Zap } from 'lucide-react';

const RecentActivity = () => {
    const activities = [
        { person: 'Tom F.', action: 'commented on your project', time: '2 mins ago', icon: MessageCircle, color: 'bg-blue-100 text-blue-600', gradient: 'from-blue-50 to-blue-100' },
        { person: 'Sophie B.', action: 'submitted homework', time: '1 hour ago', icon: FileCheck, color: 'bg-sky-100 text-sky-600', gradient: 'from-sky-50 to-sky-100' },
        { person: 'AI Tutor', action: 'sent you a new challenge', time: '3 hours ago', icon: Zap, color: 'bg-blue-100 text-blue-600', gradient: 'from-blue-50 to-blue-100' },
        { person: 'Emma C.', action: 'completed React course', time: '5 hours ago', icon: FileCheck, color: 'bg-sky-100 text-sky-600', gradient: 'from-sky-50 to-sky-100' },
        { person: 'John D.', action: 'started new project', time: '1 day ago', icon: Activity, color: 'bg-blue-100 text-blue-600', gradient: 'from-blue-50 to-blue-100' },
    ]
  return (
    <div className="w-full bg-white p-2.5 sm:p-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
        <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              <div className="p-1 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-md">
                  <Activity className="text-white" size={14} />
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-gray-800">Recent Activity</h3>
            </div>
            <button className="text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors">View All</button>
        </div>
        
        {/* List View for All Screens */}
        <div className="space-y-1.5">
            {activities.slice(0, 2).map((activity, index) => {
                const IconComponent = activity.icon;
                return (
                    <div key={index} className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-gray-50 transition-all duration-200 border border-gray-100 hover:border-gray-200 cursor-pointer group">
                        <div className={`w-7 h-7 ${activity.color} rounded-full flex-shrink-0 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-200`}>
                            <IconComponent size={14} />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-xs">
                                <span className="font-semibold text-gray-800">{activity.person}</span>
                                <span className="text-gray-600"> {activity.action}</span>
                            </p>
                            <p className="text-xs text-gray-500 font-medium">{activity.time}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
  );
};

export default RecentActivity;

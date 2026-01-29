import React from 'react';
import { TrendingUp, Briefcase, DollarSign, MapPin, Clock, Users, Star, ArrowRight } from 'lucide-react';

const CareerOpportunities = () => {
  const jobs = [
    { 
      title: 'Junior React Dev', 
      company: 'TechCorp Inc.',
      location: 'Remote', 
      salary: '$80k-110k', 
      openings: '2 New', 
      level: 'Entry Level',
      postedTime: '2 days ago',
      applicants: '12',
      match: '95%',
      gradient: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50/50 to-blue-100/30'
    },
    { 
      title: 'Frontend Engineer', 
      company: 'StartupHub',
      location: 'Hybrid', 
      salary: '$115k-135k', 
      level: 'Senior Level',
      postedTime: '5 days ago',
      applicants: '28',
      match: '88%',
      gradient: 'from-indigo-500 to-indigo-600',
      bgColor: 'from-indigo-50/50 to-indigo-100/30'
    },
    { 
      title: 'React + Redux Specialist', 
      company: 'Enterprise Solutions',
      location: 'Remote', 
      salary: '$140k-165k', 
      level: 'Tech Lead',
      postedTime: '1 week ago',
      applicants: '45',
      match: '92%',
      gradient: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50/50 to-purple-100/30'
    },
  ];

  return (
    <div className="w-full p-3 sm:p-4 bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-2">
          <div className="relative p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg">
            <Briefcase className="text-white" size={16} />
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-bold text-gray-800">Top Matches</h3>
            <p className="text-xs text-gray-500">Curated for you • {jobs.length} positions</p>
          </div>
        </div>
        <div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200 shadow-sm">
          <TrendingUp className="text-blue-600" size={12} />
          <span className="text-xs font-bold text-blue-600">Hot</span>
        </div>
      </div>

      {/* Job Cards */}
      <div className="space-y-2 mb-3">
        {jobs.map((job, index) => (
          <div 
            key={job.title} 
            className={`relative p-2.5 bg-gradient-to-br ${job.bgColor} rounded-xl hover:rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-400 cursor-pointer group overflow-hidden`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Animated background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            
            {/* Content */}
            <div className="relative">
              {/* Title and Match Score */}
              <div className="flex justify-between items-start mb-1.5 gap-2">
                <div className="flex-1">
                  <h4 className="font-bold text-gray-800 text-xs sm:text-sm group-hover:text-blue-600 transition-colors mb-0.5">
                    {job.title}
                  </h4>
                  <p className="text-xs text-gray-600 font-medium">{job.company}</p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  {job.openings && (
                    <span className="flex-shrink-0 px-1.5 py-0.5 bg-gradient-to-r from-green-100 to-green-50 text-green-600 rounded-md text-xs font-bold shadow-sm animate-pulse">
                      {job.openings}
                    </span>
                  )}
                  <div className="flex items-center gap-0.5 px-1.5 py-0.5 bg-gradient-to-r from-yellow-100 to-yellow-50 text-yellow-700 rounded-md">
                    <Star size={9} className="fill-yellow-500 text-yellow-500" />
                    <span className="text-xs font-bold">{job.match}</span>
                  </div>
                </div>
              </div>

              {/* Salary and Location */}
              <div className="flex flex-wrap items-center gap-2 mb-1.5 text-xs text-gray-600">
                <div className="flex items-center gap-1 font-semibold">
                  <DollarSign size={13} className="text-blue-600" strokeWidth={2.5} />
                  <span>{job.salary}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={12} className="text-gray-500" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={12} className="text-gray-500" />
                  <span>{job.postedTime}</span>
                </div>
              </div>

              {/* Level and Applicants */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  {job.level && (
                    <span className="px-2 py-0.5 bg-gradient-to-r from-blue-100 to-blue-50 text-blue-700 rounded-md text-xs font-semibold shadow-sm border border-blue-200">
                      {job.level}
                    </span>
                  )}
                  <div className="flex items-center gap-0.5 text-xs text-gray-500">
                    <Users size={11} />
                    <span>{job.applicants}</span>
                  </div>
                </div>
                <ArrowRight size={14} className="text-blue-500 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Action Button */}
      <button className="w-full px-3 py-2 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 active:scale-98 relative overflow-hidden group">
        <span className="relative z-10 flex items-center justify-center gap-2">
          Explore All Opportunities
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </button>
    </div>
  );
};

export default CareerOpportunities;

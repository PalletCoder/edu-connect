import React from 'react';
import { Award, Mail, MapPin } from 'lucide-react';

const SkillsMastery = () => {
  const skills = [
    { name: 'React', progress: 80, color: '#4A90E2', bgGradient: 'from-blue-50 to-blue-100' },
    { name: 'Redux', progress: 65, color: '#357ABD', bgGradient: 'from-sky-50 to-sky-100' },
    { name: 'Tailwind', progress: 90, color: '#4A90E2', bgGradient: 'from-blue-50 to-blue-100' },
    { name: 'Backend', progress: 70, color: '#357ABD', bgGradient: 'from-sky-50 to-sky-100' }
  ];

  return (
    <div className="w-full p-3 sm:p-4 md:p-5 bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
      {/* User Profile Section */}
      <div className="flex flex-col items-center text-center mb-4">
        <div className="relative mb-2">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 p-1 shadow-lg flex items-center justify-center">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-3xl sm:text-4xl">
              👩‍💻
            </div>
          </div>
          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-3 border-white rounded-full animate-pulse"></div>
        </div>
        <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-0.5">Emma Collins</h3>
        <p className="text-xs text-gray-500 mb-2">Full Stack Developer</p>
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-gray-600">
          <div className="flex items-center gap-1">
            <MapPin size={11} className="text-gray-400" />
            <span>San Francisco</span>
          </div>
          <span className="text-gray-300">•</span>
          <div className="flex items-center gap-1">
            <Mail size={11} className="text-gray-400" />
            <span>emma@edu.com</span>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="border-t border-gray-100 pt-3">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg">
              <Award className="text-white" size={13} />
            </div>
            <h4 className="text-xs sm:text-sm font-bold text-gray-800">Skills Mastery</h4>
          </div>
          <div className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">Top 10%</div>
        </div>
        <div className="grid grid-cols-2 gap-2.5">
          {skills.map(skill => (
            <div key={skill.name} className={`flex flex-col items-center justify-center space-y-1.5 p-2.5 bg-gradient-to-br ${skill.bgGradient} rounded-xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group border border-gray-100/50`}>
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 group-hover:scale-105 transition-transform duration-200">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-gray-200/60"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.5"
                  />
                  <path
                    stroke={skill.color}
                    strokeWidth="3.5"
                    strokeDasharray={`${skill.progress}, 100`}
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    strokeLinecap="round"
                    className="transition-all duration-700"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs sm:text-sm font-bold" style={{ color: skill.color }}>{skill.progress}%</span>
                </div>
              </div>
              <span className="font-semibold text-gray-700 text-xs text-center">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsMastery;

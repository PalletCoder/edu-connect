import React from 'react';
import { Calendar, CheckSquare, User } from 'lucide-react';

const StudentProfile = () => {
  return (
    <div className="h-full p-4 sm:p-6 bg-gradient-to-br from-white via-white to-pink-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-pink-100/50 backdrop-blur-sm">
      <div className="relative inline-block mb-4">
        <div className="relative w-20 h-20 sm:w-24 sm:h-24">
          <img 
            src="/emma.jpg" 
            alt="Emma Collins" 
            className="w-full h-full rounded-full mx-auto ring-4 ring-pink-200 shadow-lg object-cover" 
          />
          <div className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-green-500 border-4 border-white rounded-full animate-pulse"></div>
        </div>
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1">Emma Collins</h3>
      <p className="text-xs sm:text-sm text-gray-500 mb-3">18 y.o. • IELTS 8.0</p>
      <div className="flex justify-center flex-wrap gap-2 mb-4 sm:mb-6">
        <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-blue-50 text-blue-600 text-xs font-semibold rounded-full shadow-sm">Active Student</span>
      </div>
      <div className="space-y-2 sm:space-y-3">
        <button className="w-full flex items-center justify-center px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#4A90E2] to-[#357ABD] rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:scale-95">
          <Calendar className="mr-2" size={16} />
          <span className="hidden xs:inline">Reschedule Lesson</span>
          <span className="xs:hidden">Reschedule</span>
        </button>
        <button className="w-full flex items-center justify-center px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-gray-700 bg-white border-2 border-gray-300 rounded-xl hover:bg-gray-50 hover:border-[#4A90E2] transition-all active:scale-95">
          <CheckSquare className="mr-2" size={16} />
          <span className="hidden xs:inline">Check Homework</span>
          <span className="xs:hidden">Homework</span>
        </button>
      </div>
    </div>
  );
};

export default StudentProfile;

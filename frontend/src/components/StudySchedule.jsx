import React from 'react';
import { Calendar, Clock } from 'lucide-react';

const StudySchedule = () => {
  const events = [
    { day: 'Mon 14', time: '9 AM', title: 'React Lesson', color: 'from-blue-500 to-blue-600' },
    { day: 'Wed 16', time: '9 AM', title: 'Redux Practice', color: 'from-purple-500 to-purple-600' },
    { day: 'Wed 16', time: '10 AM', title: 'Tom F.', color: 'from-cyan-500 to-cyan-600' },
    { day: 'Fri 18', time: '10 AM', title: 'Create Lesson', color: 'from-green-500 to-green-600' },
    { day: 'Tue 15', time: '11 AM', title: 'Tailwind Project', color: 'from-indigo-500 to-indigo-600' },
    { day: 'Thu 17', time: '12 PM', title: 'AI Tutor Session', color: 'from-pink-500 to-pink-600' },
    { day: 'Sat 19', time: '12 PM', title: 'Sophie B', color: 'from-orange-500 to-orange-600' },
    { day: 'Mon 14', time: '1 PM', title: 'Sophie B.', color: 'from-rose-500 to-rose-600' },
  ];

  return (
    <div className="w-full p-3 sm:p-4 md:p-5 bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 sm:mb-4 gap-2">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl shadow-md">
            <Calendar className="text-white" size={16} />
          </div>
          <h3 className="text-base sm:text-lg font-bold text-gray-800">Study Schedule</h3>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 bg-blue-50 px-2.5 py-1.5 rounded-xl">
            <Clock size={13} className="text-blue-600" />
            <span className="text-xs font-semibold text-gray-700"><span className="text-blue-600">18h</span> this week</span>
          </div>
          <button className="px-2.5 py-1.5 text-xs font-semibold bg-gray-100 hover:bg-gray-200 rounded-xl transition-all">Week 4</button>
        </div>
      </div>
      
      {/* Mobile View - List of Events */}
      <div className="block sm:hidden space-y-2">
        {events.map((event, idx) => (
          <div key={idx} className={`p-2.5 bg-gradient-to-r ${event.color} text-white rounded-lg shadow-md`}>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold text-sm">{event.title}</p>
                <p className="text-xs opacity-90">{event.day}</p>
              </div>
              <span className="text-xs bg-white/20 px-2 py-1 rounded-md">{event.time}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop View - Grid Calendar */}
      <div className="hidden sm:block">
        <div className="w-full space-y-1.5">
          {/* Days Header */}
          <div className="grid grid-cols-7 gap-1.5 mb-1.5">
            <div className="text-xs font-medium text-gray-500"></div>
            {['Mon 14', 'Tue 15', 'Wed 16', 'Thu 17', 'Fri 18', 'Sat 19'].map(day => (
              <div key={day} className="text-center">
                <div className="text-xs font-semibold text-gray-700">{day.split(' ')[0]}</div>
                <div className="text-xs text-gray-500">{day.split(' ')[1]}</div>
              </div>
            ))}
          </div>
          
          {/* Time Slots with Events */}
          {['9 AM', '10 AM', '11 AM', '12 PM', '1 PM'].map(time => (
            <div key={time} className="grid grid-cols-7 gap-1.5 items-center">
              <div className="text-xs font-medium text-gray-600 text-right pr-1">{time}</div>
              {['Mon 14', 'Tue 15', 'Wed 16', 'Thu 17', 'Fri 18', 'Sat 19'].map(day => {
                const event = events.find(e => e.day === day && e.time === time);
                return (
                  <div key={day} className="h-10">
                    {event ? (
                      <div className={`h-full bg-gradient-to-r ${event.color} text-white p-1.5 rounded-lg text-xs font-medium shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center text-center leading-tight`}>
                        {event.title}
                      </div>
                    ) : (
                      <div className="h-full bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"></div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudySchedule;

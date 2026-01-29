import React, { useState } from 'react';
import { Calendar, Clock, ChevronLeft, ChevronRight, Plus } from 'lucide-react';

const StudySchedule = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  // Sample events with actual dates
  const events = [
    { date: '2026-01-14', time: '9:00 AM', title: 'React Lesson', color: 'from-blue-500 to-blue-600', duration: '1h' },
    { date: '2026-01-16', time: '9:00 AM', title: 'Redux Practice', color: 'from-purple-500 to-purple-600', duration: '2h' },
    { date: '2026-01-16', time: '2:00 PM', title: 'Meeting with Tom', color: 'from-cyan-500 to-cyan-600', duration: '30m' },
    { date: '2026-01-18', time: '10:00 AM', title: 'Create Lesson', color: 'from-green-500 to-green-600', duration: '1h' },
    { date: '2026-01-15', time: '11:00 AM', title: 'Tailwind Project', color: 'from-indigo-500 to-indigo-600', duration: '3h' },
    { date: '2026-01-17', time: '3:00 PM', title: 'AI Tutor Session', color: 'from-pink-500 to-pink-600', duration: '1h' },
    { date: '2026-01-19', time: '12:00 PM', title: 'Study with Sophie', color: 'from-orange-500 to-orange-600', duration: '2h' },
    { date: '2026-01-22', time: '9:00 AM', title: 'JavaScript Deep Dive', color: 'from-rose-500 to-rose-600', duration: '2h' },
    { date: '2026-02-05', time: '10:00 AM', title: 'Node.js Workshop', color: 'from-emerald-500 to-emerald-600', duration: '4h' },
    { date: '2026-02-14', time: '2:00 PM', title: 'TypeScript Fundamentals', color: 'from-violet-500 to-violet-600', duration: '2h' },
  ];

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    return { daysInMonth, startingDayOfWeek, year, month };
  };

  const getEventsForDate = (date) => {
    const dateStr = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    return events.filter(event => event.date === dateStr);
  };

  const changeMonth = (delta) => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + delta, 1));
    setSelectedDate(null);
  };

  const goToToday = () => {
    setCurrentDate(new Date());
    setSelectedDate(new Date());
  };

  const { daysInMonth, startingDayOfWeek, year, month } = getDaysInMonth(currentDate);
  
  const calendarDays = [];
  for (let i = 0; i < startingDayOfWeek; i++) {
    calendarDays.push(null);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  const isToday = (day) => {
    const today = new Date();
    return day && 
           today.getDate() === day && 
           today.getMonth() === month && 
           today.getFullYear() === year;
  };

  const isSelected = (day) => {
    return selectedDate && 
           selectedDate.getDate() === day && 
           selectedDate.getMonth() === month && 
           selectedDate.getFullYear() === year;
  };

  return (
    <div className="flex-1 min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 ml-20">
      {/* Sticky Header Section */}
      <div className="sticky top-0 z-40 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 px-3 sm:px-4 md:px-6 lg:px-8 py-4 md:py-6 shadow-sm">
        <div className="max-w-[1800px] mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl shadow-lg">
                <Calendar className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Study Schedule</h1>
                <p className="text-sm text-gray-600">Plan and track your learning sessions</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 bg-blue-50 px-3 py-2 rounded-xl shadow-sm">
                <Clock size={16} className="text-blue-600" />
                <span className="text-sm font-semibold text-gray-700"><span className="text-blue-600">18h</span> this week</span>
              </div>
              <button 
                onClick={goToToday}
                className="px-3 py-2 text-sm font-semibold bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 rounded-xl transition-all shadow-sm"
              >
                Today
              </button>
            </div>
          </div>

          {/* Month Navigation */}
          <div className="flex items-center justify-between bg-white p-3 rounded-xl shadow-md border border-gray-200">
            <button
              onClick={() => changeMonth(-1)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-all"
            >
              <ChevronLeft size={20} className="text-gray-700" />
            </button>
            <h2 className="text-lg font-bold text-gray-800">
              {monthNames[month]} {year}
            </h2>
            <button
              onClick={() => changeMonth(1)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-all"
            >
              <ChevronRight size={20} className="text-gray-700" />
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="px-3 sm:px-4 md:px-6 lg:px-8 pb-8 pt-4 max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Calendar View */}
          <div className="lg:col-span-2 bg-white p-4 sm:p-6 rounded-2xl shadow-lg border border-gray-100">
            {/* Day Names Header */}
            <div className="grid grid-cols-7 gap-2 mb-3">
              {dayNames.map(day => (
                <div key={day} className="text-center text-sm font-bold text-gray-600 py-2">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-2">
              {calendarDays.map((day, index) => {
                const dateObj = day ? new Date(year, month, day) : null;
                const dayEvents = dateObj ? getEventsForDate(dateObj) : [];
                const hasEvents = dayEvents.length > 0;

                return (
                  <div
                    key={index}
                    onClick={() => day && setSelectedDate(new Date(year, month, day))}
                    className={`
                      min-h-[80px] sm:min-h-[100px] p-2 rounded-xl transition-all cursor-pointer
                      ${!day ? 'bg-transparent cursor-default' : 'bg-gray-50 hover:bg-gray-100'}
                      ${isToday(day) ? 'ring-2 ring-blue-500 bg-blue-50' : ''}
                      ${isSelected(day) ? 'ring-2 ring-cyan-500 bg-cyan-50' : ''}
                    `}
                  >
                    {day && (
                      <>
                        <div className={`
                          text-sm font-semibold mb-1
                          ${isToday(day) ? 'text-blue-600' : 'text-gray-700'}
                        `}>
                          {day}
                        </div>
                        <div className="space-y-1">
                          {dayEvents.slice(0, 2).map((event, idx) => (
                            <div
                              key={idx}
                              className={`text-[10px] sm:text-xs px-1.5 py-0.5 bg-gradient-to-r ${event.color} text-white rounded-md truncate font-medium`}
                            >
                              {event.title}
                            </div>
                          ))}
                          {dayEvents.length > 2 && (
                            <div className="text-[10px] text-gray-500 font-medium">
                              +{dayEvents.length - 2} more
                            </div>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Events Sidebar */}
          <div className="lg:col-span-1 space-y-4">
            {/* Add Event Button */}
            <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
              <Plus size={20} />
              Add New Event
            </button>

            {/* Selected Date Events */}
            <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                {selectedDate 
                  ? `Events on ${monthNames[selectedDate.getMonth()]} ${selectedDate.getDate()}`
                  : 'Select a date'}
              </h3>
              
              <div className="space-y-2 max-h-[500px] overflow-y-auto">
                {selectedDate && getEventsForDate(selectedDate).length > 0 ? (
                  getEventsForDate(selectedDate).map((event, idx) => (
                    <div
                      key={idx}
                      className={`p-3 bg-gradient-to-r ${event.color} text-white rounded-xl shadow-md`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-sm">{event.title}</h4>
                        <span className="text-xs bg-white/20 px-2 py-1 rounded-lg">
                          {event.duration}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs opacity-90">
                        <Clock size={12} />
                        <span>{event.time}</span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <Calendar size={40} className="mx-auto mb-2 opacity-30" />
                    <p className="text-sm">
                      {selectedDate ? 'No events scheduled' : 'Click on a date to view events'}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudySchedule;

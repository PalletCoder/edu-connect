import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp } from 'lucide-react';

const data = [
  { name: 'Jan', progress: 65 },
  { name: 'Feb', progress: 59 },
  { name: 'Mar', progress: 80 },
  { name: 'Apr', progress: 81 },
  { name: 'May', progress: 56 },
  { name: 'Jun', progress: 55 },
  { name: 'Jul', progress: 40 },
];

const Chart = () => {
  return (
    <div className="w-full bg-white p-4 sm:p-5 md:p-6 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
        <div className="flex items-center justify-between mb-4 sm:mb-5">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-md">
                  <TrendingUp className="text-white" size={18} />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800">Progress Stats</h3>
            </div>
            <span className="text-xs sm:text-sm font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">+12%</span>
        </div>
        <div className="w-full" style={{ height: '180px' }}>
          <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ top: 5, right: 10, left: -15, bottom: 5 }}>
                  <defs>
                      <linearGradient id="colorProgress" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#4A90E2" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#4A90E2" stopOpacity={0}/>
                      </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" opacity={0.5} />
                  <XAxis 
                    dataKey="name" 
                    stroke="#9ca3af" 
                    style={{ fontSize: '12px' }}
                    tick={{ fill: '#6b7280' }}
                  />
                  <YAxis 
                    stroke="#9ca3af" 
                    style={{ fontSize: '12px' }}
                    tick={{ fill: '#6b7280' }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#fff', 
                      border: '1px solid #e5e7eb', 
                      borderRadius: '12px',
                      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                      fontSize: '12px'
                    }} 
                  />
                  <Legend wrapperStyle={{ fontSize: '12px' }} />
                  <Line 
                    type="monotone" 
                    dataKey="progress" 
                    stroke="#4A90E2" 
                    strokeWidth={3} 
                    activeDot={{ r: 6, fill: '#4A90E2', strokeWidth: 2, stroke: '#fff' }} 
                    dot={{ fill: '#4A90E2', r: 4, strokeWidth: 2, stroke: '#fff' }} 
                  />
              </LineChart>
          </ResponsiveContainer>
        </div>
    </div>
  );
};

export default Chart;

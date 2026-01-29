import React, { useState } from 'react';
import { Users, Briefcase, GraduationCap, MapPin, Clock, UserPlus, Search, Filter, TrendingUp } from 'lucide-react';

const Network = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [viewMode, setViewMode] = useState('suggested'); // 'suggested' or 'myConnections'

  const connections = [
    {
      id: 1,
      name: 'Sarah Anderson',
      role: 'Senior React Developer',
      company: 'Tech Innovations Inc.',
      location: 'San Francisco, CA',
      skills: ['React', 'TypeScript', 'Node.js'],
      learningPath: 'Advanced System Design',
      mutualConnections: 8,
      match: '95%',
      avatar: '👩‍💻',
      bgColor: 'from-blue-50/50 to-blue-100/30',
      timeJoined: '2 months ago'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Full Stack Engineer',
      company: 'StartupHub',
      location: 'Austin, TX',
      skills: ['React', 'Redux', 'PostgreSQL'],
      learningPath: 'Cloud Architecture',
      mutualConnections: 12,
      match: '92%',
      avatar: '👨‍💼',
      bgColor: 'from-indigo-50/50 to-indigo-100/30',
      timeJoined: '3 weeks ago'
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      role: 'Frontend Developer',
      company: 'Digital Solutions',
      location: 'New York, NY',
      skills: ['React', 'Tailwind CSS', 'Next.js'],
      learningPath: 'UI/UX Design Principles',
      mutualConnections: 15,
      match: '88%',
      avatar: '👩‍🎨',
      bgColor: 'from-purple-50/50 to-purple-100/30',
      timeJoined: '1 month ago'
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Software Engineer',
      company: 'Cloud Systems Corp',
      location: 'Seattle, WA',
      skills: ['React', 'AWS', 'Docker'],
      learningPath: 'DevOps & CI/CD',
      mutualConnections: 6,
      match: '90%',
      avatar: '👨‍🔧',
      bgColor: 'from-cyan-50/50 to-cyan-100/30',
      timeJoined: '5 days ago'
    },
    {
      id: 5,
      name: 'Jennifer Walsh',
      role: 'Tech Lead',
      company: 'Enterprise Tech',
      location: 'Boston, MA',
      skills: ['React', 'Redux', 'Microservices'],
      learningPath: 'Engineering Leadership',
      mutualConnections: 20,
      match: '93%',
      avatar: '👩‍🏫',
      bgColor: 'from-pink-50/50 to-pink-100/30',
      timeJoined: '6 months ago'
    },
    {
      id: 6,
      name: 'Alex Thompson',
      role: 'Junior Developer',
      company: 'Code Academy Inc.',
      location: 'Remote',
      skills: ['JavaScript', 'React', 'HTML/CSS'],
      learningPath: 'React Fundamentals',
      mutualConnections: 4,
      match: '85%',
      avatar: '👨‍🎓',
      bgColor: 'from-green-50/50 to-green-100/30',
      timeJoined: '1 week ago'
    },
    {
      id: 7,
      name: 'Maria Garcia',
      role: 'React Native Developer',
      company: 'Mobile First Ltd.',
      location: 'Miami, FL',
      skills: ['React Native', 'Redux', 'Firebase'],
      learningPath: 'Mobile App Development',
      mutualConnections: 10,
      match: '89%',
      avatar: '👩‍💼',
      bgColor: 'from-orange-50/50 to-orange-100/30',
      timeJoined: '2 weeks ago'
    },
    {
      id: 8,
      name: 'James Wilson',
      role: 'Frontend Architect',
      company: 'Tech Giants Inc.',
      location: 'Los Angeles, CA',
      skills: ['React', 'TypeScript', 'GraphQL'],
      learningPath: 'Software Architecture',
      mutualConnections: 25,
      match: '96%',
      avatar: '👨‍🚀',
      bgColor: 'from-red-50/50 to-red-100/30',
      timeJoined: '8 months ago'
    }
  ];

  const myConnections = [
    {
      id: 101,
      name: 'Robert Martinez',
      role: 'Backend Developer',
      company: 'Data Systems Inc.',
      location: 'Chicago, IL',
      skills: ['Python', 'Django', 'PostgreSQL'],
      learningPath: 'System Design Patterns',
      mutualConnections: 18,
      avatar: '👨‍💻',
      bgColor: 'from-blue-50/50 to-blue-100/30',
      connectedDate: '3 months ago',
      status: 'active'
    },
    {
      id: 102,
      name: 'Lisa Johnson',
      role: 'UI/UX Designer',
      company: 'Creative Studio',
      location: 'Portland, OR',
      skills: ['Figma', 'Adobe XD', 'Prototyping'],
      learningPath: 'Design Systems',
      mutualConnections: 14,
      avatar: '👩‍🎨',
      bgColor: 'from-purple-50/50 to-purple-100/30',
      connectedDate: '5 months ago',
      status: 'active'
    },
    {
      id: 103,
      name: 'Kevin Brown',
      role: 'DevOps Engineer',
      company: 'Infrastructure Co.',
      location: 'Denver, CO',
      skills: ['Kubernetes', 'AWS', 'Terraform'],
      learningPath: 'Cloud Native Architecture',
      mutualConnections: 22,
      avatar: '👨‍🔬',
      bgColor: 'from-green-50/50 to-green-100/30',
      connectedDate: '2 months ago',
      status: 'active'
    },
    {
      id: 104,
      name: 'Rachel Green',
      role: 'Product Manager',
      company: 'Product Labs',
      location: 'San Diego, CA',
      skills: ['Agile', 'Product Strategy', 'Analytics'],
      learningPath: 'Product Leadership',
      mutualConnections: 30,
      avatar: '👩‍💼',
      bgColor: 'from-pink-50/50 to-pink-100/30',
      connectedDate: '7 months ago',
      status: 'active'
    },
    {
      id: 105,
      name: 'Tom Harris',
      role: 'Data Scientist',
      company: 'AI Solutions Ltd.',
      location: 'Cambridge, MA',
      skills: ['Machine Learning', 'Python', 'TensorFlow'],
      learningPath: 'Deep Learning',
      mutualConnections: 16,
      avatar: '👨‍🔬',
      bgColor: 'from-cyan-50/50 to-cyan-100/30',
      connectedDate: '1 year ago',
      status: 'active'
    },
    {
      id: 106,
      name: 'Sophie Turner',
      role: 'QA Engineer',
      company: 'Quality First Inc.',
      location: 'Atlanta, GA',
      skills: ['Selenium', 'Jest', 'Cypress'],
      learningPath: 'Test Automation',
      mutualConnections: 11,
      avatar: '👩‍🔧',
      bgColor: 'from-orange-50/50 to-orange-100/30',
      connectedDate: '4 months ago',
      status: 'active'
    }
  ];

  const currentList = viewMode === 'suggested' ? connections : myConnections;

  const filteredConnections = currentList.filter(connection => {
    const matchesSearch = connection.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         connection.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         connection.company.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (selectedFilter === 'all') return matchesSearch;
    if (selectedFilter === 'developers') return matchesSearch && connection.role.toLowerCase().includes('developer');
    if (selectedFilter === 'engineers') return matchesSearch && connection.role.toLowerCase().includes('engineer');
    if (selectedFilter === 'leads') return matchesSearch && (connection.role.toLowerCase().includes('lead') || connection.role.toLowerCase().includes('architect'));
    
    return matchesSearch;
  });

  return (
    <div className="flex-1 min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 ml-20">
      {/* Sticky Header Section */}
      <div className="sticky top-0 z-40 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 px-3 sm:px-4 md:px-6 lg:px-8 py-4 md:py-6 shadow-sm">
        {/* Header */}
        <div className="mb-4 max-w-[1800px] mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg">
              <Users className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">My Network</h1>
              <p className="text-sm text-gray-600">Connect with people learning similar skills</p>
            </div>
          </div>
          
          {/* View Mode Toggle */}
          <div className="flex items-center gap-4 mt-4">
            <div className="flex bg-white rounded-xl shadow-md p-1 border border-gray-200">
              <button
                onClick={() => setViewMode('suggested')}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${
                  viewMode === 'suggested'
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <TrendingUp size={16} />
                Suggested ({connections.length})
              </button>
              <button
                onClick={() => setViewMode('myConnections')}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${
                  viewMode === 'myConnections'
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Users size={16} />
                My Connections ({myConnections.length})
              </button>
            </div>
            
            {viewMode === 'suggested' && (
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>Based on your profile</span>
              </div>
            )}
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100 max-w-[1800px] mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search by name, role, or company..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex items-center gap-2">
              <Filter size={18} className="text-gray-500" />
              <div className="flex gap-2 flex-wrap">
                {[
                  { value: 'all', label: 'All' },
                  { value: 'developers', label: 'Developers' },
                  { value: 'engineers', label: 'Engineers' },
                  { value: 'leads', label: 'Leaders' }
                ].map(filter => (
                  <button
                    key={filter.value}
                    onClick={() => setSelectedFilter(filter.value)}
                    className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                      selectedFilter === filter.value
                        ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="px-3 sm:px-4 md:px-6 lg:px-8 pb-8 pt-4 max-w-[1800px] mx-auto">
        {/* Connection Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredConnections.map((person) => (
            <div
              key={person.id}
              className={`bg-gradient-to-br ${person.bgColor} p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-400 group`}
            >
              {/* Avatar and Match Score */}
              <div className="flex items-start justify-between mb-3">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-3xl shadow-lg border-4 border-white">
                    {person.avatar}
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-green-500 w-5 h-5 rounded-full border-2 border-white"></div>
                </div>
                {viewMode === 'suggested' && person.match && (
                  <div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-yellow-100 to-yellow-50 rounded-lg">
                    <TrendingUp size={10} className="text-yellow-600" />
                    <span className="text-xs font-bold text-yellow-700">{person.match}</span>
                  </div>
                )}
                {viewMode === 'myConnections' && (
                  <div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-green-100 to-green-50 rounded-lg">
                    <span className="text-xs font-bold text-green-700">Connected</span>
                  </div>
                )}
              </div>

              {/* Name and Role */}
              <div className="mb-3">
                <h3 className="text-base font-bold text-gray-800 group-hover:text-blue-600 transition-colors mb-1">
                  {person.name}
                </h3>
                <p className="text-xs text-gray-600 font-medium mb-1">{person.role}</p>
                <p className="text-xs text-gray-500">{person.company}</p>
              </div>

              {/* Location and Time */}
              <div className="flex flex-col gap-1.5 mb-3 text-xs text-gray-600">
                <div className="flex items-center gap-1.5">
                  <MapPin size={12} className="text-gray-400" />
                  <span>{person.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock size={12} className="text-gray-400" />
                  <span>
                    {viewMode === 'suggested' 
                      ? `Joined ${person.timeJoined}` 
                      : `Connected ${person.connectedDate}`}
                  </span>
                </div>
              </div>

              {/* Skills */}
              <div className="mb-3">
                <div className="flex items-center gap-1 mb-2">
                  <Briefcase size={11} className="text-blue-600" />
                  <span className="text-xs font-semibold text-gray-700">Skills</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {person.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 bg-white text-blue-700 rounded-md text-xs font-medium border border-blue-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Learning Path */}
              <div className="mb-3 p-2 bg-white/60 rounded-lg">
                <div className="flex items-center gap-1 mb-1">
                  <GraduationCap size={11} className="text-purple-600" />
                  <span className="text-xs font-semibold text-gray-700">Learning</span>
                </div>
                <p className="text-xs text-gray-600">{person.learningPath}</p>
              </div>

              {/* Mutual Connections */}
              <div className="flex items-center gap-1 text-xs text-gray-600 mb-3">
                <Users size={11} className="text-gray-500" />
                <span>{person.mutualConnections} mutual connections</span>
              </div>

              {/* Connect Button */}
              {viewMode === 'suggested' ? (
                <button className="w-full py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:scale-98 flex items-center justify-center gap-2 group-hover:from-blue-600 group-hover:to-blue-700">
                  <UserPlus size={16} />
                  Connect
                </button>
              ) : (
                <button className="w-full py-2.5 bg-white text-blue-600 border-2 border-blue-500 rounded-xl font-semibold text-sm shadow-md hover:bg-blue-50 transition-all flex items-center justify-center gap-2">
                  <Users size={16} />
                  Message
                </button>
              )}
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredConnections.length === 0 && (
          <div className="text-center py-12">
            <Users size={48} className="mx-auto text-gray-300 mb-4" />
            <p className="text-gray-600 text-lg font-semibold">No connections found</p>
            <p className="text-gray-500 text-sm mt-2">Try adjusting your search or filter</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Network;

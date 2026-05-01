'use client';
import { useState, useMemo } from 'react';
import { useAppStore } from '@/lib/store';
import { courses, categories, type Course } from '@/lib/data';

export default function Courses() {
  const { setSection, setSelectedCourse } = useAppStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');

  const filteredCourses = useMemo(() => {
    return courses.filter((course: Course) => {
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
      const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
      return matchesSearch && matchesCategory && matchesLevel;
    });
  }, [searchQuery, selectedCategory, selectedLevel]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold text-white mb-2">All Courses</h1>
        <p className="text-gray-400">Find the perfect course for your exam preparation</p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Search courses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pl-10 bg-gray-800/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-all"
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">🔍</span>
        </div>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-3 bg-gray-800/50 border border-white/10 rounded-xl text-white focus:outline-none focus:border-purple-500 transition-all appearance-none cursor-pointer"
        >
          <option value="all">All Categories</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))}
        </select>
        <select
          value={selectedLevel}
          onChange={(e) => setSelectedLevel(e.target.value)}
          className="px-4 py-3 bg-gray-800/50 border border-white/10 rounded-xl text-white focus:outline-none focus:border-purple-500 transition-all appearance-none cursor-pointer"
        >
          <option value="all">All Levels</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
          <option value="All Levels">All Levels</option>
        </select>
      </div>

      {/* Results Count */}
      <p className="text-gray-400 text-sm">{filteredCourses.length} courses found</p>

      {/* Course Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredCourses.map((course) => {
          const cat = categories.find(c => c.id === course.category);
          return (
            <div
              key={course.id}
              onClick={() => { setSelectedCourse(course.id); setSection('course-detail'); }}
              className="bg-gray-800/50 rounded-xl p-5 border border-white/5 hover:border-purple-500/30 transition-all cursor-pointer hover:transform hover:scale-[1.02] group"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-3xl">{course.icon}</span>
                <div className="flex flex-col items-end gap-1">
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-lg text-xs font-medium">
                    {course.level}
                  </span>
                  {cat && (
                    <span className={`px-2 py-1 rounded-lg text-xs font-medium bg-gradient-to-r ${cat.color} text-white`}>
                      {cat.name.split(' ')[0]}
                    </span>
                  )}
                </div>
              </div>
              <h3 className="text-white font-semibold mb-2 group-hover:text-purple-300 transition-colors line-clamp-2">
                {course.title}
              </h3>
              <p className="text-gray-400 text-xs mb-3 line-clamp-2">{course.description}</p>
              <div className="flex flex-wrap gap-1 mb-3">
                {course.topics.slice(0, 3).map((topic) => (
                  <span key={topic} className="px-2 py-0.5 bg-white/5 text-gray-400 rounded text-[10px]">{topic}</span>
                ))}
              </div>
              <div className="flex items-center justify-between border-t border-white/5 pt-3">
                <span className="text-yellow-400 font-bold">{course.price}</span>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400 text-xs">★</span>
                  <span className="text-gray-400 text-xs">{course.rating}</span>
                  <span className="text-gray-600 text-xs">({(course.students / 1000).toFixed(1)}K)</span>
                </div>
              </div>
              <div className="flex items-center gap-3 mt-2 text-gray-500 text-xs">
                <span>📖 {course.lessons}</span>
                <span>⏱️ {course.duration}</span>
              </div>
            </div>
          );
        })}
      </div>

      {filteredCourses.length === 0 && (
        <div className="text-center py-12">
          <span className="text-5xl mb-4 block">🔍</span>
          <p className="text-gray-400 text-lg">No courses found matching your search</p>
          <button
            onClick={() => { setSearchQuery(''); setSelectedCategory('all'); setSelectedLevel('all'); }}
            className="mt-3 text-purple-400 hover:text-purple-300 font-medium"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}

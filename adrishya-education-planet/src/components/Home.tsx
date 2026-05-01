'use client';
import { useAppStore } from '@/lib/store';
import { courses, categories } from '@/lib/data';

export default function Home() {
  const { setSection, setSelectedCourse } = useAppStore();
  const trendingCourses = courses.slice(0, 8);

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-900 via-indigo-900 to-pink-900 rounded-2xl p-8 lg:p-12 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-400 rounded-full filter blur-3xl" />
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-yellow-400/20 text-yellow-300 rounded-full text-xs font-semibold border border-yellow-400/30">
              ⭐ #1 Education Platform
            </span>
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">ADRISHYA</span> Education Planet
          </h1>
          <p className="text-purple-200 text-lg mb-6 max-w-2xl">
            Your gateway to success in competitive examinations. 64+ courses across 24 categories with expert faculty and comprehensive study material.
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSection('courses')}
              className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold rounded-xl hover:from-yellow-500 hover:to-orange-600 transition-all transform hover:scale-105 shadow-lg"
            >
              Explore Courses
            </button>
            <button
              onClick={() => setSection('tests')}
              className="px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all border border-white/20"
            >
              Take Free Test
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Courses', value: '64+', icon: '📚', color: 'from-purple-500 to-indigo-600' },
          { label: 'Students', value: '10L+', icon: '👨‍🎓', color: 'from-blue-500 to-cyan-600' },
          { label: 'Categories', value: '24', icon: '📂', color: 'from-green-500 to-emerald-600' },
          { label: 'Mock Tests', value: '500+', icon: '📝', color: 'from-orange-500 to-red-600' },
        ].map((stat) => (
          <div key={stat.label} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 lg:p-6 border border-white/5 hover:border-white/20 transition-all">
            <span className="text-2xl">{stat.icon}</span>
            <p className={`text-2xl lg:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mt-2`}>
              {stat.value}
            </p>
            <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Categories */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Browse Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSection('courses')}
              className="group bg-gray-800/50 rounded-xl p-4 border border-white/5 hover:border-white/20 transition-all hover:transform hover:scale-105"
            >
              <span className="text-2xl block mb-2">{cat.icon}</span>
              <p className="text-white text-sm font-medium group-hover:text-purple-300 transition-colors text-left">{cat.name}</p>
            </button>
          ))}
        </div>
      </section>

      {/* Trending Courses */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-white">Trending Courses</h2>
          <button onClick={() => setSection('courses')} className="text-purple-400 hover:text-purple-300 text-sm font-semibold">
            View All →
          </button>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {trendingCourses.map((course) => (
            <div
              key={course.id}
              onClick={() => { setSelectedCourse(course.id); setSection('course-detail'); }}
              className="bg-gray-800/50 rounded-xl p-5 border border-white/5 hover:border-purple-500/30 transition-all cursor-pointer hover:transform hover:scale-[1.02] group"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-3xl">{course.icon}</span>
                <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-lg text-xs font-medium">
                  {course.level}
                </span>
              </div>
              <h3 className="text-white font-semibold text-sm mb-2 group-hover:text-purple-300 transition-colors line-clamp-2">
                {course.title}
              </h3>
              <p className="text-gray-400 text-xs mb-3 line-clamp-2">{course.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-yellow-400 font-bold text-sm">{course.price}</span>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400 text-xs">★</span>
                  <span className="text-gray-400 text-xs">{course.rating}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-2 text-gray-500 text-xs">
                <span>📖 {course.lessons} lessons</span>
                <span>•</span>
                <span>👥 {(course.students / 1000).toFixed(1)}K</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Why Choose Us?</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: '🎥', title: 'Video Lectures', desc: 'High-quality video lectures from experienced faculty members available 24/7.' },
            { icon: '📄', title: 'Study Material (PDFs)', desc: 'Comprehensive study material in PDF format for offline preparation.' },
            { icon: '📝', title: 'Mock Tests', desc: 'Regular mock tests with detailed analysis and performance tracking.' },
            { icon: '💬', title: 'Doubt Resolution', desc: 'Get your doubts resolved instantly through our chat support system.' },
            { icon: '🎙️', title: 'Voice Room', desc: 'Join live voice rooms for group discussions and interactive learning.' },
            { icon: '📱', title: 'Mobile Friendly', desc: 'Access all content seamlessly on any device - mobile, tablet or desktop.' },
          ].map((feature) => (
            <div key={feature.title} className="bg-gray-800/50 rounded-xl p-5 border border-white/5 hover:border-white/10 transition-all">
              <span className="text-2xl">{feature.icon}</span>
              <h3 className="text-white font-semibold mt-3 mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

'use client';
import { useState, useEffect } from 'react';
import { useAppStore } from '@/lib/store';
import { courses, categories, getPdfsForCategory, getTestsForCategory } from '@/lib/data';
import VideoPlayer from './VideoPlayer';

export default function CourseDetail() {
  const { selectedCourseId, setSection } = useAppStore();
  const [videoUrl, setVideoUrl] = useState('');
  const [showAddVideo, setShowAddVideo] = useState(false);
  const [newVideoUrl, setNewVideoUrl] = useState('');
  const [activeTab, setActiveTab] = useState<'overview' | 'pdfs' | 'tests'>('overview');

  const course = courses.find(c => c.id === selectedCourseId);
  const category = categories.find(c => c.id === course?.category);

  useEffect(() => {
    if (selectedCourseId) {
      const saved = localStorage.getItem(`video_${selectedCourseId}`);
      if (saved) setVideoUrl(saved);
      else setVideoUrl('');
      setActiveTab('overview');
    }
  }, [selectedCourseId]);

  if (!course) {
    return (
      <div className="text-center py-12">
        <span className="text-5xl mb-4 block">📚</span>
        <p className="text-gray-400 text-lg mb-4">Course not found</p>
        <button onClick={() => setSection('courses')} className="px-6 py-3 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition-all">
          Browse Courses
        </button>
      </div>
    );
  }

  const pdfs = getPdfsForCategory(category?.name || '');
  const tests = getTestsForCategory(category?.name || '');

  const handleSaveVideo = () => {
    if (newVideoUrl.trim()) {
      setVideoUrl(newVideoUrl.trim());
      localStorage.setItem(`video_${course.id}`, newVideoUrl.trim());
      setShowAddVideo(false);
      setNewVideoUrl('');
    }
  };

  const handleRemoveVideo = () => {
    setVideoUrl('');
    localStorage.removeItem(`video_${course.id}`);
  };

  return (
    <div className="space-y-6">
      {/* Back Button */}
      <button onClick={() => setSection('courses')} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
        <span>←</span>
        <span>Back to Courses</span>
      </button>

      {/* Video Section */}
      <div className="bg-gray-800/50 rounded-xl overflow-hidden border border-white/5">
        {videoUrl ? (
          <div>
            <VideoPlayer url={videoUrl} />
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span className="text-green-400">●</span>
                <span>Video lecture playing</span>
              </div>
              <button onClick={handleRemoveVideo} className="text-red-400 hover:text-red-300 text-sm font-medium">
                Remove Video
              </button>
            </div>
          </div>
        ) : (
          <div className="aspect-video bg-gray-800/80 flex flex-col items-center justify-center">
            <span className="text-6xl mb-4 opacity-30">🎥</span>
            <p className="text-gray-400 mb-4">No video lecture added yet</p>
            <button
              onClick={() => setShowAddVideo(true)}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all"
            >
              + Add Video Link
            </button>
          </div>
        )}

        {/* Add Video Modal */}
        {showAddVideo && (
          <div className="p-4 border-t border-white/10 bg-gray-900/50">
            <h3 className="text-white font-semibold mb-3">Add Video Lecture Link</h3>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Paste video URL (YouTube, MP4, or any link)..."
                value={newVideoUrl}
                onChange={(e) => setNewVideoUrl(e.target.value)}
                className="flex-1 px-4 py-2.5 bg-gray-800 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 text-sm"
              />
              <button onClick={handleSaveVideo} className="px-4 py-2.5 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 text-sm">
                Save
              </button>
              <button onClick={() => { setShowAddVideo(false); setNewVideoUrl(''); }} className="px-4 py-2.5 bg-gray-700 text-white rounded-xl text-sm">
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Course Info */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">{course.icon}</span>
            {category && (
              <span className={`px-3 py-1 rounded-lg text-xs font-medium bg-gradient-to-r ${category.color} text-white`}>
                {category.name}
              </span>
            )}
          </div>
          <h1 className="text-2xl lg:text-3xl font-bold text-white mb-2">{course.title}</h1>
          <p className="text-gray-400 mb-4">{course.description}</p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="text-gray-300">📖 {course.lessons} Lessons</span>
            <span className="text-gray-300">⏱️ {course.duration}</span>
            <span className="text-gray-300">👥 {(course.students / 1000).toFixed(1)}K Students</span>
            <span className="text-yellow-400">★ {course.rating}/5</span>
          </div>
        </div>
        <div className="sm:text-right">
          <p className="text-3xl font-bold text-yellow-400 mb-2">{course.price}</p>
          <span className="px-3 py-1.5 bg-green-500/20 text-green-400 rounded-lg text-sm font-medium">
            {course.level}
          </span>
          {!videoUrl && (
            <div className="mt-3">
              <button
                onClick={() => setShowAddVideo(true)}
                className="px-5 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 text-sm"
              >
                + Add Video
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-white/10 pb-2">
        {(['overview', 'pdfs', 'tests'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2.5 rounded-t-lg font-medium text-sm capitalize transition-all ${
              activeTab === tab
                ? 'bg-purple-600 text-white'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {tab === 'pdfs' ? '📄 Study Material' : tab === 'tests' ? '📝 Mock Tests' : '📋 Overview'}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && (
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Course Topics</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {course.topics.map((topic, index) => (
              <div key={topic} className="flex items-center gap-3 bg-gray-800/50 rounded-xl p-4 border border-white/5">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                  {index + 1}
                </div>
                <span className="text-gray-300 text-sm font-medium">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'pdfs' && (
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Study Material (PDFs)</h3>
          <div className="space-y-3">
            {pdfs.map((pdf, index) => (
              <div key={index} className="flex items-center justify-between bg-gray-800/50 rounded-xl p-4 border border-white/5 hover:border-purple-500/30 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-500/20 rounded-xl flex items-center justify-center text-red-400 text-lg">📄</div>
                  <div>
                    <p className="text-white font-medium text-sm">{pdf.title}</p>
                    <p className="text-gray-500 text-xs">{pdf.pages} pages • {pdf.size}</p>
                  </div>
                </div>
                <button className="px-4 py-2 bg-purple-600/20 text-purple-400 rounded-lg text-sm font-medium hover:bg-purple-600/30 transition-all">
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'tests' && (
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Mock Tests</h3>
          <div className="space-y-3">
            {tests.map((test, index) => (
              <div key={index} className="flex items-center justify-between bg-gray-800/50 rounded-xl p-4 border border-white/5 hover:border-green-500/30 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center text-green-400 text-lg">📝</div>
                  <div>
                    <p className="text-white font-medium text-sm">{test.title}</p>
                    <p className="text-gray-500 text-xs">{test.questions} Questions • {test.duration} • {test.difficulty}</p>
                  </div>
                </div>
                <button className="px-4 py-2 bg-green-600/20 text-green-400 rounded-lg text-sm font-medium hover:bg-green-600/30 transition-all">
                  Start Test
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

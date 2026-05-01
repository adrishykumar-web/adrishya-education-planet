'use client';
import { useAppStore } from '@/lib/store';

const navItems = [
  { id: 'home', label: 'Home', icon: '🏠' },
  { id: 'courses', label: 'Courses', icon: '📚' },
  { id: 'pdfs', label: 'PDFs', icon: '📄' },
  { id: 'tests', label: 'Tests', icon: '📝' },
  { id: 'chat', label: 'Chat', icon: '💬' },
  { id: 'voice', label: 'Voice Room', icon: '🎙️' },
];

export default function Navbar() {
  const { currentSection, setSection, userName, logout, sidebarOpen, toggleSidebar } = useAppStore();

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-b border-white/10 z-50 px-4 py-3 flex items-center justify-between">
        <button onClick={toggleSidebar} className="text-white text-xl p-1">☰</button>
        <div className="flex items-center gap-2">
          <span className="text-2xl">🪐</span>
          <span className="text-white font-bold text-sm">ADRISHYA</span>
        </div>
        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
          {userName.charAt(0).toUpperCase()}
        </div>
      </div>

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/50 z-40" onClick={toggleSidebar} />
      )}

      {/* Desktop Sidebar */}
      <aside className={`fixed top-0 left-0 h-full w-64 bg-gray-900/95 backdrop-blur-xl border-r border-white/10 z-50 flex flex-col transition-transform duration-300 lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center text-2xl shadow-lg">
              🪐
            </div>
            <div>
              <h1 className="text-white font-bold text-lg">ADRISHYA</h1>
              <p className="text-gray-400 text-xs">Education Planet</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { setSection(item.id); toggleSidebar(); }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left ${
                currentSection === item.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25'
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="font-medium text-sm">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-white/10">
          <div className="flex items-center gap-3 mb-3 px-2">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
              {userName.charAt(0).toUpperCase()}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-medium truncate">{userName}</p>
              <p className="text-gray-400 text-xs truncate">Student</p>
            </div>
          </div>
          <button
            onClick={logout}
            className="w-full flex items-center gap-2 px-4 py-2.5 rounded-xl text-red-400 hover:bg-red-500/10 transition-all text-sm"
          >
            <span>🚪</span>
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-t border-white/10 z-50 px-2 py-2">
        <div className="flex items-center justify-around">
          {navItems.slice(0, 5).map((item) => (
            <button
              key={item.id}
              onClick={() => setSection(item.id)}
              className={`flex flex-col items-center gap-1 px-3 py-1.5 rounded-lg transition-all ${
                currentSection === item.id
                  ? 'text-purple-400'
                  : 'text-gray-500'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-[10px] font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

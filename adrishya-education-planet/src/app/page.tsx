'use client';
import { useAppStore } from '@/lib/store';
import Login from '@/components/Login';
import Navbar from '@/components/Navbar';
import Home from '@/components/Home';
import Courses from '@/components/Courses';
import CourseDetail from '@/components/CourseDetail';
import PDFs from '@/components/PDFs';
import Tests from '@/components/Tests';
import Chat from '@/components/Chat';
import VoiceRoom from '@/components/VoiceRoom';

export default function Page() {
  const { isLoggedIn, currentSection } = useAppStore();

  if (!isLoggedIn) {
    return <Login />;
  }

  const renderSection = () => {
    switch (currentSection) {
      case 'home': return <Home />;
      case 'courses': return <Courses />;
      case 'course-detail': return <CourseDetail />;
      case 'pdfs': return <PDFs />;
      case 'tests': return <Tests />;
      case 'chat': return <Chat />;
      case 'voice': return <VoiceRoom />;
      default: return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0f1a]">
      <Navbar />
      <main className="lg:ml-64 pt-16 lg:pt-4 pb-20 lg:pb-4 px-4 lg:px-6">
        <div className="max-w-7xl mx-auto py-4 lg:py-6 animate-slide-in" key={currentSection}>
          {renderSection()}
        </div>
      </main>
    </div>
  );
}

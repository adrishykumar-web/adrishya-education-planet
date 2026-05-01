import { create } from 'zustand';

interface AppState {
  isLoggedIn: boolean;
  userName: string;
  userEmail: string;
  currentSection: string;
  selectedCourseId: string | null;
  sidebarOpen: boolean;
  login: (name: string, email: string) => void;
  logout: () => void;
  setSection: (section: string) => void;
  setSelectedCourse: (id: string | null) => void;
  toggleSidebar: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  isLoggedIn: false,
  userName: '',
  userEmail: '',
  currentSection: 'home',
  selectedCourseId: null,
  sidebarOpen: false,
  login: (name, email) => set({ isLoggedIn: true, userName: name, userEmail: email }),
  logout: () => set({ isLoggedIn: false, userName: '', userEmail: '', currentSection: 'home' }),
  setSection: (section) => set({ currentSection: section }),
  setSelectedCourse: (id) => set({ selectedCourseId: id }),
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
}));

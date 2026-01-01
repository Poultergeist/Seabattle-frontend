import { create } from 'zustand';

// Define the shape of the theme state
export interface ThemeState {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

// Create the Zustand store for app management
export const useAppStore = create<ThemeState>(set => ({
  // Initial theme state
  theme: 'dark',
  setTheme: theme => set({ theme }),
}));

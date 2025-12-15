import { create } from 'zustand';

export interface AppState {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

export const useAppStore = create<AppState>(set => ({
  theme: 'dark',
  setTheme: theme => set({ theme }),
}));

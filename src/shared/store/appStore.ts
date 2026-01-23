import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { LOCAL_STORAGE_KEYS } from '../config';

export interface ThemeState {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

type AppState = ThemeState;

export const useAppStore = create<AppState>()(
  persist(
    set => ({
      theme: 'dark',
      setTheme: theme => set({ theme }),
    }),
    {
      name: LOCAL_STORAGE_KEYS.STORE,
      storage: createJSONStorage(() => localStorage),
    }
  )
);

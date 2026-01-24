import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { LOCAL_STORAGE_KEYS } from '../config';
import { cookieStorage } from '../lib';

export interface ThemeState {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  not: boolean;
  setNot: (not: boolean) => void;
}

// type AppState = ThemeState;
type SharedState = ThemeState;

// export const useSharedStore = create<AppState>()(
//   persist(
//     set => ({
//       theme: 'dark',
//       setTheme: theme => set({ theme }),
//     }),
//     {
//       name: LOCAL_STORAGE_KEYS.STORE,
//       storage: createJSONStorage(() => localStorage),
//     }
//   )
// );

export const useSharedStore = create<SharedState>()(
  persist(
    set => ({
      theme: 'dark',
      setTheme: theme => set({ theme }),
      not: false,
      setNot: not => set({ not }),
    }),
    {
      name: LOCAL_STORAGE_KEYS.STORE,
      storage: createJSONStorage(() => cookieStorage),
    }
  )
);

import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { LOCAL_STORAGE_KEYS } from '../config';
import { cookieStorage } from '../lib';

type ConsentCookiesState = {
  consentCookies?: boolean;
  setConsentCookies: (consentCookies: boolean) => void;
};

export const useConsentCookiesStore = create<ConsentCookiesState>()(
  persist(
    set => ({
      consentCookies: undefined,
      setConsentCookies: consentCookies => set({ consentCookies }),
    }),
    {
      name: LOCAL_STORAGE_KEYS.CONSENT_COOKIES,
      storage: createJSONStorage(() => cookieStorage),
    }
  )
);

interface ThemeState {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

export type SharedState = ThemeState;

const cookieString = await cookieStorage.getItem(
  LOCAL_STORAGE_KEYS.CONSENT_COOKIES
);
const consent: boolean | undefined = JSON.parse(cookieString || 'null')?.state
  ?.consentCookies;

export const useSharedStore = create<SharedState>()(
  persist(
    set => ({
      theme: 'dark',
      setTheme: theme => set({ theme }),
    }),
    {
      name: LOCAL_STORAGE_KEYS.STORE,
      storage: createJSONStorage(() =>
        consent === true ? cookieStorage : localStorage
      ),
    }
  )
);

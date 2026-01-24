import type { StateStorage } from 'zustand/middleware';

import { COOKIES_DOMAIN, COOKIES_SECURE } from '../config';

export const cookieStorage: StateStorage = {
  getItem: (name: string): string | null => {
    const matches = document.cookie.match(
      new RegExp(
        '(?:^|; )' + name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1') + '=([^;]*)'
      )
    );
    return matches ? decodeURIComponent(matches[1]) : null;
  },
  setItem: (name: string, value: string): void => {
    document.cookie = `${name}=${encodeURIComponent(value)}; domain=${COOKIES_DOMAIN}; path=/; max-age=31536000; ${COOKIES_SECURE}samesite=lax`;
  },
  removeItem: (name: string): void => {
    document.cookie = `${name}=; domain=${COOKIES_DOMAIN}; path=/; max-age=0; ${COOKIES_SECURE}samesite=lax`;
  },
};

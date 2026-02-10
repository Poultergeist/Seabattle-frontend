export const NODE_ENV = import.meta.env.MODE;

export const AUTH_PAGE = import.meta.env.VITE_AUTH_PAGE;
export const GAME_PAGE = import.meta.env.VITE_MAIN_PAGE;
export const ADMIN_PAGE = import.meta.env.VITE_ADMIN_PAGE;

export const COOKIES_DOMAIN = import.meta.env.VITE_COOKIES_DOMAIN;
export const COOKIES_SECURE =
  import.meta.env.VITE_COOKIES_SECURE === 'true' ? 'secure; ' : '';

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

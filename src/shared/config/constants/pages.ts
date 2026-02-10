import * as env from './env';

const AUTH_ROOT = env.AUTH_PAGE.replace(/\/$/, '');

export const AUTH_PAGES = {
  ROOT: `/`,
  LOGIN: `/login`,
};

export const AUTH_PAGES_ROOT = {
  ROOT: `${AUTH_ROOT}/`,
  LOGIN: `${AUTH_ROOT}/login`,
};

export const GAME_ROOT = env.GAME_PAGE.replace(/\/$/, '');

export const GAME_PAGES = {
  ROOT: `/`,
  LOBBY: `/lobby`,
  ROOM: `/room`,
  BATTLE: `/battle`,
  COOKIES: `/cookies-policy`,
};

export const GAME_PAGES_ROOT = {
  ROOT: `${GAME_ROOT}/`,
  LOBBY: `${GAME_ROOT}/lobby`,
  ROOM: `${GAME_ROOT}/room`,
  BATTLE: `${GAME_ROOT}/battle`,
  COOKIES: `${GAME_ROOT}/cookies-policy`,
};

export const ADMIN_ROOT = env.ADMIN_PAGE.replace(/\/$/, '');

export const ADMIN_PAGES = {
  ROOT: `/`,
};

export const ADMIN_PAGES_ROOT = {
  ROOT: `${ADMIN_ROOT}/`,
};

export const PAGES = {
  AUTH_PAGES,
  GAME_PAGES,
  ADMIN_PAGES,
  AUTH_PAGES_ROOT,
  GAME_PAGES_ROOT,
  ADMIN_PAGES_ROOT,
  PREVIEW: '/preveiw',
};

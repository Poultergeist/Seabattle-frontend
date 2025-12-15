import * as env from './env';

const AUTH_ROOT = env.AUTH_PAGE.replace(/\/$/, '');

export const AUTH_PAGES = {
  ROOT: `${AUTH_ROOT}/`,
  LOGIN: `${AUTH_ROOT}/login`,
};
export const GAME_ROOT = env.GAME_PAGE.replace(/\/$/, '');

export const GAME_PAGES = {
  ROOT: `${GAME_ROOT}/`,
  LOBBY: `${GAME_ROOT}/lobby`,
  ROOM: `${GAME_ROOT}/room`,
  BATTLE: `${GAME_ROOT}/battle`,
};
export const PAGES = {
  AUTH_PAGES,
  GAME_PAGES,
};

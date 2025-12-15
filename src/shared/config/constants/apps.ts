import * as env from './env';

export const APPS = {
  [env.AUTH_PAGE]: () => import('@/auth/app/App'),
  [env.GAME_PAGE]: () => import('@/game/app/App'),
  fallack: () => import('@/app/AppFallback'),
};

export const FALLBACK_APP = () => import('@/app/AppFallback');

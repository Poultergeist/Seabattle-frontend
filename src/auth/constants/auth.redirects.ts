import { PAGES } from '@/shared/config/constants';

export const REDIRECT_PARAMS = {
  game: PAGES.GAME_PAGES_ROOT.ROOT,
  admin: PAGES.ADMIN_PAGES_ROOT.ROOT,
} as const;

export type RedirectParam = keyof typeof REDIRECT_PARAMS;

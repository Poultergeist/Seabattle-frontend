import React, { lazy } from 'react';

const Fallback = lazy(() =>
  import('../../../App').then(module => ({ default: module.App }))
);
const AuthApp = lazy(() =>
  import('../../../auth/app/App').then(module => ({ default: module.App }))
);
const GameApp = lazy(() =>
  import('../../../game/app/App').then(module => ({ default: module.App }))
);
import { NODE_ENV } from '../../config/constants';

const APPS: Record<string, React.FC> = {
  auth: AuthApp,
  game: GameApp,
  default: Fallback,
};

export const EnvironmentProvider = () => {
  return APPS[NODE_ENV]
    ? React.createElement(APPS[NODE_ENV])
    : React.createElement(APPS['default']);
};

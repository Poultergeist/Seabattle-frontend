import { lazy, Suspense, useMemo } from 'react';

import { APPS, FALLBACK_APP } from '@/shared/config/constants/apps';
import { Helpers } from '@/shared/helpers';

export const EnvironmentProvider = () => {
  const location = window.location.origin;

  const loader = useMemo(
    () => APPS[location as keyof typeof APPS] ?? FALLBACK_APP,
    [location]
  );

  const App = useMemo(
    () =>
      lazy(async () => {
        const module = (await loader()) as Record<string, unknown>;
        return {
          default: (module.default ??
            module.App ??
            module.AppFallback ??
            (() => null)) as React.ComponentType<Record<string, unknown>>,
        };
      }),
    [loader]
  );

  return (
    <>
      <Helpers />
      <Suspense fallback={<div />}>
        <App />
      </Suspense>
    </>
  );
};

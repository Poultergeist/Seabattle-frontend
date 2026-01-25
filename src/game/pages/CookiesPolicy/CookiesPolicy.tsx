/* eslint-disable i18next/no-literal-string */

import { useEffect } from 'react';

import { LOCAL_STORAGE_KEYS } from '@/shared/config';
import { cookieStorage } from '@/shared/lib';
import { useConsentCookiesStore } from '@/shared/store/appStore';
import { Switch } from '@/shared/ui/Switch';

export const CookiesPolicy = () => {
  const { consentCookies, setConsentCookies } = useConsentCookiesStore();

  useEffect(() => {
    if (consentCookies === false) {
      cookieStorage.removeItem(LOCAL_STORAGE_KEYS.STORE);
    }
  }, [consentCookies]);

  return (
    <div className="bg-bg p-8 font-sans text-foreground md:p-16">
      <h1 className="mb-6 text-3xl font-bold md:text-4xl">Cookies Policy</h1>

      {/* Toggle Non-Essential Cookies */}
      <section className="mb-10 flex flex-col gap-3 rounded-lg border border-border bg-light-bg p-6 shadow-md dark:bg-dark-bg">
        <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
          <h2 className="text-xl font-semibold">Allow non-essential cookies</h2>
          <Switch
            checked={!!consentCookies}
            onCheckedChange={setConsentCookies}
            size="medium"
            roundness="normal"
            variant="info"
            text={['On', 'Off']}
          />
        </div>
        <p className="text-sm text-muted-foreground">
          These cookies are used to improve your experience (like saving theme
          or language). You can disable them anytime.
        </p>
      </section>

      {/* Essential Cookies */}
      <section className="mb-10 rounded-lg border border-border bg-light-bg p-6 shadow-md dark:bg-dark-bg">
        <h2 className="mb-4 text-xl font-semibold">Essential Cookies</h2>
        <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
          <li>
            <strong>JWT HttpOnly Cookie:</strong> Used to authenticate you
            securely with our services.
          </li>
          <li>
            <strong>Allow Using Non-Essential Cookies Cookie:</strong> Stores
            your consent choice so you don’t see this message every time.
          </li>
        </ul>
      </section>

      {/* Non-Essential Cookies */}
      <section className="mb-10 rounded-lg border border-border bg-light-bg p-6 shadow-md dark:bg-dark-bg">
        <h2 className="mb-4 text-xl font-semibold">Non-Essential Cookies</h2>
        <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
          <li>
            <strong>Theme & Language:</strong> Saves your UI preferences across
            pages and services for a consistent experience.
          </li>
        </ul>
      </section>

      <div className="mt-16 text-sm text-muted-foreground">
        Last updated: January 2026
      </div>
    </div>
  );
};

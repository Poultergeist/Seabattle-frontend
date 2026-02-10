import { QueryClientProvider as TanStackQueryClientProvider } from '@tanstack/react-query';
import { type ReactNode } from 'react';

import { queryClient } from '@/shared/api/client';

export const QueryClientProvider = ({ children }: { children: ReactNode }) => {
  return (
    <TanStackQueryClientProvider client={queryClient}>
      {children}
    </TanStackQueryClientProvider>
  );
};

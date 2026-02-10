import * as React from 'react';

import { cn } from '@/shared/utils';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'shadow-glow focus-visible:border-primary focus-visible:shadow-primary',
        'file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground',
        'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
        'dark:bg-input/30 aria-invalid:ring-danger/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 disabled:bg-input/50 dark:disabled:bg-input/80 focus-visible:ring-3 aria-invalid:ring-3 h-8 w-full min-w-0 rounded-lg border border-border bg-transparent px-2.5 py-1 text-base outline-none transition-colors placeholder:text-muted-foreground md:text-sm',
        className
      )}
      {...props}
    />
  );
}

export { Input };

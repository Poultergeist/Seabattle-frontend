import { cva, type VariantProps } from 'class-variance-authority';

export const previewVariants = cva(
  'h-10 w-10 border border-border rounded-lg',
  {
    variants: {
      color: {
        bg: 'bg-bg',
        'dark-bg': 'bg-dark-bg',
        'light-bg': 'bg-light-bg',
        border: 'bg-border',

        primary: 'bg-primary',
        'primary-dark': 'bg-primary-dark',

        secondary: 'bg-secondary',
        'secondary-dark': 'bg-secondary-dark',

        accent: 'bg-accent',
        'accent-dark': 'bg-accent-dark',

        danger: 'bg-danger',
        'danger-dark': 'bg-danger-dark',

        warning: 'bg-warning',
        'warning-dark': 'bg-warning-dark',

        success: 'bg-success',
        'success-dark': 'bg-success-dark',

        info: 'bg-info',
        'info-dark': 'bg-info-dark',

        foreground: 'bg-foreground',
        'muted-foreground': 'bg-muted-foreground',
      },
    },
    defaultVariants: {
      color: 'primary',
    },
  }
);

export type PreviewVariants = VariantProps<typeof previewVariants>;

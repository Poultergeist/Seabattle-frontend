import { cva, type VariantProps } from 'class-variance-authority';

export const switchVariants = cva(
  'shadow-md shadow-dark-bg p-1 data-[state=off]:border-muted-foreground',
  {
    variants: {
      size: {
        small: 'h-6 w-10 text-3xs',
        medium: 'h-8 w-14 text-2xs',
        large: 'h-10 w-18 text-sm',
      },
      roundness: {
        normal: 'rounded-full',
        square: 'rounded-md',
        extra: 'rounded-xl',
      },
      variant: {
        base: 'border border-border bg-light-bg hover:border-info dark:hover:border-info-dark',
        info: 'border border-info-dark bg-light-bg',
        danger: 'border border-danger-dark bg-light-bg',
        theme:
          'border border-primary bg-light-bg data-[state=off]:border-primary-dark',
      },
    },
    defaultVariants: {
      size: 'medium',
      roundness: 'normal',
      variant: 'base',
    },
  }
);

export const switchThumbVariants = cva(
  'absolute z-10 aspect-square h-full shadow-md shadow-light-bg top-0 overflow-hidden transition-colors data-[state=on]:right-0 data-[state=off]:left-0 data-[state=off]:bg-muted-foreground data-[state=off]:dark:bg-muted-foreground',
  {
    variants: {
      roundness: {
        normal: 'rounded-full',
        square: 'rounded-sm',
        extra: 'rounded-lg',
      },
      variant: {
        base: 'bg-primary dark:bg-primary-dark',
        info: 'bg-info dark:bg-info-dark',
        danger: 'bg-danger dark:bg-danger-dark',
        theme:
          'data-[state=off]:bg-primary-dark data-[state=on]:bg-primary-dark data-[state=on]:border-primary-dark',
      },
    },
    defaultVariants: {
      roundness: 'normal',
      variant: 'base',
    },
  }
);

export type SwitchVariants = VariantProps<typeof switchVariants>;

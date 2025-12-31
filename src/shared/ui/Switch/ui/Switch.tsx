import { motion } from 'framer-motion';

import { cn } from '@/shared/utils/cn';

import {
  switchVariants,
  switchThumbVariants,
  type SwitchVariants,
} from './switch.variants';

type SwitchProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  /** Current state of the switch */
  checked: boolean;
  /** Callback when the switch state changes */
  onCheckedChange: (checked: boolean) => void;
  /** Additional class names */
  className?: string;
  /** Icon to display inside the switch */
  icon?: React.ReactNode;
  /** On/Off text */
  text?: [string] | [string, string];
} & SwitchVariants;

export const Switch = ({
  checked,
  onCheckedChange,
  className,
  icon,
  text,
  size,
  roundness,
  variant,
  ...rest
}: SwitchProps) => {
  const onText = text ? text[0] : undefined;
  const offText = text && text[1] ? text[1] : onText;

  return (
    <>
      <button
        className={cn(switchVariants({ size, roundness, variant }), className)}
        onClick={() => onCheckedChange(!checked)}
        data-state={checked ? 'on' : 'off'}
        role="switch"
        aria-checked={checked}
        {...rest}
      >
        <div className="relative size-full">
          {onText && !checked && (
            <span className="absolute right-0 top-1/2 -translate-y-1/2">
              {offText}
            </span>
          )}
          {offText && checked && (
            <span className="absolute left-0 top-1/2 -translate-y-1/2">
              {onText}
            </span>
          )}
          <motion.div
            className={switchThumbVariants({ roundness, variant })}
            layout
            transition={{ type: 'spring', stiffness: 700, damping: 30 }}
            data-state={checked ? 'on' : 'off'}
          >
            {icon && (
              <div className="absolute inset-0 flex items-center justify-center">
                {icon}
              </div>
            )}
          </motion.div>
        </div>
      </button>
    </>
  );
};

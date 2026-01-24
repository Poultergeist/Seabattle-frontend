import { motion, AnimatePresence } from 'framer-motion';

import { useSharedStore } from '@/shared/store';
import { cn } from '@/shared/utils';

import { Button } from '../../Button';

export const CookiesBanner = () => {
  const { not, setNot } = useSharedStore();

  return (
    <AnimatePresence>
      {!not && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className={cn(
            'bg-background fixed inset-x-1 bottom-1 flex flex-col gap-1 rounded-lg border border-border p-2 shadow-sm md:px-8 md:py-4',
            'md:bottom-2 md:left-auto md:right-2'
          )}
        >
          <h2 className="mb-2 text-center font-bold md:mb-0 md:text-xl">
            {'We use cookies to improve your experience on our site.'}
          </h2>
          <p className="text-center text-sm md:text-base">
            {'By using our site, you consent to cookies.'}
          </p>
          <p className="text-center text-sm md:text-base">
            {'Do we have your permission to set cookies?'}
          </p>

          <div className="mt-2 flex flex-col justify-center gap-1 md:mt-0 md:flex-row">
            <Button
              className="flex-1 py-2 font-bold md:py-6 md:text-lg"
              onClick={() => setNot(true)}
            >
              {'Yes, you may set cookies'}
            </Button>

            <Button
              className="flex-1 py-2 font-bold md:py-6 md:text-lg"
              variant="outline"
              onClick={() => setNot(true)}
            >
              {'Yes, but different color'}
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

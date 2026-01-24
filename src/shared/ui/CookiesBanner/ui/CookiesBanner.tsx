import { motion, AnimatePresence } from 'framer-motion';

import { useSharedStore } from '@/shared/store';

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
          className="bg-background fixed bottom-2 right-2 flex flex-col gap-1 rounded-lg border border-border px-8 py-4 shadow-sm"
        >
          <h2 className="text-xl font-bold">
            {'We use cookies to improve your experience on our site.'}
          </h2>
          <p className="text-center">
            {'By using our site, you consent to cookies.'}
          </p>
          <p className="text-center">
            {'Do we have your permission to set cookies?'}
          </p>

          <div className="flex justify-center gap-2">
            <Button
              className="flex-1 py-6 text-lg font-bold"
              onClick={() => setNot(true)}
            >
              {'Yes, you may set cookies'}
            </Button>

            <Button
              className="flex-1 py-6 text-lg font-bold"
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

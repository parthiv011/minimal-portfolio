import { motion, AnimatePresence } from 'framer-motion';
import { CgChevronRight } from 'react-icons/cg';
import { BiRightArrowAlt } from 'react-icons/bi';
import { useState, useEffect } from 'react';
import { getCalApi } from '@calcom/embed-react';

export default function ConnectButton() {
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: '30min' });
      cal('ui', {
        hideEventTypeDetails: false,
        layout: 'month_view',
        theme: 'light',
      });
    })();
  }, []);

  return (
    <motion.button
      data-cal-namespace="30min"
      data-cal-link="parthiv-parmar-ah4n0j/30min"
      data-cal-config='{"layout":"month_view", "theme": "light"}'
      className="flex cursor-pointer items-center justify-center gap-1"
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}
      whileHover={{ scale: 1.03 }}
    >
      Let&apos;s Connect!
      <AnimatePresence mode="wait">
        {!isHover ? (
          <motion.span
            key="chevron"
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <CgChevronRight />
          </motion.span>
        ) : (
          <motion.span
            key="arrow"
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <BiRightArrowAlt />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

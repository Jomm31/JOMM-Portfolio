import type { ReactNode, RefObject } from 'react';
import { motion } from 'framer-motion';
import floatingImage from '../assets/floating.webp';

const FLOATING_DEFAULT = {
  top: '50%',
  left: '50%',
};

type FloatingCharacterProps = {
  constraintsRef: RefObject<HTMLDivElement | null>;
  defaultPosition?: typeof FLOATING_DEFAULT;
  children?: ReactNode;
};

function FloatingCharacter({ constraintsRef, defaultPosition = FLOATING_DEFAULT, children }: FloatingCharacterProps) {
  return (
    <div
      className="absolute z-10 flex w-[90vw] max-w-[1400px] flex-col md:flex-row items-center gap-6 md:gap-10 -translate-x-1/2 -translate-y-1/2 px-4"
      style={{ top: defaultPosition.top, left: defaultPosition.left }}
    >
      <motion.img
        src={floatingImage}
        alt="Floating character"
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.1}
        dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
        className="w-32 sm:w-40 md:w-150 max-w-[40vw] md:max-w-[35vw] flex-shrink-0 cursor-grab active:cursor-grabbing will-change-transform"
        whileHover={{ scale: 1.05 }}
        whileDrag={{ scale: 1.1 }}
      />
      {children}
    </div>
  );
}

export default FloatingCharacter;

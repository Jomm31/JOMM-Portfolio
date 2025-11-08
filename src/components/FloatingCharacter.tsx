import type { ReactNode, RefObject } from 'react';
import { motion } from 'framer-motion';
import floatingImage from '../assets/floating.webp';

const FLOATING_DEFAULT = {
  top: '52%',
  left: '70%',
};

type FloatingCharacterProps = {
  constraintsRef: RefObject<HTMLDivElement | null>;
  defaultPosition?: typeof FLOATING_DEFAULT;
  children?: ReactNode;
};

function FloatingCharacter({ constraintsRef, defaultPosition = FLOATING_DEFAULT, children }: FloatingCharacterProps) {
  return (
    <div
      className=" absolute z-10 flex w-[100vw] items-center gap-10 -translate-x-1/2 -translate-y-1/2"
      style={{ top: defaultPosition.top, left: defaultPosition.left }}
    >
      <motion.img
        src={floatingImage}
        alt="Floating character"
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.1}
        dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
        className="w-150 max-w-[50vw] cursor-grab active:cursor-grabbing will-change-transform"
        whileHover={{ scale: 1.05 }}
        whileDrag={{ scale: 1.1 }}
      />
      {children}
    </div>
  );
}

export default FloatingCharacter;

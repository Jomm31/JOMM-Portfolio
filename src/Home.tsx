import { useRef } from 'react';
import { motion } from 'framer-motion';
import floatingImage from './assets/floating.webp';
import Landscape from './components/Landscape.tsx';

const FLOATING_DEFAULT = {
  top: '46%',
  left: '35%',
};

function Home() {
  const constraintsRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={constraintsRef} className="relative w-full min-h-screen overflow-hidden">
      <motion.img
        src={floatingImage}
        alt="Floating character"
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.1}
        dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
        className="absolute z-10 w-150  -translate-x-1/2 -translate-y-1/2 cursor-grab active:cursor-grabbing will-change-transform"
        style={{ top: FLOATING_DEFAULT.top, left: FLOATING_DEFAULT.left }}
        whileHover={{ scale: 1.05 }}
        whileDrag={{ scale: 1.1 }}
      />
      <Landscape />
    </div>
  );
}

export default Home;

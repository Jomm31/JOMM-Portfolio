import { useRef } from 'react';
import FloatingCharacter from './components/FloatingCharacter.tsx';
import Landscape from './components/Landscape.tsx';

function Home() {
  const constraintsRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={constraintsRef} className="relative w-full h-[100vh] ">
      <Landscape />
      <FloatingCharacter constraintsRef={constraintsRef}>
        <div className="pointer-events-none flex flex-col gap-1 text-right text-white drop-shadow-md ml-4">
          <h1 className="text-6xl leading-tight" style={{ fontFamily: 'pixelGridL' }}>
            HI, I'M JOEMIRE<br />DAVE LOEREMAS
          </h1>
          <h6 className="text-2xl uppercase tracking-wide" style={{ fontFamily: 'pixelGridS' }}>
            WEBSITE DEVELOPER | UI/UX DESIGNER
          </h6>
        </div>
      </FloatingCharacter>
    </div>
  );
}

export default Home;
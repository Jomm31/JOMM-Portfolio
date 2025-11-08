import { useRef } from 'react';
import FloatingCharacter from './components/FloatingCharacter.tsx';
import Landscape from './components/Landscape.tsx';
import csv from './assets/socials/csv.png'
import github from './assets/socials/github.png'
import telegram from './assets/socials/telegram.png'
import linkedin from './assets/socials/linkedin.png'
import gmail from './assets/socials/gmail.png'

function Home() {
  const constraintsRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={constraintsRef} className="relative w-full min-h-screen overflow-hidden">
      <Landscape />
      <FloatingCharacter constraintsRef={constraintsRef}>
        <div className="pointer-events-none flex flex-col gap-2 md:gap-3 text-center md:text-right text-white drop-shadow-md w-full md:ml-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight" style={{ fontFamily: 'pixelGridL' }}>
            HI, I'M JOEMIRE<br />DAVE LOEREMAS
          </h1>
          <h6 className="text-base sm:text-xl md:text-2xl uppercase tracking-wide" style={{ fontFamily: 'pixelGridS' }}>
            WEBSITE DEVELOPER | UI/UX DESIGNER
          </h6>

          <div className="mt-3 md:mt-4 flex justify-center md:justify-end gap-3 md:gap-4 pointer-events-auto">
            <a href="" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"> <img src={csv} alt="" className="w-full h-full object-contain" /></a>
            <a href="" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"> <img src={github} alt="" className="w-full h-full object-contain" /></a>
            <a href="" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"> <img src={telegram} alt="" className="w-full h-full object-contain" /></a>
            <a href="" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"> <img src={linkedin} alt="" className="w-full h-full object-contain" /></a>
            <a href="" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"> <img src={gmail} alt="" className="w-full h-full object-contain" /></a>
          </div>
        </div>
      </FloatingCharacter>
    </div>
  );
}

export default Home;
import { useState, useRef } from 'react';
import charImage from './assets/char.webp';
import frameImage from './assets/frame 1.png';

// Import all coin frames
import coin1 from './assets/coin/coin_1.png';
import coin2 from './assets/coin/coin_2.png';
import coin3 from './assets/coin/coin_3.png';
import coin4 from './assets/coin/coin_4.png';
import coin5 from './assets/coin/coin_5.png';
import coin6 from './assets/coin/coin_6.png';
import coin7 from './assets/coin/coin_7.png';
import coin8 from './assets/coin/coin_8.png';
import coin9 from './assets/coin/coin_9.png';
import coin10 from './assets/coin/coin_10.png';
import coin11 from './assets/coin/coin_11.png';
import coin12 from './assets/coin/coin_12.png';
import coin13 from './assets/coin/coin_13.png';
import coin14 from './assets/coin/coin_14.png';
import coin15 from './assets/coin/coin_15.png';
import coin16 from './assets/coin/coin_16.png';

const coinFrames = [coin1, coin2, coin3, coin4, coin5, coin6, coin7, coin8, coin9, coin10, coin11, coin12, coin13, coin14
  ,coin15, coin16
];

function About() {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<number | null>(null);
  const shouldStopRef = useRef(false);

  const handleMouseEnter = () => {
    shouldStopRef.current = false;
    
    if (!isAnimating) {
      setIsAnimating(true);
      let frame = currentFrame;
      
      intervalRef.current = window.setInterval(() => {
        frame = (frame + 1) % coinFrames.length;
        setCurrentFrame(frame);
        
        // If we've completed a full cycle and should stop
        if (frame === 0 && shouldStopRef.current) {
          if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
          setIsAnimating(false);
        }
      }, 100);
    }
  };

  const handleMouseLeave = () => {
    // Signal that we want to stop after completing the cycle
    shouldStopRef.current = true;
  };

  return (
    <section id="about" className="relative z-20 w-full bg-gradient-to-b from-[#01293C] to-[#0F0732] py-20 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Content Container */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left Column - Title and Description */}
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <div 
                className="relative z-30 cursor-pointer"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <img 
                  src={coinFrames[currentFrame]} 
                  alt="Coin" 
                  className="h-[200px] mt-[-120px]"
                  style={{ imageRendering: 'pixelated' }}
                />
              </div>
              <h2
                className="text-6xl md:text-7xl text-white"
                style={{ fontFamily: 'pixelGridL' }}
              >
                ABOUT ME
              </h2>
            </div>

            <p
              className="text-xl md:text-2xl text-white leading-relaxed"
              style={{ fontFamily: 'pixelGridS' }}
            >
              I'm a full stack web developer and designer with a passion for creating memorable experiences through interactive design. From clean responsive interfaces to functional backends.
            </p>
          </div>

          {/* Right Column - Framed Character Image */}
          <div className="flex-shrink-0 w-full lg:w-auto">
            <div className="relative inline-block">
              {/* Character behind frame */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src={charImage} 
                  alt="Joemire Dave Loeremas" 
                  className="w-[259px] h-[259px] md:w-[299px] md:h-[299px] object-contain"
                  style={{ imageRendering: 'pixelated' }}
                />
              </div>
              {/* Frame on top */}
              <img 
                src={frameImage} 
                alt="Frame" 
                className="relative z-10 w-[300px] h-[300px] md:w-[350px] md:h-[350px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

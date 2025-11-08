import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

const VIDEO_SRC = '/Landscape.webm';

const Landscape = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [tileCount, setTileCount] = useState(3); // Start with reasonable default

  const indices = useMemo(() => {
    const half = Math.floor(tileCount / 2);
    return Array.from({ length: Math.min(tileCount, 7) }, (_, i) => i - half); // Cap at 7 tiles
  }, [tileCount]);

  const recalcTiles = useCallback(() => {
    const container = containerRef.current;
    const video = videoRef.current;

    if (!container || !video) return;

    const baseWidth = video.getBoundingClientRect().width || video.videoWidth;
    if (!baseWidth) return;

    const raw = Math.ceil((container.offsetWidth + baseWidth) / baseWidth);
    const normalized = Math.min(raw % 2 === 0 ? raw + 1 : raw, 7); // Cap at 7

    setTileCount((prev) => (prev !== normalized ? normalized : prev));
  }, []);

  const handleLoadedMetadata = useCallback(() => {
    recalcTiles();
  }, [recalcTiles]);

  useEffect(() => {
    const timer = setTimeout(() => recalcTiles(), 100);

    let resizeTimeout: number;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => recalcTiles(), 250); // Increased debounce
    };

    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      clearTimeout(timer);
      clearTimeout(resizeTimeout);
      window.removeEventListener('resize', handleResize);
    };
  }, [recalcTiles]);

  return (
    <div
      ref={containerRef}
      className="relative z-1 flex w-full items-end justify-center overflow-hidden"
    >
      <div className="flex items-end justify-center gap-0">
        {indices.map((offset) => {
          const mirrored = Math.abs(offset) % 2 === 1;

          return (
            <video
              key={offset}
              ref={offset === 0 ? videoRef : null}
              src={VIDEO_SRC}
              autoPlay
              loop
              muted
              playsInline
              preload={offset === 0 ? "auto" : "metadata"} // Only preload center video
              onLoadedMetadata={offset === 0 ? handleLoadedMetadata : undefined}
              className="block h-[888px] w-auto object-cover object-bottom mx-[-2px] mt-[70px]"
              style={{
                transform: `scaleX(${mirrored ? -1 : 1}) translateZ(0)`,
                transformOrigin: 'center',
                willChange: 'transform',
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Landscape;
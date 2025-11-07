import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

const VIDEO_SRC = '/Landscape.webm';

const Landscape = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [tileCount, setTileCount] = useState(1);

  const indices = useMemo(() => {
    const half = Math.floor(tileCount / 2);
    return Array.from({ length: tileCount }, (_, i) => i - half);
  }, [tileCount]);

  const recalcTiles = useCallback(() => {
    const container = containerRef.current;
    const video = videoRef.current;

    if (!container || !video) return;

    const baseWidth = video.getBoundingClientRect().width || video.videoWidth;
    if (!baseWidth) return;

    const raw = Math.ceil((container.offsetWidth + baseWidth) / baseWidth);
    const normalized = raw % 2 === 0 ? raw + 1 : raw;

    setTileCount((prev) => (prev !== normalized ? normalized : prev));
  }, []);

  const handleLoadedMetadata = useCallback(() => {
    recalcTiles();
  }, [recalcTiles]);

  useEffect(() => {
    recalcTiles();

    const handleResize = () => recalcTiles();
    window.addEventListener('resize', handleResize);

    const container = containerRef.current;
    const observer =
      container &&
      new ResizeObserver(() => {
        recalcTiles();
      });

    if (observer && container) observer.observe(container);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (observer) observer.disconnect();
    };
  }, [recalcTiles]);

  return (
    <div
      ref={containerRef}
      className="relative z-1 mt-[65px] flex w-full items-start justify-center overflow-hidden pb-[60px]"
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
              onLoadedMetadata={offset === 0 ? handleLoadedMetadata : undefined}
              className="block h-auto w-auto max-h-[888px] object-cover object-top mx-[-2px]"
              style={{
                transform: `scaleX(${mirrored ? -1 : 1})`,
                transformOrigin: 'center',
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Landscape;
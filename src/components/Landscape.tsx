import { useState, useEffect, useRef } from 'react';

const Landscape = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoRatio, setVideoRatio] = useState<number | null>(null);
  const [copiesPerSide, setCopiesPerSide] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoaded = () => setVideoRatio(video.videoWidth / video.videoHeight);
    if (video.readyState >= 1) handleLoaded();
    else video.addEventListener('loadedmetadata', handleLoaded);

    return () => video.removeEventListener('loadedmetadata', handleLoaded);
  }, []);

  useEffect(() => {
    if (!videoRatio) return;

    const updateCopies = () => {
      const video = videoRef.current;
      if (!video) return;
      const rect = video.getBoundingClientRect();
      const renderedWidth = rect.width || rect.height * videoRatio;
      const totalNeeded = Math.max(1, Math.ceil(window.innerWidth / renderedWidth));
      const perSide = Math.max(0, Math.ceil((totalNeeded - 1) / 2));
      setCopiesPerSide(perSide);
    };

    updateCopies();
    window.addEventListener('resize', updateCopies);
    return () => window.removeEventListener('resize', updateCopies);
  }, [videoRatio]);

  const baseAttrs = {
    autoPlay: true,
    loop: true,
    muted: true,
    playsInline: true,
    preload: 'auto' as const,
  };
  const baseClass = 'h-full w-auto max-w-none object-cover flex-shrink-0';

  const segments = [];
  for (let offset = -copiesPerSide; offset <= copiesPerSide; offset += 1) {
    const mirrored = Math.abs(offset) % 2 === 1;
    const key =
      offset === 0 ? 'center' : offset < 0 ? `left-${Math.abs(offset)}` : `right-${offset}`;
    const className = `${baseClass}${mirrored ? ' scale-x-[-1]' : ''}`;

    segments.push(
      <video
        key={key}
        ref={offset === 0 ? videoRef : null}
        {...baseAttrs}
        className={className}
        src="/Landscape.webm"
      />,
    );
  }

  return (
    <div className="relative w-full h-screen overflow-hidden bg-transparent">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {segments}
      </div>
    </div>
  );
};

export default Landscape;

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const CLOUD_WIDTH = 2174;

const Clouds = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-x-0 top-20 h-[310px] overflow-hidden pointer-events-none bg-gradient-to-b from-[#2AA0D6] to-[#6CDAEA]"
    >
      <motion.div
        className="absolute inset-y-0 left-0 top-[20px] flex h-full"
        animate={isVisible ? { x: [0, -CLOUD_WIDTH] } : { x: 0 }}
        transition={{
          duration: 200,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        style={{ willChange: "transform" }}
      >
        {[0, 1, 2].map((i) => (
          <img
            key={i}
            src="/Clouds.png"
            alt=""
            loading={i === 0 ? "eager" : "lazy"}
            decoding="async"
            className="h-full w-[2174px] flex-shrink-0"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Clouds;

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type MarqueeContent = {
  value: string;
  sponsors: string[];
};

interface VerticalMarqueeProps {
  className?: string;
  scrollSpeed?: number; // Speed in pixels per frame
  content?: MarqueeContent[];
}

const VerticalMarquee: React.FC<VerticalMarqueeProps> = ({
  className = "",
  scrollSpeed = 2, // Default speed
  content = [],
}) => {
  const marqueeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;

    if (!marquee) return; // Safeguard for null reference

    let startPosition = window.innerHeight; // Start at the bottom of the screen

    const scroll = () => {
      startPosition -= scrollSpeed;

      // Reset to bottom of the screen when it scrolls past the top
      if (startPosition <= -marquee.scrollHeight) {
        startPosition = window.innerHeight;
      }

      marquee.style.transform = `translateY(${startPosition}px)`;
    };

    const interval = setInterval(scroll, 20); // Adjust smoothness (20ms per frame)

    return () => clearInterval(interval); // Clean up on component unmount
  }, [scrollSpeed]);

  return (
    <div className={cn(className, "h-full relative")}>
      <div
        ref={marqueeRef}
        className="absolute w-full items-center flex flex-col gap-4"
      >
        {content.map((e, i) => (
          <div className="py-5 flex flex-col gap-2" key={"value" + i}>
            <div className="flex flex-col items-center">
              <p className="text-3xl text-center font-bold">{e.value}</p>
              <p className="text-3xl font-bold text-center">功德主</p>
            </div>
            {e.sponsors.map((sponsor, j) => (
              <div key={"sponsor" + j} className="text-xl font-bold text-center">
                {sponsor}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalMarquee;

"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: { id: number; imgPath: string }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      setStart(true);
    }
  }, []);

  const getSpeed = () => {
    return speed === "fast" ? "9s" : speed === "normal" ? "30s" : "60s";
  };

  return (
    <div
      ref={containerRef}
      className={`relative z-20 w-full overflow-hidden ${className}`}
      style={{
        "--animation-duration": getSpeed(),
        "--animation-direction": direction === "left" ? "forwards" : "reverse",
      } as React.CSSProperties}
    >
      <ul
        ref={scrollerRef}
        className={`flex min-w-full gap-4 py-4 w-max flex-nowrap ${
          start ? "animate-scroll" : ""
        } ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`}
      >
        {[...items, ...items].map((item, index) => (
          <li
            key={`${item.id}-${index}`} // Ensure unique keys
            className="w-[150px] h-[100px] flex items-center justify-center shrink-0"
          >
            <Image
              src={item.imgPath}
              alt="Client Logo"
              width={150}
              height={100}
              className="object-contain"
            />
          </li>
        ))}
      </ul>

      {/* Tailwind animation CSS */}
      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll var(--animation-duration, 30s) linear infinite;
          animation-direction: var(--animation-direction, forwards);
        }
      `}</style>
    </div>
  );
};

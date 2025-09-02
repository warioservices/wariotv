import { useEffect, useState } from "react";

export const FennecMascot = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isWinking, setIsWinking] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    // Wink animation every 5 seconds
    const winkInterval = setInterval(() => {
      triggerWink();
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearInterval(winkInterval);
    };
  }, []);

  const triggerWink = () => {
    setIsWinking(false); // reset animation
    setTimeout(() => setIsWinking(true), 10); // relancer animation
    setTimeout(() => setIsWinking(false), 310); // remettre yeux ouverts
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-1000 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      } hover:scale-110 hover:-translate-y-2`}
    >
      <div className="relative animate-float">
        <svg
          width="80"
          height="80"
          viewBox="0 0 100 100"
          className="drop-shadow-lg cursor-pointer"
          onClick={triggerWink}
        >
          {/* Shadow */}
          <ellipse cx="50" cy="90" rx="25" ry="8" fill="#00000020" />

          {/* Body */}
          <ellipse cx="50" cy="70" rx="18" ry="25" fill="#F4A460" />

          {/* Head */}
          <circle cx="50" cy="40" r="20" fill="#F4A460" />

          {/* Ears */}
          <path d="M35 25 L30 10 L45 20 Z" fill="#F4A460" />
          <path d="M65 25 L70 10 L55 20 Z" fill="#F4A460" />
          <path d="M35 22 L32 12 L42 18 Z" fill="#FFE4B5" />
          <path d="M65 22 L68 12 L58 18 Z" fill="#FFE4B5" />

          {/* Face markings */}
          <path d="M30 35 Q50 30 70 35 Q50 45 30 35" fill="#FFFFFF" />

          {/* Eyes */}
          <circle
            key={isWinking ? "wink-left" : "normal-left"}
            cx="42"
            cy="35"
            r="3"
            fill="#000000"
            className={isWinking ? "animate-wink-left" : ""}
          />
          <circle
            key={isWinking ? "wink-right" : "normal-right"}
            cx="58"
            cy="35"
            r="3"
            fill="#000000"
            className={isWinking ? "animate-wink-right" : ""}
          />

          {/* Eye highlights */}
          <circle
            cx="43"
            cy="34"
            r="1"
            fill="#FFFFFF"
            className={isWinking ? "opacity-0" : "opacity-100"}
          />
          <circle
            cx="59"
            cy="34"
            r="1"
            fill="#FFFFFF"
            className={isWinking ? "opacity-0" : "opacity-100"}
          />

          {/* Nose */}
          <circle cx="50" cy="42" r="1.5" fill="#000000" />

          {/* Mouth */}
          <path
            d="M47 45 Q50 48 53 45"
            stroke="#000000"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
          />

          {/* Tail */}
          <ellipse
            cx="30"
            cy="75"
            rx="8"
            ry="15"
            fill="#F4A460"
            transform="rotate(-30 30 75)"
          />
          <ellipse
            cx="28"
            cy="72"
            rx="4"
            ry="8"
            fill="#FFFFFF"
            transform="rotate(-30 28 72)"
          />

          {/* Paws */}
          <circle cx="42" cy="88" r="4" fill="#F4A460" />
          <circle cx="58" cy="88" r="4" fill="#F4A460" />
        </svg>

        {/* Speech bubble on hover */}
        <div className="absolute -top-12 -left-8 bg-white rounded-lg px-3 py-2 shadow-lg opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <p className="text-sm text-gray-800 whitespace-nowrap">Salut ! 👋</p>
          <div className="absolute bottom-0 left-8 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white transform translate-y-full"></div>
        </div>
      </div>
    </div>
  );
};

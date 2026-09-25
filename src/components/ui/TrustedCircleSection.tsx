"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

interface FeatureCard {
  number: string;
  title: string;
  description: string;
}

const featureCards: FeatureCard[] = [
  {
    number: "01",
    title: "BUILD YOUR CIRCLE",
    description:
      "Add up to five people. They accept on WhatsApp and don't need the app.",
  },
  {
    number: "02",
    title: "ALERTED WHEN IT MATTERS",
    description:
      "Trigger SOS or miss a check-in, and your Circle is alerted instantly.",
  },
  {
    number: "03",
    title: "THEY CAN ACT FAST",
    description:
      "They see your live location, hear audio, and get directions to help.",
  },
];

export function TrustedCircleSection() {
  const [activeCard, setActiveCard] = useState(1);
  const isHoveredRef = useRef(false);

  // Auto-progress feature cards every 4.5s
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isHoveredRef.current && !isUserTouchingRef.current) {
        setActiveCard((prev) => (prev + 1) % featureCards.length);
      }
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const handleCardClick = useCallback((index: number) => {
    setActiveCard(index);
  }, []);

  // Mobile horizontal swipe carousel refs & synchronization
  const mobileCardsScrollRef = useRef<HTMLDivElement>(null);
  const mobileCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isUserTouchingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-scroll active card into view on mobile
  useEffect(() => {
    if (isUserTouchingRef.current) return;
    const cardEl = mobileCardRefs.current[activeCard];
    const container = mobileCardsScrollRef.current;
    if (cardEl && container) {
      const cardLeft = cardEl.offsetLeft;
      const cardWidth = cardEl.offsetWidth;
      const containerWidth = container.offsetWidth;
      const targetScroll = cardLeft - (containerWidth - cardWidth) / 2;
      container.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  }, [activeCard]);

  // Handle user touch swipe / scroll on mobile
  const handleMobileScroll = () => {
    if (!mobileCardsScrollRef.current) return;
    isUserTouchingRef.current = true;

    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = setTimeout(() => {
      if (!mobileCardsScrollRef.current) return;
      const container = mobileCardsScrollRef.current;
      const containerCenter = container.scrollLeft + container.offsetWidth / 2;

      let closestIndex = 0;
      let minDistance = Infinity;

      mobileCardRefs.current.forEach((el, idx) => {
        if (!el) return;
        const cardCenter = el.offsetLeft + el.offsetWidth / 2;
        const distance = Math.abs(cardCenter - containerCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = idx;
        }
      });

      if (closestIndex !== activeCard) {
        setActiveCard(closestIndex);
      }

      isUserTouchingRef.current = false;
    }, 120);
  };

  const handleMobileCardTap = (index: number) => {
    isUserTouchingRef.current = false;
    setActiveCard(index);
    const cardEl = mobileCardRefs.current[index];
    const container = mobileCardsScrollRef.current;
    if (cardEl && container) {
      const cardLeft = cardEl.offsetLeft;
      const cardWidth = cardEl.offsetWidth;
      const containerWidth = container.offsetWidth;
      const targetScroll = cardLeft - (containerWidth - cardWidth) / 2;
      container.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      className="w-full bg-[#0A0A0A] text-white pt-4 md:pt-6 pb-16 md:pb-24 relative z-50 overflow-hidden select-none"
      onMouseEnter={() => {
        isHoveredRef.current = true;
      }}
      onMouseLeave={() => {
        isHoveredRef.current = false;
      }}
    >
      {/* Orbital Animation Styles */}
      <style>{`
        @keyframes tcOrbitAnimation {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes tcCounterOrbitAnimation {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }

        @keyframes tcCenterPulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.04);
          }
        }

        .tc-orbit-container {
          animation: tcOrbitAnimation 26s linear infinite;
        }

        .tc-counter-node {
          animation: tcCounterOrbitAnimation 26s linear infinite;
        }

        .tc-center-pulse {
          animation: tcCenterPulse 3s ease-in-out infinite;
        }

        .tc-radar-card:hover .tc-orbit-container,
        .tc-radar-card:hover .tc-counter-node {
          animation-play-state: paused;
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="w-full max-w-[1240px] mx-auto px-4 md:px-8 flex flex-col items-center">
        {/* Eyebrow Header */}
        <p
          className="m-0 text-[#E6007E] font-normal uppercase text-center text-[18px] md:text-[20px] tracking-[2px]"
          style={{
            fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
          }}
        >
          TRUSTED CIRCLE
        </p>

        {/* Main Headline */}
        <h2
          className="m-0 text-white font-normal uppercase text-center text-[42px] sm:text-[56px] md:text-[76px] lg:text-[84px] leading-[95%] tracking-normal mt-2"
          style={{
            fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
          }}
        >
          YOUR PEOPLE, ALWAYS IN
          <br />
          THE LOOP.
        </h2>

        {/* Subtitle */}
        <p className="m-0 mt-4 text-[#9E9E9E] font-normal text-[15px] md:text-[17px] leading-[140%] text-center max-w-[600px] font-[family-name:var(--font-inter)]">
          Up to five people you trust, informed and ready to act.
        </p>

        {/* Main Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 w-full mt-12 md:mt-16 items-center">
          
          {/* Left Column: Network Radar Visual Card with Orbital Animation */}
          <div className="tc-radar-card w-full bg-[#111111] rounded-[24px] border border-white/5 p-4 sm:p-6 md:p-8 flex items-center justify-center min-h-[380px] sm:min-h-[440px] md:min-h-[480px] relative overflow-hidden shadow-2xl group">
            {/* Ambient background glow */}
            <div
              className="w-[280px] h-[280px] rounded-full bg-[#E6007E]/10 absolute pointer-events-none blur-[80px]"
            />

            {/* SVG Network Radar with Animated Orbit */}
            <svg
              viewBox="0 0 500 460"
              className="w-full max-w-[440px] h-auto drop-shadow-xl select-none"
            >
              <defs>
                {/* Hot Pink Node Glow */}
                <filter id="pinkGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                {/* Center YOU Glow */}
                <filter id="centerGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="8" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                {/* Nazr White Owl Icon Graphic (350x350 box, centered at 175,175) */}
                <g id="nazrOwlGraphic">
                  <path
                    d="M286.084 143.659C285.42 144.256 284.591 144.905 283.52 145.676C274.703 152.031 263.514 155.985 251.665 160.174C231.364 167.349 210.371 174.766 197.025 195.178C193.593 200.427 192.281 205.748 193.202 210.291C194.545 208.056 195.827 206.035 197.447 203.849L199.002 201.749L200.506 203.883C205.78 211.371 213.906 215.665 222.8 215.665C227.69 215.665 232.68 214.355 237.225 211.874C244.046 208.15 248.614 202.44 250.091 195.797C251.538 189.283 249.876 182.394 245.405 176.409L243.981 174.505L258.954 168.448L259.841 169.445C267.886 178.52 270.477 189.845 267.334 202.206C264.056 215.091 253.396 226.051 239.52 230.809C234.319 232.591 229.03 233.494 223.794 233.494C216.67 233.494 209.7 231.859 202.99 228.622C205.969 231.87 209.792 234.4 213.365 236.61C219.322 240.292 226.343 242.237 233.667 242.237C240.99 242.237 247.857 240.45 254.294 237.074C258.766 234.729 262.704 231.757 266.339 227.98C273.218 220.835 277.978 211.636 280.112 201.375C281.831 193.101 281.448 188.059 281.44 187.995C280.853 180.4 279.448 173.693 277.018 166.888C274.941 161.061 275.87 156.518 280.035 152.156C282.883 149.169 284.894 146.348 286.077 143.663L286.084 143.659ZM244.219 188.335L246.767 188.614C247.374 188.769 247.266 189.415 246.675 189.392C242.368 189.241 240.856 188.437 239.305 190.793C238.672 191.753 238.48 193.358 239.409 194.781L243.416 199.015C243.439 200.269 238.023 194.453 234.292 197.244C231.156 199.589 235.348 206.934 234.093 206.794L230.784 201.53C230.204 200.692 228.051 200.253 226.569 200.767C223.218 201.934 223.967 208.403 223.303 208.267C222.528 208.158 223.353 202.104 221.065 200.506C220.225 199.921 218.854 200.182 218.14 200.914L213.503 205.665C212.206 205.854 217.776 200.068 213.676 197.032C209.028 193.588 204.905 198.969 204.648 197.84L209.807 193.512C215.438 188.788 218.969 202.761 232.062 195C241.393 189.468 235.379 177.251 237.601 178.98C237.774 179.113 238.25 180.231 238.304 180.786C238.373 181.496 238.476 182.345 238.568 182.9C238.971 185.283 240.158 187.765 244.219 188.327V188.335Z"
                    fill="#FFFFFF"
                  />
                  <path
                    d="M116.667 166.323L88.2933 155.606C80.4552 152.645 73.4309 149.858 66.8442 145.715C65.6005 144.933 64.6601 143.895 63.8962 142.765C65.3318 146.636 68.0533 149.756 69.5886 151.308C74.2447 156.01 75.3463 160.64 73.262 166.788C70.6864 174.401 69.2969 181.112 68.8977 187.925C68.8862 188.102 67.7308 205.852 75.1006 215.818L75.5267 216.414L75.5113 216.554C80.8122 226.154 88.0208 233.107 97.5248 237.793C103.39 240.686 109.908 242.215 116.371 242.215C125.841 242.215 135.022 238.96 142.219 233.05L142.576 232.759C144.227 231.403 145.835 230.085 147.259 228.635C140.523 231.86 133.587 233.492 126.559 233.492C121.2 233.492 115.75 232.533 110.357 230.637C97.2599 226.033 86.923 215.663 83.3763 203.563C79.6568 190.878 82.1787 178.767 90.4697 169.469L91.3641 168.464L106.33 174.699L104.891 176.588C100.611 182.207 98.8912 188.733 100.043 194.96C101.225 201.365 105.309 207.045 111.539 210.95C116.487 214.05 121.999 215.693 127.488 215.693C136.389 215.693 144.542 211.358 149.85 203.797L151.482 201.471L157.063 210.357C157.677 206.966 157.178 203.321 155.558 199.469C149.255 184.496 128.62 170.836 116.659 166.319L116.667 166.323ZM138.185 199.371C134.086 202.407 139.655 208.193 138.358 208.004L133.721 203.253C133.007 202.521 131.637 202.256 130.796 202.846C128.509 204.443 129.33 210.497 128.558 210.606C127.894 210.742 128.643 204.273 125.292 203.106C123.807 202.589 121.657 203.031 121.077 203.865L117.769 209.13C116.513 209.266 120.705 201.924 117.569 199.579C113.838 196.788 108.422 202.604 108.445 201.35L112.452 197.117C113.385 195.689 113.189 194.088 112.556 193.129C111.005 190.772 109.493 191.577 105.186 191.728C104.595 191.746 104.488 191.104 105.094 190.95L107.643 190.67C111.704 190.107 112.894 187.626 113.293 185.243C113.385 184.688 113.489 183.842 113.558 183.129C113.612 182.573 114.088 181.459 114.26 181.323C116.487 179.59 110.472 191.811 119.799 197.343C132.888 205.104 136.423 191.135 142.051 195.855L147.209 200.183C146.952 201.309 142.83 195.927 138.181 199.375L138.185 199.371Z"
                    fill="#FFFFFF"
                  />
                  <path
                    d="M187.565 236.028C192.206 236.919 195.818 241.534 195.51 246.262C195.2 251.096 191.169 256.028 184.966 255.915C184.54 255.907 184.118 255.888 183.7 255.858C181.45 255.696 179.669 255.19 178.372 254.344C180.571 256.406 183.274 257.633 186.122 257.837C188.121 257.98 190.11 257.629 192.029 256.787C196.981 254.616 199.598 249.634 198.397 244.672C197.303 240.148 192.981 236.719 187.561 236.024L187.565 236.028Z"
                    fill="#FFFFFF"
                  />
                  <path
                    d="M188.79 235.258C191.78 230.62 187.281 225.103 182.399 219.793C180.867 218.128 179.543 216.689 178.691 215.409L178.234 214.714L178.453 213.913C185.815 187.179 205.111 165.82 232.782 153.773C239.016 151.061 245.165 149.018 251.115 147.039C261.286 143.659 270.898 140.468 280.056 134.324C294.953 124.331 300.511 107.99 295.69 88.9908C285.687 109.048 268.963 115.539 249.806 122.972C237.599 127.707 223.762 133.077 209.871 142.791C194.617 153.459 184.245 167.742 179.881 184.098L176.499 196.779L172.822 196.537C168.615 162.965 148.786 141.714 106.521 125.487L102.955 124.123C82.4154 116.291 64.4823 109.448 54.2989 89.3986C49.1094 109.501 55.9955 126.601 73.6139 136.809C81.4827 141.367 89.5856 144.01 98.1684 146.813C110.229 150.751 122.696 154.822 136.468 164.6C157.633 179.626 165.184 193.622 171.709 214.196L172.028 215.193L163.951 224.113C160.075 228.396 159.376 233.77 162.036 238.864C166.017 246.493 170.377 253.585 174.983 260.987L188.79 235.25V235.258Z"
                    fill="#FFFFFF"
                  />
                </g>
                {/* Avatar Circle Clip Path for photo avatars */}
                <clipPath id="avatarClipCircle">
                  <circle cx="21" cy="21" r="20" />
                </clipPath>
              </defs>

              {/* Fixed Crosshair guide lines */}
              <line x1="60" y1="230" x2="440" y2="230" stroke="#1C1C1C" strokeWidth="1" />
              <line x1="250" y1="40" x2="250" y2="420" stroke="#1C1C1C" strokeWidth="1" />

              {/* Fixed Concentric Orbit Rings */}
              <circle cx="250" cy="230" r="80" fill="none" stroke="#1C1C1C" strokeWidth="1" />
              <circle
                cx="250"
                cy="230"
                r="135"
                fill="none"
                stroke="#2A2A2A"
                strokeWidth="1.2"
                strokeDasharray="4 4"
              />
              <circle cx="250" cy="230" r="185" fill="none" stroke="#181818" strokeWidth="1" />

              {/* Pulsing Sonar Waves from Center */}
              <circle cx="250" cy="230" r="44" fill="none" stroke="#E6007E" strokeWidth="1.5">
                <animate attributeName="r" from="44" to="185" dur="4s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.6;0.2;0" dur="4s" repeatCount="indefinite" />
              </circle>
              <circle cx="250" cy="230" r="44" fill="none" stroke="#E6007E" strokeWidth="1.5">
                <animate attributeName="r" from="44" to="185" dur="4s" begin="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.6;0.2;0" dur="4s" begin="2s" repeatCount="indefinite" />
              </circle>

              {/* Orbiting Container: Radial lines + Contact Nodes rotate together */}
              <g
                className="tc-orbit-container"
                style={{ transformOrigin: "250px 230px" }}
              >
                {/* Radial Connection Lines */}
                {/* Top: YOU -> MA */}
                <line x1="250" y1="230" x2="250" y2="95" stroke="#E6007E" strokeWidth="2" />
                {/* Top-Right: YOU -> PA */}
                <line x1="250" y1="230" x2="378" y2="188" stroke="#E6007E" strokeWidth="2" />
                {/* Bottom-Right: YOU -> RI */}
                <line x1="250" y1="230" x2="329" y2="339" stroke="#E6007E" strokeWidth="2" />
                {/* Bottom-Left: YOU -> SH */}
                <line x1="250" y1="230" x2="171" y2="339" stroke="#E6007E" strokeWidth="2" />
                {/* Mid-Left: YOU -> Slot 5 (dashed) */}
                <line
                  x1="250"
                  y1="230"
                  x2="122"
                  y2="188"
                  stroke="#383838"
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                />

                {/* Node 1: Top (Maa with Photo Avatar) - Counter-rotated so text stays upright */}
                <g className="tc-counter-node" style={{ transformOrigin: "250px 95px" }}>
                  {/* Pink Ambient Glow */}
                  <circle
                    cx="250"
                    cy="95"
                    r="22"
                    fill="none"
                    stroke="#F80090"
                    strokeWidth="3"
                    filter="url(#pinkGlow)"
                    className="transition-transform duration-300 hover:scale-110 cursor-pointer"
                  />
                  {/* Clipped Avatar Image */}
                  <g transform="translate(229, 74)">
                    <image
                      href="/images/avatar_maa.jpg"
                      x="0"
                      y="0"
                      width="42"
                      height="42"
                      preserveAspectRatio="xMidYMid slice"
                      clipPath="url(#avatarClipCircle)"
                    />
                  </g>
                  {/* Hot Pink Border Ring */}
                  <circle cx="250" cy="95" r="21" fill="none" stroke="#F80090" strokeWidth="2.5" />
                  <text
                    x="250"
                    y="132"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontSize="12"
                    fontWeight="700"
                    fontFamily="var(--font-inter), sans-serif"
                  >
                    Maa
                  </text>
                </g>

                {/* Node 2: Top-Right (Papa with Nazr Owl Badge) - Counter-rotated */}
                <g className="tc-counter-node" style={{ transformOrigin: "378px 188px" }}>
                  <circle
                    cx="378"
                    cy="188"
                    r="22"
                    fill="#F80090"
                    filter="url(#pinkGlow)"
                    className="transition-transform duration-300 hover:scale-110 cursor-pointer"
                  />
                  <circle cx="378" cy="188" r="21" fill="#F80090" />
                  <g
                    transform="translate(378, 188) scale(0.108) translate(-175, -175)"
                    pointerEvents="none"
                  >
                    <use href="#nazrOwlGraphic" />
                  </g>
                  <text
                    x="378"
                    y="225"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontSize="12"
                    fontWeight="700"
                    fontFamily="var(--font-inter), sans-serif"
                  >
                    Papa
                  </text>
                </g>

                {/* Node 3: Bottom-Right (Riya with Photo Avatar) - Counter-rotated */}
                <g className="tc-counter-node" style={{ transformOrigin: "329px 339px" }}>
                  {/* Pink Ambient Glow */}
                  <circle
                    cx="329"
                    cy="339"
                    r="22"
                    fill="none"
                    stroke="#F80090"
                    strokeWidth="3"
                    filter="url(#pinkGlow)"
                    className="transition-transform duration-300 hover:scale-110 cursor-pointer"
                  />
                  {/* Clipped Avatar Image */}
                  <g transform="translate(308, 318)">
                    <image
                      href="/images/avatar_riya.jpg"
                      x="0"
                      y="0"
                      width="42"
                      height="42"
                      preserveAspectRatio="xMidYMid slice"
                      clipPath="url(#avatarClipCircle)"
                    />
                  </g>
                  {/* Hot Pink Border Ring */}
                  <circle cx="329" cy="339" r="21" fill="none" stroke="#F80090" strokeWidth="2.5" />
                  <text
                    x="329"
                    y="376"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontSize="12"
                    fontWeight="700"
                    fontFamily="var(--font-inter), sans-serif"
                  >
                    Riya
                  </text>
                </g>

                {/* Node 4: Bottom-Left (Shubham with Nazr Owl Badge) - Counter-rotated */}
                <g className="tc-counter-node" style={{ transformOrigin: "171px 339px" }}>
                  <circle
                    cx="171"
                    cy="339"
                    r="22"
                    fill="#F80090"
                    filter="url(#pinkGlow)"
                    className="transition-transform duration-300 hover:scale-110 cursor-pointer"
                  />
                  <circle cx="171" cy="339" r="21" fill="#F80090" />
                  <g
                    transform="translate(171, 339) scale(0.108) translate(-175, -175)"
                    pointerEvents="none"
                  >
                    <use href="#nazrOwlGraphic" />
                  </g>
                  <text
                    x="171"
                    y="376"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontSize="12"
                    fontWeight="700"
                    fontFamily="var(--font-inter), sans-serif"
                  >
                    Shubham
                  </text>
                </g>

                {/* Node 5: Mid-Left (Slot 5 / +) - Counter-rotated */}
                <g className="tc-counter-node" style={{ transformOrigin: "122px 188px" }}>
                  <circle
                    cx="122"
                    cy="188"
                    r="20"
                    fill="#181818"
                    stroke="#444444"
                    strokeWidth="1.2"
                    strokeDasharray="3 3"
                    className="cursor-pointer hover:border-white transition-colors"
                  />
                  <text
                    x="122"
                    y="194"
                    textAnchor="middle"
                    fill="#888888"
                    fontSize="16"
                    fontWeight="400"
                    fontFamily="sans-serif"
                  >
                    +
                  </text>
                  <text
                    x="122"
                    y="225"
                    textAnchor="middle"
                    fill="#777777"
                    fontSize="12"
                    fontWeight="500"
                    fontFamily="var(--font-inter), sans-serif"
                  >
                    Slot 5
                  </text>
                </g>
              </g>

              {/* Fixed Center Node: YOU with gentle breathing pulse */}
              <g
                filter="url(#centerGlow)"
                className="tc-center-pulse"
                style={{ transformOrigin: "250px 230px" }}
              >
                <circle
                  cx="250"
                  cy="230"
                  r="42"
                  fill="#E6007E"
                  stroke="#FFFFFF"
                  strokeWidth="1.5"
                  strokeOpacity="0.25"
                />
                <text
                  x="250"
                  y="238"
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontSize="24"
                  fontWeight="400"
                  letterSpacing="1"
                  fontFamily="var(--font-bebas), 'Bebas Neue', sans-serif"
                >
                  YOU
                </text>
              </g>
            </svg>
          </div>

          {/* Right Column (Desktop): 3 Stacked Feature Cards */}
          <div className="hidden lg:flex flex-col gap-4 w-full">
            {featureCards.map((card, index) => {
              const isActive = activeCard === index;
              return (
                <div
                  key={index}
                  onClick={() => handleCardClick(index)}
                  className={`cursor-pointer rounded-[22px] md:rounded-[24px] p-5 md:p-6 transition-all duration-300 ${
                    isActive
                      ? "bg-[#1A1A1A] border-[1.5px] border-[#FF0E97] shadow-[0_0_22px_rgba(255,14,151,0.18)]"
                      : "bg-[#1A1A1A] border border-[#2B2B2B] hover:border-[#383838]"
                  }`}
                >
                  <h3
                    className="m-0 text-[26px] md:text-[28px] leading-tight transition-colors duration-200 flex items-center text-[#f4f4f4]"
                    style={{
                      fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
                    }}
                  >
                    <span className="text-[#FF0E97]">{card.number}</span>
                    <span className="mx-2 text-[#FF0E97] text-[18px] leading-none select-none">·</span>
                    <span className={isActive ? "text-white" : "text-[#f4f4f4]"}>{card.title}</span>
                  </h3>

                  <div className="w-full h-[1px] bg-[#2E2E2E] my-3 md:my-3.5" />

                  <p className={`m-0 text-[13.5px] md:text-[14px] leading-[1.45] font-normal font-[family-name:var(--font-inter)] transition-colors duration-300 ${
                    isActive ? "text-[#E5E5E5]" : "text-[#C4C4C4]"
                  }`}>
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Feature Cards Horizontal Swipe Carousel for Mobile (< 1024px) */}
          <div className="lg:hidden w-full relative px-0">
            <div
              ref={mobileCardsScrollRef}
              onScroll={handleMobileScroll}
              className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar gap-3.5 px-2 sm:px-4 w-full py-2"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {featureCards.map((card, index) => {
                const isActive = activeCard === index;
                return (
                  <div
                    key={index}
                    ref={(el) => {
                      mobileCardRefs.current[index] = el;
                    }}
                    onClick={() => handleMobileCardTap(index)}
                    className={`w-[85vw] max-w-[340px] shrink-0 snap-center p-5 sm:p-6 rounded-[22px] transition-all cursor-pointer select-none ${
                      isActive
                        ? "bg-[#1A1A1A] border-[1.5px] border-[#FF0E97] shadow-[0_0_22px_rgba(255,14,151,0.18)]"
                        : "bg-[#1A1A1A] border border-[#2B2B2B]"
                    }`}
                  >
                    <h3
                      className="m-0 text-[24px] sm:text-[26px] leading-tight transition-colors duration-200 flex items-center text-[#f4f4f4]"
                      style={{
                        fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
                      }}
                    >
                      <span className="text-[#FF0E97]">{card.number}</span>
                      <span className="mx-2 text-[#FF0E97] text-[18px] leading-none select-none">·</span>
                      <span className={isActive ? "text-white" : "text-[#f4f4f4]"}>{card.title}</span>
                    </h3>

                    <div className="w-full h-[1px] bg-[#2E2E2E] my-3" />

                    <p className={`m-0 text-[13.5px] leading-[1.45] font-normal font-[family-name:var(--font-inter)] transition-colors duration-300 ${
                      isActive ? "text-[#E5E5E5]" : "text-[#C4C4C4]"
                    }`}>
                      {card.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Pagination Indicators for Mobile Carousel (matching SafetyHabits style) */}
            <div className="flex items-center justify-center gap-[6px] mt-2.5 sm:mt-3">
              {featureCards.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleMobileCardTap(idx)}
                  className="p-0 focus:outline-none cursor-pointer"
                  aria-label={`Go to slide ${idx + 1}`}
                >
                  <div
                    className={`w-[8px] h-[8px] rounded-full transition-all duration-300 ${
                      activeCard === idx
                        ? "bg-[#FF0E97] border-[0.3px] border-[#FF0E97]"
                        : "bg-transparent border-[0.3px] border-[#FF0E97]"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Row: Dual Pills + App Store & Google Play Badges */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-3 sm:gap-4 mt-3 sm:mt-4 md:mt-5 pt-0">
          {/* Left: Two Info Pills (Center aligned on mobile) */}
          <div className="w-full lg:w-auto flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-3 text-center">
            <div className="w-full sm:w-auto rounded-full px-5 py-2.5 bg-[#121212] border border-[#521336] shadow-sm flex items-center justify-center text-center">
              <span className="text-[#D4D4D4] font-normal text-[13px] md:text-[13.5px] leading-snug text-center font-[family-name:var(--font-inter)]">
                They can trigger SOS for you, remotely
              </span>
            </div>

            <div className="w-full sm:w-auto rounded-full px-5 py-2.5 bg-[#121212] border border-[#521336] shadow-sm flex items-center justify-center text-center">
              <span className="text-[#D4D4D4] font-normal text-[13px] md:text-[13.5px] leading-snug text-center font-[family-name:var(--font-inter)]">
                They see your location only during SOS, or Shield Mode if you choose
              </span>
            </div>
          </div>

          {/* Right: Store Badges */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Apple App Store Button */}
            <Link
              href="https://apps.apple.com/in/app/nazr-women-safety-app/id6787188929"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-black border border-white/25 hover:border-white/60 transition-all text-white shadow-md hover:scale-105"
            >
              <Image
                src="/images/appstore-icon.png"
                alt="Apple Logo"
                width={18}
                height={22}
                className="w-[18px] h-[22px] object-contain shrink-0"
              />
              <div className="flex flex-col text-left">
                <span className="text-[9px] uppercase tracking-wider text-neutral-400 leading-none">
                  Download on the
                </span>
                <span className="text-sm font-semibold font-[family-name:var(--font-inter)] leading-tight">
                  App Store
                </span>
              </div>
            </Link>

            {/* Google Play Store Button */}
            <Link
              href="https://play.google.com/store/apps/details?id=com.nazr.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-black border border-white/25 hover:border-white/60 transition-all text-white shadow-md hover:scale-105"
            >
              <Image
                src="/images/playstore-icon.png"
                alt="Google Play Logo"
                width={20}
                height={22}
                className="w-[20px] h-[22px] object-contain shrink-0"
              />
              <div className="flex flex-col text-left">
                <span className="text-[9px] uppercase tracking-wider text-neutral-400 leading-none">
                  GET IT ON
                </span>
                <span className="text-sm font-semibold font-[family-name:var(--font-inter)] leading-tight">
                  Google Play
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

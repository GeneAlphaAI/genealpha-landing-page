import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AnimatedCards = ({ shouldAnimate }) => {
  const svgRef = useRef(null);
  const card2GroupRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    if (!shouldAnimate) {
      gsap.set(svgRef.current, { autoAlpha: 0 });
      return;
    }

    const tl = gsap.timeline();

    // Set initial state
    gsap.set(svgRef.current, { autoAlpha: 0 });
    gsap.set(card2GroupRef.current, { x: -210, y: -130 });
    gsap.set(lineRef.current, {
      strokeDasharray: "1000",
      strokeDashoffset: "1000",
    });

    // Fade in the entire SVG first
    tl.to(svgRef.current, {
      autoAlpha: 1,
      duration: 1,
      ease: "power2.out",
    });

    // Animate the card movement
    tl.to(
      card2GroupRef.current,
      {
        x: 0,
        y: 0,
        duration: 1,
        ease: "power2.out",
      },
      "-=0.2" // start slightly before previous ends for smoothness
    );

    // Animate the line drawing at the same time
    tl.to(
      lineRef.current,
      {
        strokeDashoffset: "0",
        duration: 2.2,
        ease: "power2.in",
      },
      "<" // sync with card movement
    );
  }, [shouldAnimate]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="421"
      viewBox="0 0 508 421"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity: 0, visibility: "hidden" }} // 👈 Prevents flash on load
    >
      {/* Left card blur */}
      <foreignObject x="-34.0742" y="-81.228" width="266.816" height="403.262">
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          style={{
            backdropFilter: "blur(17.5px)",
            WebkitBackdropFilter: "blur(17.5px)",
            clipPath: "url(#bgblur_0_263_1831_clip_path)",
            height: "100%",
            width: "100%",
          }}
        />
      </foreignObject>

      {/* Left card group */}
      <g data-figma-bg-blur-radius="35">
        <rect
          width="227.264"
          height="227.264"
          rx="10"
          transform="matrix(0.866025 -0.5 0 1 0.925781 63.5869)"
          fill="white"
          fillOpacity="0.1"
        />
        <rect
          x="0.866025"
          y="0.5"
          width="225.264"
          height="225.264"
          rx="9"
          transform="matrix(0.866025 -0.5 0 1 1.04181 64.0199)"
          stroke="white"
          strokeOpacity="0.1"
          strokeWidth="2"
        />
      </g>

      {/* GitHub icon in left card */}
      <g clipPath="url(#clip1_263_1831)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M99.2865 64.1556C71.7483 80.0548 49.4863 118.803 49.4863 150.839C49.4863 176.448 63.7503 189.889 83.5383 186.137C86.0123 185.285 86.9185 182.938 86.9185 181.405C86.9185 180.062 86.837 175.505 86.837 170.709C72.9838 182.16 70.099 173.467 70.099 173.467C67.8727 168.038 64.574 168.217 64.574 168.217C60.0398 167.286 64.9043 164.477 64.9043 164.477C69.9338 161.957 72.573 165.996 72.573 165.996C77.0245 172.25 84.1978 165.615 87.0837 162.414C87.4955 158.435 88.8156 155.084 90.2172 152.836C79.1683 157.872 67.5434 159.597 67.5434 137.344C67.5434 131.014 69.521 124.693 72.6545 118.856C72.1601 117.703 70.4282 112.755 73.1499 103.224C73.1499 103.224 77.3548 99.2609 86.836 101.268C90.8952 97.6567 95.0814 94.5947 99.2865 92.1615C103.491 89.7338 107.778 87.9311 111.736 86.8923C121.218 73.9364 125.423 73.0436 125.423 73.0436C128.145 79.4327 126.412 86.3809 125.917 88.1047C129.134 90.2758 131.03 94.3602 131.03 100.69C131.03 122.943 119.405 134.545 108.273 142.412C110.088 143.186 111.653 145.734 111.653 151.202C111.653 158.97 111.572 165.252 111.572 167.17C111.572 168.705 112.479 170.004 114.952 168.001C134.74 148.902 149.004 118.991 149.004 93.3827C149.086 61.2994 126.742 48.304 99.2865 64.1556Z"
          fill="white"
          fillOpacity="0.2"
        />
      </g>

      {/* Animated connecting line */}
      <path
        ref={lineRef}
        d="M311.127 216L105.761 121.795"
        stroke="url(#paint0_linear_263_1831)"
        strokeWidth="1"
        strokeLinecap="round"
        strokeOpacity="0.15"
        // filter="url(#blurFilter)"
      />

      {/* Right card group - animated */}
      <g ref={card2GroupRef}>
        {/* Right card blur */}
        <foreignObject x="275.799" y="48.2207" width="266.816" height="403.262">
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              backdropFilter: "blur(17.5px)",
              WebkitBackdropFilter: "blur(17.5px)",
              clipPath: "url(#bgblur_2_263_1831_clip_path)",
              height: "100%",
              width: "100%",
            }}
          />
        </foreignObject>

        {/* Right card rectangles */}
        <g data-figma-bg-blur-radius="35">
          <rect
            width="227.264"
            height="227.264"
            rx="10"
            transform="matrix(0.866025 -0.5 0 1 310.799 193.036)"
            fill="white"
            fillOpacity="0.1"
          />
          <rect
            x="0.866025"
            y="0.5"
            width="225.264"
            height="225.264"
            rx="9"
            transform="matrix(0.866025 -0.5 0 1 310.915 193.469)"
            stroke="white"
            strokeOpacity="0.1"
            strokeWidth="2"
          />
        </g>

        {/* Code/lines icon in right card */}
        <path
          d="M453.9 266.828C457.528 264.946 460.413 266.744 460.413 270.986C460.413 275.228 457.528 280.357 453.9 282.664L453.547 282.879L364.866 334.079C361.075 336.268 358 334.493 358 330.114C358 325.736 361.074 320.411 364.866 318.221L453.547 267.021L453.9 266.828ZM444.298 246.282C447.926 244.4 450.811 246.198 450.811 250.44C450.811 254.682 447.926 259.811 444.298 262.118L443.944 262.333L372.774 303.423C368.982 305.612 365.908 303.837 365.907 299.459C365.907 295.08 368.982 289.755 372.774 287.566L443.944 246.476L444.298 246.282ZM437.52 224.105C441.148 222.223 444.033 224.022 444.033 228.263C444.033 232.505 441.148 237.635 437.52 239.941L437.167 240.156L381.812 272.115C378.02 274.305 374.946 272.530 374.946 268.151C374.946 263.772 378.02 258.447 381.812 256.258L437.167 224.299L437.52 224.105ZM428.484 203.234C432.111 201.352 434.997 203.15 434.997 207.392C434.997 211.633 432.111 216.763 428.484 219.07L428.13 219.285L389.721 241.46C385.929 243.65 382.854 241.875 382.854 237.496C382.854 233.117 385.929 227.792 389.721 225.603L428.13 203.427L428.484 203.234ZM420.575 181.711C424.203 179.829 427.088 181.627 427.088 185.869C427.088 190.111 424.203 195.24 420.575 197.547L420.222 197.762L397.628 210.806C393.836 212.995 390.762 211.22 390.762 206.842C390.762 202.463 393.836 197.138 397.628 194.949L420.222 181.904L420.575 181.711Z"
          fill="url(#paint1_linear_263_1831)"
          fillOpacity="0.2"
        />
      </g>

      {/* Gradients and clip paths */}
      <defs>
        <clipPath
          id="bgblur_0_263_1831_clip_path"
          transform="translate(34.0742 81.228)"
        >
          <rect
            width="227.264"
            height="227.264"
            rx="10"
            transform="matrix(0.866025 -0.5 0 1 0.925781 63.5869)"
          />
        </clipPath>
        <clipPath
          id="bgblur_2_263_1831_clip_path"
          transform="translate(-275.799 -48.2207)"
        >
          <rect
            width="227.264"
            height="227.264"
            rx="10"
            transform="matrix(0.866025 -0.5 0 1 310.799 193.036)"
          />
        </clipPath>
        <clipPath id="clip1_263_1831">
          <rect
            width="115.352"
            height="112.998"
            fill="white"
            transform="matrix(0.866025 -0.5 0 1 49.4863 92.9077)"
          />
        </clipPath>
        <linearGradient
          id="paint0_linear_263_1831"
          x1="293.299"
          y1="210.109"
          x2="81.1991"
          y2="113.563"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.00182699" stopColor="white" />
          <stop offset="0.836538" stopColor="#949494" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_263_1831"
          x1="409.207"
          y1="188.264"
          x2="461.261"
          y2="278.425"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#232324" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
        <filter id="blurFilter" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="0.9" />
        </filter>
      </defs>
    </svg>
  );
};

export default AnimatedCards;

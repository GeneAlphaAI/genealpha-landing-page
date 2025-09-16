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

    // Reset initial state
    gsap.set(svgRef.current, { autoAlpha: 0 });
    gsap.set(card2GroupRef.current, { x: -210, y: -130 });
    gsap.set(lineRef.current, {
      strokeDasharray: "1000",
      strokeDashoffset: "1000",
    });

    // Fade in SVG
    tl.to(svgRef.current, {
      autoAlpha: 1,
      duration: 1,
      ease: "power2.out",
    });

    // Animate right card group
    tl.to(
      card2GroupRef.current,
      {
        x: 0,
        y: 0,
        duration: 1,
        ease: "power2.out",
      },
      "-=0.2"
    );

    // Animate connecting line
    tl.to(
      lineRef.current,
      {
        strokeDashoffset: "0",
        duration: 2.2,
        ease: "power2.in",
      },
      "<"
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
      style={{ opacity: 0, visibility: "hidden" }} // prevents flash on load
    >
      {/* Left card */}
      <rect
        width="227.264"
        height="227.264"
        rx="10"
        transform="matrix(0.866025 -0.5 0 1 0.925781 64.0869)"
        fill="#272727"
      />
      <rect
        x="0.866025"
        y="0.5"
        width="225.264"
        height="225.264"
        rx="9"
        transform="matrix(0.866025 -0.5 0 1 1.04181 64.5199)"
        stroke="white"
        strokeOpacity="0.1"
        strokeWidth="2"
      />
      <g clipPath="url(#clip0_1312_1634)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M99.2865 64.6556C71.7483 80.5548 49.4863 119.303 49.4863 151.339C49.4863 176.948 63.7503 190.389 83.5383 186.637C86.0123 185.785 86.9185 183.438 86.9185 181.905C86.9185 180.562 86.837 176.005 86.837 171.209C72.9838 182.66 70.099 173.967 70.099 173.967C67.8727 168.538 64.574 168.717 64.574 168.717C60.0398 167.786 64.9043 164.977 64.9043 164.977C69.9338 162.457 72.573 166.496 72.573 166.496C77.0245 172.75 84.1978 166.115 87.0837 162.914C87.4955 158.935 88.8156 155.584 90.2172 153.336C79.1683 158.372 67.5434 160.097 67.5434 137.844C67.5434 131.514 69.521 125.193 72.6545 119.356C72.1601 118.203 70.4282 113.255 73.1499 103.724C73.1499 103.724 77.3548 99.7609 86.836 101.768C90.8952 98.1567 95.0814 95.0947 99.2865 92.6615C103.491 90.2338 107.778 88.4311 111.736 87.3923C121.218 74.4364 125.423 73.5436 125.423 73.5436C128.145 79.9327 126.412 86.8809 125.917 88.6047C129.134 90.7758 131.03 94.8602 131.03 101.19C131.03 123.443 119.405 135.045 108.273 142.912C110.088 143.686 111.653 146.234 111.653 151.702C111.653 159.47 111.572 165.752 111.572 167.67C111.572 169.205 112.479 170.504 114.952 168.501C134.74 149.402 149.004 119.491 149.004 93.8827C149.086 61.7994 126.742 48.804 99.2865 64.6556Z"
          fill="white"
          fillOpacity="0.2"
        />
      </g>

      {/* Animated line */}
      <path
        ref={lineRef}
        d="M414.302 263.828L105.761 122.295"
        stroke="url(#paint0_linear_1312_1634)"
        strokeWidth="0.5"
        filter="url(#filter0_f_1312_1634)"
      />

      {/* Right card group */}
      <g ref={card2GroupRef}>
        <rect
          width="227.264"
          height="227.264"
          rx="10"
          transform="matrix(0.866025 -0.5 0 1 310.799 193.536)"
          fill="#1E1E1E"
        />
        <rect
          x="0.866025"
          y="0.5"
          width="225.264"
          height="225.264"
          rx="9"
          transform="matrix(0.866025 -0.5 0 1 310.915 193.969)"
          stroke="white"
          strokeOpacity="0.1"
          strokeWidth="2"
        />
        <path
          d="M453.9 267.328C457.528 265.446 460.413 267.244 460.413 271.486C460.413 275.728 457.528 280.857 453.9 283.164L453.547 283.379L364.866 334.579C361.075 336.768 358 334.993 358 330.614C358 326.236 361.074 320.911 364.866 318.721L453.547 267.521L453.9 267.328ZM444.298 246.782C447.926 244.9 450.811 246.698 450.811 250.94C450.811 255.182 447.926 260.311 444.298 262.618L443.944 262.833L372.774 303.923C368.982 306.112 365.908 304.337 365.907 299.959C365.907 295.58 368.982 290.255 372.774 288.066L443.944 246.976L444.298 246.782ZM437.52 224.605C441.148 222.723 444.033 224.522 444.033 228.763C444.033 233.005 441.148 238.135 437.52 240.441L437.167 240.656L381.812 272.615C378.02 274.805 374.946 273.03 374.946 268.651C374.946 264.272 378.02 258.947 381.812 256.758L437.167 224.799L437.52 224.605ZM428.484 203.734C432.111 201.852 434.997 203.65 434.997 207.892C434.997 212.133 432.111 217.263 428.484 219.57L428.13 219.785L389.721 241.96C385.929 244.15 382.854 242.375 382.854 237.996C382.854 233.617 385.929 228.292 389.721 226.103L428.13 203.927L428.484 203.734ZM420.575 182.211C424.203 180.329 427.088 182.127 427.088 186.369C427.088 190.611 424.203 195.74 420.575 198.047L420.222 198.262L397.628 211.306C393.836 213.495 390.762 211.72 390.762 207.342C390.762 202.963 393.836 197.638 397.628 195.449L420.222 182.404L420.575 182.211Z"
          fill="url(#paint1_linear_1312_1634)"
          fillOpacity="0.2"
        />
      </g>

      {/* Gradients & defs */}
      <defs>
        <filter
          id="filter0_f_1312_1634"
          x="103.657"
          y="120.068"
          width="312.75"
          height="145.987"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="1"
            result="effect1_foregroundBlur_1312_1634"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1312_1634"
          x1="387.517"
          y1="254.977"
          x2="68.8591"
          y2="109.927"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.00182699" stopColor="white" />
          <stop offset="0.836538" stopColor="#949494" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1312_1634"
          x1="409.207"
          y1="188.764"
          x2="461.261"
          y2="278.925"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#232324" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
        <clipPath id="clip0_1312_1634">
          <rect
            width="115.352"
            height="112.998"
            fill="white"
            transform="matrix(0.866025 -0.5 0 1 49.4863 93.4077)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default AnimatedCards;

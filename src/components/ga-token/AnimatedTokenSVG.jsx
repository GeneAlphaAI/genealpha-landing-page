import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

function AnimatedTokenSVG() {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    // Set initial states - use scale property instead of transform to preserve SVG filters
    gsap.set(
      "#circle-1, #stroke-1, #stroke-2, #stroke-3, #stroke-4, #stroke-5, #circle-2, #circle-3",
      {
        opacity: 0,
        scale: 0.8,
      }
    );

    // Set initial states for blur clip paths
    gsap.set(
      "#bgblur_0_50_29_clip_path, #bgblur_1_50_29_clip_path, #bgblur_2_50_29_clip_path",
      {
        opacity: 0,
      }
    );

    // Create timeline
    const tl = gsap.timeline({ delay: 2 }); // Start after text animations

    tl
      // Fade in circle-1 with bounce
      .to("#circle-1", {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
      })
      // Fade in clip path for circle-1
      .to(
        "#bgblur_0_50_29_clip_path",
        {
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.4"
      )

      // Fade in strokes with stagger and bounce
      .to(
        "#stroke-1, #stroke-2, #stroke-3, #stroke-4, #stroke-5",
        {
          opacity: 1,
          scale: 0.9,
          duration: 0.6,
          ease: "back.out(1.4)",
          stagger: 0.15,
        },
        "-=0.2"
      )

      // Fade in circle-2 when stroke-2 starts (0.15s after stroke-1)
      .to(
        "#circle-2",
        {
          opacity: 1,
          scale: 1,
          duration: 0.7,
          ease: "back.out(1.5)",
        },
        "-=0.6"
      ) // 0.6s back from current position aligns with stroke-2
      // Fade in clip path for circle-2
      .to(
        "#bgblur_1_50_29_clip_path",
        {
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.4"
      )

      // Fade in circle-3 when stroke-5 starts (0.6s after stroke-1)
      .to(
        "#circle-3",
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.3)",
        },
        "-=0.3"
      ) // 0.3s back aligns with stroke-5
      // Fade in clip path for circle-3
      .to(
        "#bgblur_2_50_29_clip_path",
        {
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.4"
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      width="978"
      height="597"
      viewBox="0 0 978 597"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto"
    >
      <g filter="url(#filter0_d_50_29)">
        <foreignObject
          x="162.622"
          y="111.258"
          width="716.357"
          height="443.148"
        >
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              backdropFilter: "blur(17.5px)",
              clipPath: "url(#bgblur_0_50_29_clip_path)",
              height: "100%",
              width: "100%",
            }}
          ></div>
        </foreignObject>
        <g data-figma-bg-blur-radius="35.0069" id="circle-1">
          <circle
            cx="263.863"
            cy="263.863"
            r="263.863"
            transform="matrix(0.866044 -0.499967 0.866044 0.499967 63.7661 332.832)"
            fill="white"
            fillOpacity="0.1"
          />
          <circle
            cx="263.863"
            cy="263.863"
            r="262.741"
            transform="matrix(0.866044 -0.499967 0.866044 0.499967 63.7661 332.832)"
            stroke="white"
            strokeOpacity="0.1"
            strokeWidth="2.24403"
          />
        </g>
      </g>
      <g filter="url(#filter2_d_50_29)">
        <path
          d="M321.796 363.739L477.822 273.665L633.849 183.591"
          stroke="#F9F9F9"
          strokeWidth="37.8542"
          stroke-linecap="round"
          id="stroke-1"
        />
        <path
          d="M270.117 301.777L395.336 229.488L520.554 157.2"
          stroke="#F9F9F9"
          strokeOpacity="0.75"
          strokeWidth="37.8542"
          stroke-linecap="round"
          id="stroke-2"
        />
        <path
          d="M222.414 237.521L319.806 181.297L417.198 125.072"
          stroke="#F9F9F9"
          strokeOpacity="0.5"
          strokeWidth="37.8542"
          stroke-linecap="round"
          id="stroke-3"
        />
        <path
          d="M170.737 175.559L238.316 136.546L305.894 97.5335"
          stroke="#F9F9F9"
          strokeOpacity="0.25"
          strokeWidth="37.8542"
          stroke-linecap="round"
          id="stroke-4"
        />
        <path
          d="M119.059 113.597L158.811 90.6479L198.563 67.6991"
          stroke="#F9F9F9"
          strokeOpacity="0.1"
          strokeWidth="37.8542"
          stroke-linecap="round"
          id="stroke-5"
        />
      </g>
      <foreignObject x="307.432" y="27.391" width="416.291" height="269.92">
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          style={{
            backdropFilter: "blur(17.5px)",
            clipPath: "url(#bgblur_1_50_29_clip_path)",
            height: "100%",
            width: "100%",
          }}
        ></div>
      </foreignObject>
      <g data-figma-bg-blur-radius="35.0069" id="circle-2">
        <circle
          cx="141.364"
          cy="141.364"
          r="141.364"
          transform="matrix(0.866044 -0.499967 0.866044 0.499967 270.723 162.351)"
          fill="white"
          fillOpacity="0.1"
        />
        <circle
          cx="141.364"
          cy="141.364"
          r="140.242"
          transform="matrix(0.866044 -0.499967 0.866044 0.499967 270.723 162.351)"
          stroke="white"
          strokeOpacity="0.1"
          strokeWidth="2.24403"
        />
      </g>
      <foreignObject
        x="5.36471"
        y="101.827"
        width="261.184"
        height="180.376"
      >
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          style={{
            backdropFilter: "blur(17.5px)",
            clipPath: "url(#bgblur_2_50_29_clip_path)",
            height: "100%",
            width: "100%",
          }}
        ></div>
      </foreignObject>
      <g data-figma-bg-blur-radius="35.0069" id="circle-3">
        <circle
          cx="78.0433"
          cy="78.0433"
          r="78.0433"
          transform="matrix(0.866044 -0.499967 0.866044 0.499967 0.778809 192.015)"
          fill="white"
          fillOpacity="0.1"
        />
        <circle
          cx="78.0433"
          cy="78.0433"
          r="76.9213"
          transform="matrix(0.866044 -0.499967 0.866044 0.499967 0.778809 192.015)"
          stroke="white"
          strokeOpacity="0.1"
          strokeWidth="2.24403"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_50_29"
          x="180.125"
          y="146.265"
          width="681.351"
          height="437.762"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="47.1246" />
          <feGaussianBlur stdDeviation="8.75172" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.65 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_50_29"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_50_29"
            result="shape"
          />
        </filter>
        <clipPath
          id="bgblur_0_50_29_clip_path"
          transform="translate(-162.622 -111.258)"
        >
          <circle
            cx="263.863"
            cy="263.863"
            r="263.863"
            transform="matrix(0.866044 -0.499967 0.866044 0.499967 63.7661 332.832)"
          />
        </clipPath>
        <filter
          id="filter2_d_50_29"
          x="84.8822"
          y="54.3165"
          width="783.144"
          height="578.682"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="44.8806" />
          <feGaussianBlur stdDeviation="5.49787" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_50_29"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_50_29"
            result="shape"
          />
        </filter>
        <clipPath
          id="bgblur_1_50_29_clip_path"
          transform="translate(-307.432 -27.391)"
        >
          <circle
            cx="141.364"
            cy="141.364"
            r="141.364"
            transform="matrix(0.866044 -0.499967 0.866044 0.499967 270.723 162.351)"
          />
        </clipPath>
        <clipPath
          id="bgblur_2_50_29_clip_path"
          transform="translate(-5.36471 -101.827)"
        >
          <circle
            cx="78.0433"
            cy="78.0433"
            r="78.0433"
            transform="matrix(0.866044 -0.499967 0.866044 0.499967 0.778809 192.015)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default AnimatedTokenSVG; 
import React, { useRef } from "react";
import { gsap } from "gsap";

const AnimatedLogo = () => {
  const linesRef = useRef([]);

  const handleMouseEnter = () => {
    const tl = gsap.timeline();

    // Animate lines out (slide + fade)
    tl.to(linesRef.current, {
      x: (i) => (i % 2 === 0 ? -5 : 5),
      autoAlpha: 0, // hides with opacity + visibility
      duration: 0.5,
      ease: "power2.out",
      stagger: 0.05,
    })

      // Then bring them back to original position
      .to(
        linesRef.current,
        {
          x: 0,
          autoAlpha: 1,
          duration: 0.5,
          ease: "power2.inOut",
          stagger: 0.05,
        },
        "+=0.05"
      );
  };

  return (
    <svg
      width="20"
      height="22"
      viewBox="0 0 20 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={handleMouseEnter}
      className="cursor-pointer"
    >
      {[
        { d: "M1.11255 20.0001H9.9438H18.775", opacity: 1 },
        { d: "M2.6875 15.5L9.775 15.5L16.8625 15.5", opacity: 0.75 },
        { d: "M4.48755 11L10 11L15.5126 11", opacity: 0.5 },
        {
          d: "M6.06262 6.50006L9.88762 6.50006L13.7126 6.50006",
          opacity: 0.25,
        },
        { d: "M7.63757 2L9.88757 2L12.1376 2", opacity: 0.1 },
      ].map((line, i) => (
        <path
          key={i}
          d={line.d}
          stroke="#F9F9F9"
          strokeWidth="2.02501"
          strokeLinecap="round"
          strokeOpacity={line.opacity}
          ref={(el) => (linesRef.current[i] = el)}
        />
      ))}
    </svg>
  );
};

export default AnimatedLogo;

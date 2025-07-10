import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedHiveLogo = () => {
  const svgRef = useRef(null);
  const lineRefs = useRef([]);

  const addLineRef = (el, index) => {
    lineRefs.current[index] = el;
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const [top2, top1, middle, bottom1, bottom2] = lineRefs.current;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: svgRef.current,
          start: "top 80%",
          once: true,
        },
      });

      // Animate middle line - scale in both directions with a spring effect
      tl.fromTo(
        middle,
        { scale: 1, opacity: 0 },
        {
          scale: 1.1,
          opacity: 1,
          transformOrigin: "center",
          duration: 0.5,
          ease: "power3.out",
        }
      ).to(middle, {
        scale: 1,
        duration: 0.7,
        ease: "elastic.out(1, 0.4)",
      });

      // Flair lines reveal - one by one (staggered ripple)
      const flairLines = [top2, top1, bottom1, bottom2];
      flairLines.forEach((line, i) => {
        const isTop = i < 2;
        tl.fromTo(
          line,
          { opacity: 0, y: isTop ? -10 : 10 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out",
          },
          `-=${0.3 - i * 0.05}` // slight overlap for ripple
        );
      });
    }, svgRef);

    return () => ctx.revert();
  }, []);

  const paths = [
    { d: "M19.4485 4.5L43.0467 4.5L66.645 4.5", opacity: 0.35 }, // top2
    { d: "M11.7428 22.75L42.0834 22.75L72.424 22.75", opacity: 0.7 }, // top1
    { d: "M5 41L42.8054 41L80.6107 41", opacity: 1 }, // middle
    { d: "M73.8682 59.25L43.5275 59.25L13.1869 59.25", opacity: 0.7 }, // bottom1
    { d: "M66.1626 77.5H42.5643H18.9661", opacity: 0.35 }, // bottom2
  ];

  return (
    <svg
      ref={svgRef}
      viewBox="-5 -5 115 95"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100px", height: "auto" }} // or responsive sizing
    >
      {paths.map((line, index) => (
        <path
          key={index}
          ref={(el) => addLineRef(el, index)}
          d={line.d}
          stroke="#F9F9F9"
          strokeWidth="8.66877"
          strokeLinecap="round"
          strokeOpacity={line.opacity}
          style={{ opacity: 0 }}
        />
      ))}
    </svg>
  );
};

export default AnimatedHiveLogo;

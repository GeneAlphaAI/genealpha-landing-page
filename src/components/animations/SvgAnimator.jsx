import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const SvgAnimator = ({ children, className = "" }) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the element is visible
        rootMargin: "0px 0px -50px 0px", // Trigger a bit before it's fully visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    // Initially hide all SVG elements
    const ctx = gsap.context(() => {
      const grayStrokes = containerRef.current.querySelectorAll(
        'circle[stroke="#323235"]'
      );
      const coloredStrokes = containerRef.current.querySelectorAll(
        'circle:not([stroke="#323235"]):not([fill])'
      );
      const filledCircles =
        containerRef.current.querySelectorAll("circle[fill]");

      // Hide all elements initially
      gsap.set(grayStrokes, { opacity: 0 });
      gsap.set(coloredStrokes, { opacity: 0 });
      gsap.set(filledCircles, { opacity: 0 });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const ctx = gsap.context(() => {
      const grayStrokes = containerRef.current.querySelectorAll(
        'circle[stroke="#323235"]'
      );
      const coloredStrokes = containerRef.current.querySelectorAll(
        'circle:not([stroke="#323235"]):not([fill])'
      );
      const filledCircles =
        containerRef.current.querySelectorAll("circle[fill]");

      // Animate Gray Stroke Circles with scale or opacity
      grayStrokes.forEach((circle) => {
        // For circles, we can't use stroke animation like paths
        // Instead, we'll use scale or opacity animations
        const radius = parseFloat(circle.getAttribute("r")) || 3.48206;
        const circumference = 2 * Math.PI * radius;

        // Set up stroke-dasharray for circle animation and make visible
        gsap.set(circle, {
          strokeDasharray: circumference,
          strokeDashoffset: circumference,
          opacity: 1,
        });

        gsap.to(circle, {
          strokeDashoffset: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: "power2.out",
        });
      });

      // Fade In Colored Stroke Circles
      gsap.to(coloredStrokes, {
        opacity: 1,
        duration: 0.5,
        delay: 0.5,
        stagger: 0.05,
      });

      // Flicker Filled Circles then keep them visible
      gsap.to(filledCircles, {
        opacity: 1,
        duration: 0.3,
        repeat: 2,
        yoyo: true,
        delay: 1.2,
        stagger: 0.09,
        ease: "power2.out",
        onComplete: () => {
          // Keep them visible after flicker
          gsap.set(filledCircles, { opacity: 1 });
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [isVisible]);

  const handleHover = () => {
    const filledCircles = containerRef.current.querySelectorAll("circle[fill]");
    gsap.to(filledCircles, {
      opacity: 0.4,
      duration: 0.8,
      yoyo: true,
      repeat: 1,
      ease: "power2.out",
      onComplete: () => {
        // Keep them visible after flicker
        gsap.set(filledCircles, { opacity: 1 });
      },
    });
  };

  return (
    <div ref={containerRef} className={className} onMouseEnter={handleHover}>
      {children}
    </div>
  );
};

export default SvgAnimator;

// motionVariants.js

export const directions = {
  left: { x: -100, y: 0 },
  right: { x: 100, y: 0 },
  up: { x: 0, y: -100 },
  down: { x: 0, y: 100 },
  none: { x: 0, y: 0 },
};

export const fadeVariant = ({
  direction = "none",
  delay = 0,
  duration = 0.8,
  ease = "easeOut",
} = {}) => {
  const dir = directions[direction] || directions.none;

  return {
    hidden: {
      x: dir.x,
      y: dir.y,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        delay,
        duration,
        ease,
      },
    },
    exit: {
      x: dir.x,
      y: dir.y,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease,
      },
    },
  };
};

export const slideVariant = ({
  direction = "left",
  delay = 0,
  duration = 0.8,
  ease = "easeOut",
  type = "tween", // or "spring"
} = {}) => {
  const initial =
    direction === "left"
      ? { x: "-100%", y: 0 }
      : direction === "right"
      ? { x: "100%", y: 0 }
      : direction === "up"
      ? { x: 0, y: "-100%" }
      : direction === "down"
      ? { x: 0, y: "100%" }
      : { x: 0, y: 0 };

  return {
    hidden: {
      ...initial,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type,
        delay,
        duration,
        ease,
      },
    },
    exit: {
      ...initial,
      transition: {
        type,
        duration,
        ease,
      },
    },
  };
};

export const wordFadeIn = (delay = 0, factor = 0.05) => ({
  hidden: {
    opacity: 0,
    y: 10,
    filter: "blur(15px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: delay * factor,
      duration: 0.6,
      ease: "easeOut",
    },
  },
});

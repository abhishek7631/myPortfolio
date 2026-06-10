export const spring = { type: "spring", stiffness: 360, damping: 24 };

export const cardHover = {
  whileHover: { y: -8, scale: 1.02 },
  whileTap: { scale: 0.99 },
  transition: spring,
};

export const buttonHover = {
  whileHover: { scale: 1.05, y: -2 },
  whileTap: { scale: 0.95 },
  transition: spring,
};

export const iconHover = {
  whileHover: { scale: 1.12, y: -3 },
  whileTap: { scale: 0.9 },
  transition: spring,
};

export const subtleHover = {
  whileHover: { scale: 1.03 },
  whileTap: { scale: 0.97 },
  transition: spring,
};

import React from "react";
import { motion } from "framer-motion";

const starCount = 80;
const stars = Array.from({ length: starCount }).map(() => {
  return {
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 4 + Math.random() * 6,
  };
});

export default function Starfield() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {stars.map((s, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: 2,
            height: 2,
            opacity: 0.8,
          }}
          animate={{
            y: ["0%", "-100%"],
            opacity: [0.1, 0.8, 0.1],
          }}
          transition={{
            duration: s.duration,
            repeat: Infinity,
            repeatType: "loop",
            delay: s.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

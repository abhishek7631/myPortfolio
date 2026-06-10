import React from "react";
import { motion } from "framer-motion";

function SkillProgressBar({ name, level, delay = 0, animate = true }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-800 dark:text-gray-100">
          {name}
        </span>
        <span className="text-xs text-gray-400 dark:text-gray-500">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-gray-100 dark:bg-slate-700/60 overflow-hidden">
        <motion.div
          initial={animate ? { width: 0 } : { width: `${level}%` }}
          whileInView={animate ? { width: `${level}%` } : undefined}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-sky-400 via-violet-500 to-fuchsia-400 shadow-[0_0_12px_rgba(139,92,246,0.35)]"
        />
      </div>
    </div>
  );
}

export default SkillProgressBar;

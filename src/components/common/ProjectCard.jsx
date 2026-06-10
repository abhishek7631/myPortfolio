import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { buttonHover, cardHover } from "../../utils/motion";

const MAX_VISIBLE_TAGS = 3;

function ProjectCard({ project, onViewDetails }) {
  const [imgError, setImgError] = useState(false);
  const extraTags = project.tech.length - MAX_VISIBLE_TAGS;
  const showImage = project.image && !imgError;

  return (
    <motion.article
      {...cardHover}
      onClick={() => onViewDetails(project)}
      onKeyDown={(e) => e.key === "Enter" && onViewDetails(project)}
      role="button"
      tabIndex={0}
      className="flex flex-col h-full rounded-2xl border border-gray-200 dark:border-slate-700/60 bg-white dark:bg-slate-900 overflow-hidden shadow-md hover:shadow-2xl hover:border-sky-300/50 dark:hover:border-sky-600/40 transition-[box-shadow,border-color] duration-300 cursor-pointer"
    >
      <div className="relative h-48 sm:h-52 overflow-hidden shrink-0">
        {showImage ? (
          <img
            src={project.image}
            alt={project.name}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-top bg-gray-100 dark:bg-slate-800"
          />
        ) : (
          <div
            className={`w-full h-full bg-gradient-to-br ${project.thumbnail} flex items-center justify-center`}
          >
            <span className="text-5xl font-extrabold text-white/25 select-none">
              {project.name.charAt(0)}
            </span>
          </div>
        )}

        {project.isLive && (
          <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-emerald-500 text-white text-[10px] font-bold tracking-widest uppercase shadow-sm">
            Live
          </span>
        )}
      </div>

      <div className="flex flex-col flex-1 p-5 sm:p-6">
        <div className="mb-2">
          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 leading-snug">
            {project.name}
          </h3>
          {project.projectType && (
            <span className="inline-block mt-1.5 text-xs font-semibold text-gray-500 dark:text-gray-400">
              ({project.projectType})
            </span>
          )}
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-3 flex-1">
          {project.shortDescription}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.slice(0, MAX_VISIBLE_TAGS).map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-600 text-gray-700 dark:text-gray-300"
            >
              {tech}
            </span>
          ))}
          {extraTags > 0 && (
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-violet-50 dark:bg-violet-900/30 border border-violet-100 dark:border-violet-800 text-violet-600 dark:text-violet-300">
              +{extraTags}
            </span>
          )}
        </div>

        <motion.button
          {...buttonHover}
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onViewDetails(project);
          }}
          className="mt-5 w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white text-sm font-semibold shadow-md hover:shadow-lg transition-colors duration-300"
        >
          View details
          <FiArrowRight size={16} />
        </motion.button>
      </div>
    </motion.article>
  );
}

export default ProjectCard;

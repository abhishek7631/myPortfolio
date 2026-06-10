import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { iconHover } from "../../utils/motion";

function ProjectGalleryCarousel({ images, projectName }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, [images, projectName]);

  if (!images?.length) return null;

  const goTo = (index) => {
    if (index < 0) setActiveIndex(images.length - 1);
    else if (index >= images.length) setActiveIndex(0);
    else setActiveIndex(index);
  };

  const currentImage = images[activeIndex];

  return (
    <div className="relative bg-gray-100 dark:bg-slate-800">
      <div className="relative h-52 sm:h-64 md:h-72 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImage}
            src={currentImage}
            alt={`${projectName} screenshot ${activeIndex + 1}`}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full object-cover object-top"
          />
        </AnimatePresence>

        {images.length > 1 && (
          <>
            <motion.button
              {...iconHover}
              type="button"
              onClick={() => goTo(activeIndex - 1)}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 dark:bg-slate-900/90 text-gray-700 dark:text-gray-200 shadow-md flex items-center justify-center hover:bg-white dark:hover:bg-slate-800 hover:shadow-lg transition-colors"
              aria-label="Previous image"
            >
              <FiChevronLeft size={20} />
            </motion.button>
            <motion.button
              {...iconHover}
              type="button"
              onClick={() => goTo(activeIndex + 1)}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 dark:bg-slate-900/90 text-gray-700 dark:text-gray-200 shadow-md flex items-center justify-center hover:bg-white dark:hover:bg-slate-800 hover:shadow-lg transition-colors"
              aria-label="Next image"
            >
              <FiChevronRight size={20} />
            </motion.button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex items-center justify-center gap-2 py-3">
          {images.map((src, index) => (
            <button
              key={src}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to image ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-6 bg-sky-500"
                  : "w-2 bg-gray-300 dark:bg-slate-600 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProjectGalleryCarousel;

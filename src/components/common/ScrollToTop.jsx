import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-scroll";
import { iconHover } from "../../utils/motion";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ type: "spring", stiffness: 360, damping: 24 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <Link
            to="home"
            smooth
            duration={500}
            offset={-80}
            aria-label="Back to top"
            className="block cursor-pointer"
          >
            <motion.span
              {...iconHover}
              className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-500 to-sky-500 text-white flex items-center justify-center shadow-lg shadow-violet-500/30 hover:shadow-xl hover:shadow-violet-500/40"
            >
              <FaArrowUp size={16} />
            </motion.span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ScrollToTop;

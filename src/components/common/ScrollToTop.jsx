import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-scroll";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <Link
      to="home"
      smooth
      duration={500}
      offset={-80}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-xl bg-gradient-to-br from-violet-500 to-sky-500 text-white flex items-center justify-center shadow-lg shadow-violet-500/30 hover:scale-105 transition-transform duration-300 cursor-pointer"
    >
      <FaArrowUp size={16} />
    </Link>
  );
}

export default ScrollToTop;

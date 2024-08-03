import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Lightswitch = () => {
  const [imgSrc, setImgSrc] = useState("/moon.png");

  const switchImage = () => {
    setImgSrc((prevSrc) =>
      prevSrc === "/moon.png" ? "/sun.png" : "/moon.png",
    );
  };

  useEffect(() => {
    document.body.className = imgSrc === "/moon.png" ? "moon" : "sun";
  }, [imgSrc]);

  const variants = {
    initial: { y: -20, opacity: 0, rotate: -45 },
    animate: { y: 0, opacity: 1, rotate: 0 },
    exit: { y: -20, opacity: 0, rotate: 45 },
    hover: { scale: 1.1 },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.img
        key={imgSrc}
        src={imgSrc}
        alt={imgSrc === "/moon.png" ? "moon" : "sun"}
        width={24}
        height={24}
        className="pixelated inline-block align-middle cursor-pointer"
        onClick={switchImage}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          duration: 0.5,
        }}
        whileHover={{
          scale: 1.1,
          rotate: [0, -10, 0, 10, 0],
          transition: {
            rotate: {
              repeat: Infinity,
              duration: 0.5,
            },
          },
        }}
      />
    </AnimatePresence>
  );
};

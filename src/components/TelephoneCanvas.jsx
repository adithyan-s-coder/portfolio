import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const TelephoneCanvas = ({ frameCount = 240 }) => {
  const canvasRef = useRef(null);
  const requestRef = useRef();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });

    const img = new Image();
    let currentFrame = 1;
    let playing = true;

    const renderFrame = () => {
      const frameNumber = String(currentFrame).padStart(3, "0");
      img.src = `/images/ezgif-frame-${frameNumber}.jpg`;

      img.onload = () => {
        // Draw the frame responsively
        const canvasAspect = canvas.width / canvas.height;
        const imgAspect = img.width / img.height;
        let drawWidth, drawHeight, offsetX, offsetY;

        if (canvasAspect > imgAspect) {
          drawWidth = canvas.width;
          drawHeight = canvas.width / imgAspect;
          offsetX = 0;
          offsetY = (canvas.height - drawHeight) / 2;
        } else {
          drawHeight = canvas.height;
          drawWidth = canvas.height * imgAspect;
          offsetX = (canvas.width - drawWidth) / 2;
          offsetY = 0;
        }

        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      };

      if (playing) {
        currentFrame++;
        if (currentFrame > frameCount) {
          currentFrame = 1; // Loop back
        }
      }

      // 30 FPS animation loop (approx 33ms)
      setTimeout(() => {
        requestRef.current = requestAnimationFrame(renderFrame);
      }, 33);
    };

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
      // Re-trigger the render for current frame without advancing to prevent stutter
      const frameNumber = String(currentFrame).padStart(3, "0");
      img.src = `/images/ezgif-frame-${frameNumber}.jpg`;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    requestRef.current = requestAnimationFrame(renderFrame);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(requestRef.current);
      playing = false;
    };
  }, [frameCount]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative w-full h-full rounded-none overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.1)] border border-white/5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
      
      {/* Decorative HUD Elements for the Canvas */}
      <div className="absolute top-4 left-4 border-t-2 border-l-2 border-cyan-500/30 w-8 h-8 pointer-events-none" />
      <div className="absolute bottom-4 right-4 border-b-2 border-r-2 border-cyan-500/30 w-8 h-8 pointer-events-none" />
    </motion.div>
  );
};

export default TelephoneCanvas;

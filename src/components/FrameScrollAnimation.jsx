import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const FrameScrollAnimation = ({ frameCount = 240 }) => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  
  // 1. Scroll Tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 2. Smooth Easing (Spring) for the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // 3. Transform Progress to Frame Index
  const frameIndex = useTransform(smoothProgress, [0, 0.9], [1, frameCount]);

  const images = useRef([]);
  const [loaded, setLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  // Preloading Logic for Production Network (Vercel)
  useEffect(() => {
    let loadedCount = 0;
    const preloadImages = () => {
      for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        const frameNumber = String(i).padStart(3, "0");
        img.src = `/image2/ezgif-frame-${frameNumber}.jpg`;
        
        img.onload = () => {
          loadedCount++;
          setLoadingProgress(Math.floor((loadedCount / frameCount) * 100));
          if (loadedCount === frameCount) {
            setLoaded(true);
          }
        };
        img.onerror = () => {
          loadedCount++;
          setLoadingProgress(Math.floor((loadedCount / frameCount) * 100));
          if (loadedCount === frameCount) {
            setLoaded(true);
          }
        };
        // Add to array even if not loaded yet
        images.current.push(img);
      }
    };
    preloadImages();
  }, [frameCount]);

  // Canvas Rendering
  useEffect(() => {
    if (!loaded) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });

    let animationFrameId;

    const render = () => {
      const index = Math.round(frameIndex.get()) - 1; // 0-indexed for array
      const safeIndex = Math.max(0, Math.min(index, frameCount - 1));
      const img = images.current[safeIndex];

      if (img && img.complete && img.naturalWidth !== 0) {
        // Responsive cover logic
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
      }
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Frame update loop
    const unsubscribe = frameIndex.on("change", () => {
        // use requestAnimationFrame to throttle drawing
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(render);
    });

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      unsubscribe();
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [loaded, frameIndex, frameCount]);

  // 5. Anti-Gravity 3D Effects
  const y = useTransform(smoothProgress, [0, 1], ["0%", "-10%"]);
  const rotateX = useTransform(smoothProgress, [0, 0.5, 1], [0, 15, 0]);
  const rotateY = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0, -10, 10, 0]);
  const scale = useTransform(smoothProgress, [0, 0.8, 0.95], [1, 1.05, 1.2]);
  const z = useTransform(smoothProgress, [0, 1], [0, 100]);

  // 6. Final Scene Transitions
  const opacity = useTransform(smoothProgress, [0.85, 0.95], [1, 0]);
  const blur = useTransform(smoothProgress, [0.85, 0.95], ["blur(0px)", "blur(20px)"]);
  const textOpacity = useTransform(smoothProgress, [0.1, 0.3, 0.7, 0.9], [0, 1, 1, 0]);

  return (
    <div ref={containerRef} className="relative h-[600vh] bg-[#020202]">
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center perspective-2000">
        
        {/* Loading Overlay */}
        {!loaded && (
          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#020202]">
            <div className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.5em] mb-4">
              Syncing Core Frames... {loadingProgress}%
            </div>
            <div className="w-1/4 h-[1px] bg-white/10 overflow-hidden">
               <motion.div 
                 className="h-full bg-blue-500" 
                 style={{ width: `${loadingProgress}%` }}
               />
            </div>
          </div>
        )}

        {/* The Animated Frame (Canvas) */}
        <motion.div
           style={{
             y,
             rotateX,
             rotateY,
             scale,
             z,
             opacity,
             filter: blur,
             transformStyle: "preserve-3d"
           }}
           className="relative w-full h-full overflow-hidden flex items-center justify-center"
        >
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Transitional Text Overlay inside the laptop screen */}
          <motion.div 
            style={{ opacity: textOpacity }}
            className="absolute flex flex-col items-center justify-center text-center pointer-events-none z-[60]"
          >
            <h3 className="text-white text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-2 drop-shadow-[0_0_20px_rgba(59,130,246,0.8)] mix-blend-screen max-w-[85vw] md:max-w-[65vw]">
              Welcome to my <span className="text-blue-500 drop-shadow-[0_0_20px_rgba(59,130,246,1)]">Portfolio</span>
            </h3>
            <p className="text-blue-300 font-mono tracking-[0.3em] md:tracking-[0.6em] uppercase text-[10px] md:text-[12px] opacity-90 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]">
              Core System Interface
            </p>
          </motion.div>
        </motion.div>

        {/* Global Cinematic Vibe */}
        <div className="absolute inset-0 pointer-events-none bg-radial-vignette opacity-40" />
      </div>
    </div>
  );
};

export default FrameScrollAnimation;

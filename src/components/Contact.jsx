import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiSend, FiActivity, FiShield } from "react-icons/fi";

const Contact = () => {
  const containerRef = useRef(null);
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ezep6zg",
        "template_6fbergt",
        formRef.current,
        "0GSfZwE2fSCw9lqcZ"
      )
      .then(() => {
        toast.success("TRANSMISSION_COMPLETE 🚀");
        formRef.current.reset();
      })
      .catch((err) => {
        toast.error("CONNECTION_FAILURE ❌");
      });
  };

  return (
    <div
      ref={containerRef}
      id="contactme"
      className="relative w-full h-screen bg-[#020202] overflow-hidden flex items-center justify-center font-mono select-none"
    >
      {/* 3. Aesthetic Overlays (Z-10) */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-radial-vignette opacity-40" />
      <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(0,0,0,0.3)_100%)]" />

      {/* 4. Peripheral HUD Elements (Z-20) */}
      <AnimatePresence>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="absolute inset-0 z-20 pointer-events-none p-10"
          >
            {/* Top-left animated text */}
            <div className="absolute top-12 left-12">
              <motion.div 
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-cyan-400 font-mono text-[9px] uppercase tracking-[0.7em] font-bold"
              >
                Establish Sub-Space Connection
              </motion.div>
            </div>

            {/* Brackets */}
            <div className="absolute top-10 left-10 w-24 h-24 border-t border-l border-cyan-500/20" />
            <div className="absolute top-10 right-10 w-24 h-24 border-t border-r border-cyan-500/20" />
            <div className="absolute bottom-10 left-10 w-24 h-24 border-b border-l border-cyan-500/20" />
            <div className="absolute bottom-10 right-10 w-24 h-24 border-b border-r border-cyan-500/20" />

            {/* Static HUD Text */}
            <div className="absolute top-12 left-12 flex items-center space-x-3">
               <FiActivity className="text-cyan-400 text-xs animate-pulse" />
               <span className="text-cyan-400/40 text-[9px] tracking-[0.4em] uppercase font-bold">Signal_Stable</span>
            </div>
            
            <div className="absolute bottom-12 right-12 text-right hidden lg:block">
               <span className="text-white/10 text-[9px] tracking-[0.6em] uppercase block mb-1">Archive_003</span>
               <span className="text-cyan-500/30 text-[9px] tracking-[0.4em] uppercase">&gt; System_Ready</span>
            </div>
          </motion.div>
      </AnimatePresence>

      {/* 5. Central Contact UI (Z-50) */}
      <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-50 w-full max-w-4xl px-6 pointer-events-auto"
          >
            <div className="text-center mb-8">
              <h2 className="text-6xl md:text-9xl font-black text-white uppercase tracking-tighter leading-none">
              COMM<span className="text-cyan-500 block sm:inline">.LINK</span>
            </h2>
              <div className="flex items-center justify-center space-x-2 text-cyan-500/60 font-mono text-[9px] tracking-[0.6em] uppercase">
                <FiShield />
                <span>Protocol: Neural_Gate</span>
              </div>
            </div>

            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="bg-white/[0.03] backdrop-blur-md border border-white/10 p-10 md:p-14 rounded-none shadow-[0_20px_50px_rgba(0,0,0,0.5)] space-y-10 group"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="text-[9px] font-mono font-bold uppercase tracking-[0.3em] text-cyan-500/50 block ml-1">IDENT_SIGNATURE</label>
                  <input
                    name="name"
                    type="text"
                    placeholder="ENTER_NAME"
                    required
                    className="w-full bg-white/5 border-b border-white/10 py-5 px-6 text-white text-[11px] outline-none focus:border-cyan-600 transition-all placeholder:text-cyan-950/20"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[9px] font-mono font-bold uppercase tracking-[0.3em] text-cyan-500/50 block ml-1">COMM_PATH_ADDR</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="ENTER_EMAIL"
                    required
                    className="w-full bg-white/5 border-b border-white/10 py-5 px-6 text-white text-[11px] outline-none focus:border-cyan-600 transition-all placeholder:text-cyan-950/20"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[9px] font-mono font-bold uppercase tracking-[0.3em] text-cyan-500/50 block ml-1">DATA_PAYLOAD</label>
                <textarea
                  name="message"
                  placeholder="INPUT_TRANSMISSION..."
                  required
                  className="w-full bg-white/5 border-b border-white/10 py-5 px-6 text-white text-[11px] outline-none focus:border-cyan-600 transition-all min-h-[140px] resize-none placeholder:text-cyan-950/20"
                />
              </div>

              <div className="flex justify-center md:justify-end">
                <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(6, 182, 212, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="group flex items-center space-x-6 bg-cyan-600 text-black font-black text-[11px] uppercase tracking-[0.6em] px-24 py-6 shadow-2xl transition-all"
              >
                <span>TRANSMIT</span>
                <FiSend className="text-lg transition-transform group-hover:translate-x-1" />
              </motion.button>
              </div>
            </form>
          </motion.div>
      </AnimatePresence>

      <ToastContainer
        position="bottom-right"
        toastClassName="bg-black border border-cyan-500/30 text-white font-mono text-[9px] rounded-none backdrop-blur-xl"
        progressClassName="bg-cyan-600"
      />
    </div>
  );
};

export default Contact;

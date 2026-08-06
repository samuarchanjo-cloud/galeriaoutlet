"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function SplashScreen() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(true);
  useEffect(() => { setMounted(true); const timer = window.setTimeout(() => setVisible(false), 1600); return () => window.clearTimeout(timer); }, []);
  if (!mounted) return <div className="splash-screen"><img src="/assets/logo/logo.jpeg" alt="Galeria Outlet" width={180} height={180} fetchPriority="high" className="splash-logo" /></div>;
  return <AnimatePresence>{visible ? <motion.div className="splash-screen" initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.55, ease: "easeInOut" }}><motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.03 }} transition={{ duration: 0.65 }}><img src="/assets/logo/logo.jpeg" alt="Galeria Outlet" width={180} height={180} fetchPriority="high" className="splash-logo" /></motion.div></motion.div> : null}</AnimatePresence>;
}

"use client";
import { motion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";

export function Reveal({ children, className, direction = "up", delay = 0 }: { children: ReactNode; className?: string; direction?: "up" | "left" | "right"; delay?: number }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const offset = direction === "left" ? { x: -26 } : direction === "right" ? { x: 26 } : { y: 24 };
  if (!mounted) return <div className={className}>{children}</div>;
  return <motion.div className={className} initial={{ opacity: 0, ...offset }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.62, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

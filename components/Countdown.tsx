"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Reveal } from "./Reveal";

const target = new Date("2026-08-09T23:59:59-03:00").getTime();
function remaining() { const delta = Math.max(0, target - Date.now()); return { dias: Math.floor(delta / 86_400_000), horas: Math.floor((delta / 3_600_000) % 24), minutos: Math.floor((delta / 60_000) % 60), segundos: Math.floor((delta / 1_000) % 60) }; }
export function Countdown() {
  const [time, setTime] = useState(remaining);
  useEffect(() => { const timer = window.setInterval(() => setTime(remaining()), 1000); return () => window.clearInterval(timer); }, []);
  return <Reveal><section className="countdown page-shell" aria-label="Contagem regressiva para o Dia dos Pais"><Image src="/assets/hero/contagem-regressiva.png" alt="" fill unoptimized sizes="(max-width: 900px) 100vw, 1200px" className="countdown-bg" /><div className="countdown-title"><small>Faltam poucos dias para o</small><strong>Dia dos Pais!</strong></div><div className="countdown-values">{Object.entries(time).map(([label, value]) => <div className="time-block" key={label}><b suppressHydrationWarning>{String(value).padStart(2, "0")}</b><span>{label}</span></div>)}</div></section></Reveal>;
}

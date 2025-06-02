import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, AlertTriangle, MapPinned, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const cards = [
    {
      title: "Proteção em tempo real",
      desc: "Sensores e satélites vigiam níveis de água 24/7, acionando alertas instantâneos.",
      Icon: ShieldCheck,
      color: "#10b981",
    },
    {
      title: "Alertas acessíveis",
      desc: "WhatsApp, SMS, rádio comunitária e sirenes alcançam toda a população.",
      Icon: AlertTriangle,
      color: "#ef4444",
    },
    {
      title: "Mapeamento de risco",
      desc: "GIS gratuito identifica zonas críticas e rotas seguras.",
      Icon: MapPinned,
      color: "#3b82f6",
    },
    {
      title: "Educação contínua",
      desc: "Aprenda com o módulo Guardiões da Chuva e simulados em escolas.",
      Icon: BookOpen,
      color: "#f59e0b",
    },
  ];

  const scrollSections = [
    "Monitore parâmetros críticos em dashboards intuitivos",
    "Antecipe cenários com IA preditiva e big‑data colaborativo",
    "Mobilize voluntários locais com missões gamificadas",
  ];

  const fadeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = fadeRefs.current.indexOf(
            entry.target as HTMLDivElement
          );
          if (entry.isIntersecting && index !== -1) {
            setVisibleIndexes((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    fadeRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      fadeRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="bg-gradient-to-b from-blue-50/60 via-white to-white pt-24 pb-32 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-14">
        <div className="md:w-1/2 text-center md:text-left opacity-100 translate-x-0 transition duration-900 ease-out">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-blue-700 mb-4 drop-shadow-sm">
            Hydro Save
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-6">
            Prepare · Previna · Proteja
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Monitoramento em tempo real, alertas geo‑localizados e engajamento
            comunitário para salvar vidas em cidades de pequeno e médio porte.
          </p>
          <Link
            to="/solucao"
            className="inline-block bg-blue-700 text-white px-10 py-3 rounded-xl text-lg font-medium hover:scale-105 hover:bg-blue-800 transition transform duration-300 shadow-md"
          >
            Conheça a Solução
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-24 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {cards.map(({ title, desc, Icon, color }, i) => (
          <div
            key={title}
            className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl border border-blue-100 transition-all duration-300 cursor-pointer hover-shake"
          >
            <Icon className="h-10 w-10 mx-auto mb-4" style={{ color: color }} />
            <h3 className="text-xl font-semibold text-blue-800 mb-2 text-center">
              {title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm text-center">
              {desc}
            </p>
          </div>
        ))}
      </div>

      <div className="max-w-5xl mx-auto mt-32 px-6 space-y-24">
        {scrollSections.map((text, idx) => (
          <div
            key={idx}
            ref={(el) => {
              fadeRefs.current[idx] = el;
            }}
            className={`flex items-center justify-center scroll-fade-in ${
              visibleIndexes.includes(idx) ? "visible" : ""
            }`}
          >
            <h3 className="text-center text-3xl md:text-4xl font-bold tracking-tight">
              {text}
            </h3>
          </div>
        ))}
      </div>

      <motion.div
        className="max-w-4xl mx-auto mt-32 px-6 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h3 className="text-3xl md:text-4xl font-semibold text-blue-700 mb-6">
          Junte‑se aos Guardiões da Chuva
        </h3>
        <p className="text-lg text-gray-700 mb-8">
          Seja voluntário, receba treinamentos e ajude sua comunidade a estar
          preparada para o próximo temporal.
        </p>
        <Link
          to="/cadastrar"
          className="inline-block bg-blue-700 text-white px-10 py-3 rounded-xl text-lg font-medium hover:scale-105 hover:bg-blue-800 transition transform duration-300 shadow-md"
        >
          Cadastre‑se Agora
        </Link>
      </motion.div>
    </section>
  );
}
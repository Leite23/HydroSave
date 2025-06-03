import React from "react";
import { motion } from "framer-motion";

import Image1 from "../assets/Image1.png";
import Image2 from "../assets/Image2.png";
import Image3 from "../assets/Image3.png";
import Image4 from "../assets/Image4.png";

interface SolutionCardProps {
  title: string;
  description: string[];
  imageSrc: string;
  imageAlt: string;
  index: number;
}

const SolutionCard: React.FC<SolutionCardProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  index,
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut", delay: index * 0.15 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
      className="relative bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16 last:mb-0
                 border border-blue-100 backdrop-blur-sm bg-opacity-90 max-w-4xl mx-auto"
    >
      <div
        className={`flex flex-col ${
          index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
        } items-center gap-8 md:gap-16`}
      >
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-6 leading-tight">
            {title}
          </h3>
          {description.map((paragraph, i) => (
            <p
              key={i}
              className="mb-4 text-gray-700 text-lg leading-relaxed last:mb-0"
            >
              {paragraph}
            </p>
          ))}
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="rounded-lg shadow-2xl max-w-full h-auto"
            style={{
              maxWidth: "400px",
              maxHeight: "300px",
              objectFit: "contain",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default function Solucao() {
  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 10, delay: 0.2 },
    },
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen py-16">
      <section className="py-16 md:py-24 flex items-center justify-center relative overflow-hidden">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={titleVariants}
          className="text-center p-8 z-10 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-blue-900 mb-6 leading-tight drop-shadow-lg">
            Nossas Soluções, Sua Segurança.
          </h1>
          <p className="text-xl md:text-2xl text-gray-800 max-w-3xl mx-auto">
            Tecnologia avançada e engajamento comunitário para um futuro
            resiliente.
          </p>
        </motion.div>
        <div className="absolute inset-0 bg-pattern-dots opacity-20"></div>
      </section>

      <div className="space-y-16 md:space-y-24 px-4 md:px-8">
        <SolutionCard
          index={0}
          title="Monitoramento Inteligente: Olhos Atentos e Dados Precisos"
          description={[
            "Nossa capacidade de prever enchentes começa com o Monitoramento Inteligente.",
            "Implementamos uma rede estratégica de sensores IoT (Internet das Coisas) diretamente nos rios e córregos. Esses sensores coletam dados cruciais em tempo real, como nível da água, fluxo e volume de chuva. Além disso, integramos dados de satélite para uma visão macro e painéis intuitivos para as prefeituras, permitindo decisões rápidas e baseadas em informações.",
          ]}
          imageSrc={Image3}
          imageAlt="Sensores IoT monitorando rios"
        />

        <SolutionCard
          index={1}
          title="Alertas Geo-Inteligentes: Informação na Hora Certa"
          description={[
            "A informação precisa chegar rápido. Nosso sistema de Alertas Geo-inteligentes garante que a população e as autoridades sejam notificadas imediatamente sobre riscos iminentes.",
            "Utilizamos múltiplos canais de comunicação, como WhatsApp, SMS, rádios comunitárias e sirenes, para alcançar o maior número de pessoas possível. Os alertas são geolocalizados, garantindo que apenas as áreas impactadas recebam avisos relevantes, evitando pânico desnecessário e otimizando a resposta de emergência.",
          ]}
          imageSrc={Image2}
          imageAlt="Alerta de enchente via celular"
        />

        <SolutionCard
          index={2}
          title="Mapeamento GIS Gratuito e Big Data Colaborativo: Conhecimento que Salva"
          description={[
            "Compreender o território é fundamental para a prevenção. Oferecemos um Mapeamento GIS (Sistema de Informação Geográfica) gratuito, que permite às prefeituras identificar áreas de risco, planejar rotas de fuga e gerenciar recursos de forma eficiente.",
            "Este mapeamento é constantemente aprimorado com Big Data Colaborativo, onde informações de campo e histórico de enchentes são analisadas para aprimorar nossos modelos preditivos. Essa abordagem colaborativa nos permite aprender com cada evento, tornando a solução cada vez mais precisa e robusta.",
          ]}
          imageSrc={Image1}
          imageAlt="Mapa GIS de áreas de risco"
        />

        <SolutionCard
          index={3}
          title="Guardiões da Chuva: Fortalecendo a Comunidade"
          description={[
            "Acreditamos que a prevenção é um esforço coletivo. Nosso Módulo Educativo foca na capacitação e conscientização, criando os 'Guardiões da Chuva'.",
            "Através de programas interativos e acessíveis, treinamos membros da comunidade para entenderem os riscos, agirem em situações de emergência e contribuírem com informações valiosas. Essa rede de cidadãos engajados se torna a primeira linha de defesa, multiplicando o impacto da nossa solução e construindo uma cultura de resiliência local.",
          ]}
          imageSrc={Image4}
          imageAlt="Comunidade de Guardiões da Chuva"
        />
      </div>

      <section className="py-16 md:py-24 flex items-center justify-center bg-gradient-to-br from-blue-200 to-sky-300 relative overflow-hidden mt-16 md:mt-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center p-8 z-10 max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6 leading-tight drop-shadow-lg">
            Juntos, Construímos um Futuro Mais Seguro.
          </h2>
          <p className="text-lg md:text-xl text-gray-800 max-w-2xl mx-auto mb-8">
            Conecte-se conosco para levar a segurança do Hydro Save à sua
            cidade.
          </p>
          <a
            href="./contato"
            className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 px-10 rounded-full text-xl shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Fale Conosco
          </a>
        </motion.div>
      </section>
    </div>
  );
}

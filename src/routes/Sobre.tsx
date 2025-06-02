import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function Sobre() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-center text-blue-800 mb-12 md:mb-16 tracking-tight"
        >
          Nossa História, Nosso Propósito
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            ref={ref1}
            initial="hidden"
            animate={inView1 ? "visible" : "hidden"}
            variants={sectionVariants}
            className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <h3 className="text-2xl font-bold text-blue-700 mb-4">
              Quem Somos Nós?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Somos uma equipe apaixonada e comprometida com a segurança e
              resiliência de cidades de pequeno e médio porte. No Hydro Save,
              utilizamos o poder da tecnologia e a força da participação
              comunitária para prevenir e mitigar os impactos devastadores de
              desastres naturais, especialmente enchentes.
            </p>
          </motion.div>

          <motion.div
            ref={ref2}
            initial="hidden"
            animate={inView2 ? "visible" : "hidden"}
            variants={sectionVariants}
            className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <h3 className="text-2xl font-bold text-blue-700 mb-4">
              Inovação e Compromisso com a Segurança Urbana
            </h3>
            <p className="text-gray-700 leading-relaxed">
              No Hydro Save, somos movidos por um propósito claro: transformar a
              realidade das cidades frente aos desafios impostos pelas
              enchentes. Nascemos da convicção de que a tecnologia, aliada ao
              engajamento comunitário, pode e deve ser a espinha dorsal na
              prevenção de desastres naturais. Não somos apenas desenvolvedores
              de soluções; somos parceiros comprometidos com a segurança e o
              bem-estar das comunidades. Nossa equipe é formada por
              especialistas dedicados, que combinam conhecimento técnico em IoT,
              Big Data e geotecnologia com uma profunda compreensão das
              necessidades urbanas. Acreditamos que cada cidade merece estar
              preparada, e é por isso que focamos em soluções que sejam não só
              avançadas, mas também acessíveis, intuitivas e verdadeiramente
              eficazes.
            </p>
          </motion.div>

          <motion.div
            ref={ref3}
            initial="hidden"
            animate={inView3 ? "visible" : "hidden"}
            variants={sectionVariants}
            className="md:col-span-2 bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <h3 className="text-2xl font-bold text-blue-700 mb-4">
              Nossa Missão: Informar, Educar e Fortalecer
            </h3>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Nossa missão se desdobra em três pilares fundamentais, que guiam
              cada passo do nosso trabalho:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 leading-relaxed">
              <li>
                <strong>Fornecer informações em tempo real:</strong> Capacitamos
                as prefeituras e a população com dados precisos e alertas
                instantâneos. Com o Hydro Save, a informação chega antes da
                água, permitindo ações proativas e salvando vidas.
              </li>
              <li>
                <strong>Promover educação:</strong> Vamos além da tecnologia,
                investindo na capacitação e conscientização. Acreditamos que uma
                comunidade informada é uma comunidade mais segura, e é por isso
                que nossos programas educativos são parte integrante da nossa
                solução.
              </li>
              <li>
                <strong>Construir resiliência cívica:</strong> Nosso objetivo
                final é que as cidades não apenas se protejam, mas que se tornem
                mais fortes e autossuficientes diante dos desafios naturais.
                Fomentamos a participação ativa dos cidadãos, transformando-os
                em agentes de mudança e proteção em suas próprias comunidades.
              </li>
            </ul>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Com o Hydro Save, as tragédias anunciadas se tornam histórias de
              prevenção. Estamos aqui para construir um futuro onde a segurança
              contra enchentes seja uma realidade para todos.
            </p>
          </motion.div>
        </div>

        <motion.div
          ref={ref4}
          initial="hidden"
          animate={inView4 ? "visible" : "hidden"}
          variants={sectionVariants}
          className="text-center mt-12 md:mt-16"
        >
          <a
            href="/solucao"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Conheça Nossa Solução Detalhada
          </a>
        </motion.div>
      </div>
    </section>
  );
}
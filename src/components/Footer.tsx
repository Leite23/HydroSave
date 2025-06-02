import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.1 },
    },
  };

  return (
    <motion.footer
      className="bg-gradient-to-br from-blue-900 to-indigo-950 text-gray-200 py-16 md:py-20 relative overflow-hidden"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="absolute top-0 left-0 w-40 h-40 bg-blue-700 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-indigo-700 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-center md:text-left items-start">
          <motion.div
            className="md:col-span-1 flex flex-col items-center md:items-start"
            variants={itemVariants}
          >
            <Link to="/" className="mb-4">
              <motion.img
                src="../src/assets/Logo.png"
                className="h-32 w-auto"
                alt="Logo Hydro Save"
                whileHover={{ rotate: 3 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed max-w-xs mx-auto md:mx-0 mt-4">
              Prevenção inteligente de enchentes para um futuro mais seguro e
              resiliente.
            </p>
          </motion.div>

          <motion.div className="md:col-span-1" variants={itemVariants}>
            <h4 className="text-xl font-bold text-white mb-6">
              Navegação e Contato
            </h4>
            <ul className="space-y-3 mb-6">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-blue-300 transition-colors duration-200 text-base"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/solucao"
                  className="text-gray-300 hover:text-blue-300 transition-colors duration-200 text-base"
                >
                  Nossas Soluções
                </Link>
              </li>
              <li>
                <Link
                  to="/sobre"
                  className="text-gray-300 hover:text-blue-300 transition-colors duration-200 text-base"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  to="/contato"
                  className="text-gray-300 hover:text-blue-300 transition-colors duration-200 text-base"
                >
                  Contato
                </Link>
              </li>
            </ul>

            <div className="text-gray-300 space-y-3 text-base">
              <p className="flex items-center justify-center md:justify-start">
                contato@hydrosave.com.br
              </p>
              <p className="flex items-center justify-center md:justify-start">
                (XX) XXXX-XXXX
              </p>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 pt-8 border-t border-blue-800 text-center text-gray-400 text-sm">
          <p>© {currentYear} Hydro Save. Todos os direitos reservados.</p>
        </div>
      </div>
    </motion.footer>
  );
}
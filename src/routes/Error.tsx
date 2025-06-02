import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ErrorPage() {
  const pageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const numberVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.3,
        staggerChildren: 0.1,
      },
    },
    hover: { scale: 1.05 },
  };

  const digitVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.8, duration: 0.6 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 1.2, duration: 0.5, type: "spring", stiffness: 100 },
    },
    hover: { scale: 1.05, boxShadow: "0px 8px 15px rgba(0,0,0,0.2)" },
    tap: { scale: 0.95 },
  };

  const errorMessage = "Parece que você se perdeu no oceano digital!";
  const hintMessage =
    "A página que você procura pode ter sido inundada ou movida para outro porto."; // Dica

  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden text-center"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="absolute inset-0 z-0 opacity-10"
        initial={{ scale: 0.5, rotate: 0 }}
        animate={{ scale: 1.2, rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage:
            "radial-gradient(circle, #e0f2fe 1px, transparent 1px)",
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"
        initial={{ x: -100, y: 100 }}
        animate={{ x: [0, 200, 0], y: [0, -100, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-0 right-0 w-64 h-64 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"
        initial={{ x: 100, y: -100 }}
        animate={{ x: [0, -200, 0], y: [0, 100, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="relative z-10 bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-blue-200 backdrop-blur-sm bg-opacity-90 max-w-lg w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.2, duration: 0.6 },
        }}
      >
        <motion.h2
          className="text-8xl md:text-9xl font-extrabold text-blue-600 mb-6 drop-shadow-md"
          variants={numberVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          {"404".split("").map((char, index) => (
            <motion.span
              key={index}
              variants={digitVariants}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </motion.h2>

        <motion.p
          className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 leading-relaxed"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          {errorMessage}
        </motion.p>

        <motion.p
          className="text-lg text-gray-600 mb-8 max-w-sm mx-auto"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          {hintMessage}
        </motion.p>

        <motion.div
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whileTap="tap"
        >
          <Link
            to="/"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
          >
            <span className="mr-2">🌊</span> Voltar para a Home Segura
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
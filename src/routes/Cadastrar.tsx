import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Cadastrar() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Cadastrando ${nome} - ${email}`);
    setNome("");
    setEmail("");
    setSenha("");
  };

  const formContainerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const inputVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4 sm:p-6 lg:p-8 relative overflow-hidden">
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
        className="w-full max-w-md bg-white p-8 md:p-10 shadow-2xl rounded-xl z-10
                   border border-blue-100 backdrop-blur-sm bg-opacity-90 transform
                   hover:shadow-3xl transition-shadow duration-300 ease-in-out"
        variants={formContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <h3 className="text-3xl md:text-4xl font-extrabold text-center text-blue-700 mb-8 drop-shadow-md">
          Crie Sua Conta
        </h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div variants={inputVariants}>
            <label
              className="block text-gray-700 font-medium mb-1"
              htmlFor="nome"
            >
              Nome Completo
            </label>
            <input
              type="text"
              id="nome"
              className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-3 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </motion.div>

          <motion.div variants={inputVariants}>
            <label
              className="block text-gray-700 font-medium mb-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-3 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </motion.div>

          <motion.div variants={inputVariants}>
            <label
              className="block text-gray-700 font-medium mb-1"
              htmlFor="senha"
            >
              Senha
            </label>
            <input
              type="password"
              id="senha"
              className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-3 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </motion.div>

          <motion.button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700
                       transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl
                       transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Criar Conta
          </motion.button>
        </form>

        <motion.p
          className="text-center text-gray-600 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.7 } }}
        >
          Já tem uma conta?{" "}
          <a
            href="/login"
            className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200"
          >
            Faça Login
          </a>
        </motion.p>
      </motion.div>
    </section>
  );
}

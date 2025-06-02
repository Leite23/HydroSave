import { useState, useEffect } from 'react';
import { Link, NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const navItemVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    hover: { scale: 1.05, transition: { type: "spring", stiffness: 300 } },
    tap: { scale: 0.95 },
  };

  const mobileMenuVariants = {
    open: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
    closed: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2, ease: "easeIn" },
    },
  };

  return (
    <motion.nav
      className={`bg-blue-600 text-white w-full z-50 fixed top-0 transition-shadow duration-300 ${
        shadow ? "shadow-lg" : ""
      }`}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <motion.img
                src="../src/assets/Logo.png"
                className="h-24 w-auto"
                alt="Logo HydroSave"
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.2 }}
              />
            </Link>
          </div>

          <div className="hidden md:flex space-x-6">
            <motion.div
              variants={navItemVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              whileTap="tap"
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "bg-blue-700 text-white"
                      : "hover:bg-blue-700 hover:text-white"
                  }`
                }
              >
                Home
              </NavLink>
            </motion.div>
            <motion.div
              variants={navItemVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              whileTap="tap"
            >
              <NavLink
                to="/solucao"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "bg-blue-700 text-white"
                      : "hover:bg-blue-700 hover:text-white"
                  }`
                }
              >
                Solução
              </NavLink>
            </motion.div>
            <motion.div
              variants={navItemVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              whileTap="tap"
            >
              <NavLink
                to="/sobre"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "bg-blue-700 text-white"
                      : "hover:bg-blue-700 hover:text-white"
                  }`
                }
              >
                Sobre
              </NavLink>
            </motion.div>
            <motion.div
              variants={navItemVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              whileTap="tap"
            >
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "bg-blue-700 text-white"
                      : "hover:bg-blue-700 hover:text-white"
                  }`
                }
              >
                Login
              </NavLink>
            </motion.div>
            <motion.div
              variants={navItemVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              whileTap="tap"
            >
              <NavLink
                to="/cadastrar"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "bg-blue-700 text-white"
                      : "hover:bg-blue-700 hover:text-white"
                  }`
                }
              >
                Cadastrar
              </NavLink>
            </motion.div>
          </div>

          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="sr-only">Abrir menu principal</span>
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-blue-700 pb-2"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-sm font-medium hover:bg-blue-600 transition-colors duration-200"
            >
              Home
            </NavLink>
            <NavLink
              to="/solucao"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-sm font-medium hover:bg-blue-600 transition-colors duration-200"
            >
              Solução
            </NavLink>
            <NavLink
              to="/sobre"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-sm font-medium hover:bg-blue-600 transition-colors duration-200"
            >
              Sobre
            </NavLink>
            <NavLink
              to="/login"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-sm font-medium hover:bg-blue-600 transition-colors duration-200"
            >
              Login
            </NavLink>
            <NavLink
              to="/cadastrar"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-sm font-medium hover:bg-blue-600 transition-colors duration-200"
            >
              Cadastrar
            </NavLink>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
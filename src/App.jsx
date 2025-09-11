import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import useAnimations from "./hooks/useAnimations";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PopupSocio from "./components/PopupSocio";
import Home from "./pages/Home";
import SobreNosotros from "./pages/SobreNosotros";
import Noticias from "./pages/Noticias";
import Eventos from "./pages/Eventos";
import Productos from "./pages/Productos";
import Contacto from "./pages/Contacto";
import MenorEdad from "./pages/MenorEdad";

function AppContent() {
  const location = useLocation();
  const { pageTransition } = useAnimations();

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <motion.div
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={pageTransition}
                >
                  <Home />
                </motion.div>
              }
            />
            <Route
              path="/sobre-nosotros"
              element={
                <motion.div
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={pageTransition}
                >
                  <SobreNosotros />
                </motion.div>
              }
            />
            <Route
              path="/noticias"
              element={
                <motion.div
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={pageTransition}
                >
                  <Noticias />
                </motion.div>
              }
            />
            <Route
              path="/eventos"
              element={
                <motion.div
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={pageTransition}
                >
                  <Eventos />
                </motion.div>
              }
            />
            <Route
              path="/productos"
              element={
                <motion.div
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={pageTransition}
                >
                  <Productos />
                </motion.div>
              }
            />
            <Route
              path="/contacto"
              element={
                <motion.div
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={pageTransition}
                >
                  <Contacto />
                </motion.div>
              }
            />
            <Route
              path="/menor-edad"
              element={
                <motion.div
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={pageTransition}
                >
                  <MenorEdad />
                </motion.div>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      {/* Popup de Bienvenida */}
      <PopupSocio />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

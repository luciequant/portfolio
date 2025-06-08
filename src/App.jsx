import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <AnimatePresence>{isLoading && <LoadingScreen />}</AnimatePresence>

      {!isLoading && (
        <main className="p-8">
          <Navbar />
          <Home />
          <About />
        </main>
      )}
    </div>
  );
}

export default App;

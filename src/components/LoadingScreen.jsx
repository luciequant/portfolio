import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-neutral-950 text-gray-200"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Typewriter Text */}
      <div className="text-4xl font-mono mb-6">
        <Typewriter
          options={{
            strings: ["Hello World"],
            autoStart: true,
            loop: false,
            delay: 75,
          }}
        />
      </div>

      {/* Animated Color-Changing Loading Bar */}
      <motion.div
        className="w-64 h-2 rounded-full bg-gradient-to-r from-violet-600 to-pink-700"
        initial={{ scaleX: 0 }}
        animate={{
          scaleX: [0, 1, 1, 0],
          backgroundPosition: ["0% 50%", "100% 50%"],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
};

export default LoadingScreen;

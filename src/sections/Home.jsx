import React from "react";
import profilepic from "../assets/profilepic.png";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className="mt-44 max-w-[1200px] mx-auto relative" id="home">
      <div className="grid md:grid-cols-2 place-items-center gap-8 ">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.h3
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-4xl mb-4 text-gray-400"
          >
            Hello, I am
          </motion.h3>
          <h1 className="text-3xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-violet-700 to-pink-600 bg-clip-text text-transparent leading-right">
            Lucie Quantová
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-gray-400"
          >
            <strong className="text-pink-400">Front-End Developer</strong> with
            a strong passion for coding and ability to create clean, responsive,
            and user-friendly web applications. With a keen attention to detail
            and a commitment to continuous learning, I actively seek out new
            tools and techniques to improve my skills.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-row items-center gap-6 mt-4 md:mb-0"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
              }}
              className="z-10 cursor-pointer font-bold text-gray-300 md:w-auto p-4 border border-purple-400 rounded-xl hover:bg-blue-800/10"
            >
              <Link to="projects" smooth={true} offset={50} duration={500}>
                View Projects
              </Link>
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
              }}
              className="z-10 cursor-pointer font-bold text-gray-300 md:w-auto p-4 border border-pink-400 rounded-xl  hover:bg-pink-800/10"
            >
              <Link to="contact" smooth={true} offset={50} duration={500}>
                Contact Me
              </Link>
            </motion.button>
          </motion.div>
        </motion.div>
        <motion.img
          src={profilepic}
          className="w-[450px] md:w-350px]"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  );
};

export default Home;

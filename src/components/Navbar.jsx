import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  const menuVariants = {
    open: {
      x: 0,
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-opacity-70 backdrop-blur-md z-50">
      <div
        className="max-w-[1300px] mx-auto  flex justify-between text-gray-400 
        text-xl items-center px-12 h-20 font-roboto"
      >
        <a href="/" className="text-violet-600 font-bold text-3xl">
          Lucie<span className="text-pink-600">Dev</span>
        </a>

        <ul className="hidden md:flex gap-12 z-10 cursor-pointer pt-4 font-semibold">
          <li className="hover:text-violet-500">
            <Link to="/" smooth={true} offset={50} duration={500}>
              Home
            </Link>
          </li>
          <li className="hover:text-violet-500">
            <Link to="about" smooth={true} offset={50} duration={500}>
              About
            </Link>
          </li>
          <li className="hover:text-violet-500">
            <Link to="projects" smooth={true} offset={50} duration={500}>
              Projects
            </Link>
          </li>
          <li className="hover:text-violet-500">
            <Link to="contact" smooth={true} offset={50} duration={500}>
              Contact
            </Link>
          </li>
        </ul>

        <div onClick={toggleNav} className="md:hidden z-50 text-violet-500">
          {nav ? <IoClose size={30} /> : <IoMenu size={30} />}
        </div>

        <motion.div
          initial={false}
          animate={nav ? "open" : "closed"}
          variants={menuVariants}
          className="fixed left-0 top-0 w-full min-h-screen bg-pink-600 z-40"
        >
          <ul className="font-semibold text-4xl space-y-8 mt-24 text-center text-gray-300">
            <li>
              <Link
                to="/"
                onClick={closeNav}
                smooth={true}
                offset={50}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                onClick={closeNav}
                smooth={true}
                offset={50}
                duration={500}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                onClick={closeNav}
                smooth={true}
                offset={50}
                duration={500}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                onClick={closeNav}
                smooth={true}
                offset={50}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;

import { motion } from "framer-motion";
import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoReact,
  IoLogoGithub,
} from "react-icons/io5";
import { BiLogoTypescript, BiLogoTailwindCss, BiLogoGit } from "react-icons/bi";
import { FaBootstrap } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { TbBrandFramerMotion } from "react-icons/tb";
import resume from "../assets/resume.pdf";

const skills = {
  technologies: [
    { name: "HTML", icon: <IoLogoHtml5 className="text-orange-600" /> },
    { name: "CSS", icon: <IoLogoCss3 className="text-blue-600" /> },
    {
      name: "JavaScript",
      icon: <IoLogoJavascript className="text-yellow-300" />,
    },
    {
      name: "TypeScript",
      icon: <BiLogoTypescript className="text-blue-400" />,
    },
    { name: "React", icon: <IoLogoReact className="text-cyan-300" /> },
    {
      name: "TailwindCSS",
      icon: <BiLogoTailwindCss className="text-sky-300" />,
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap className="text-purple-500" />,
    },
    {
      name: "Next.js",
      icon: <RiNextjsFill className="text-black bg-white rounded-full" />,
    },
    {
      name: "Git",
      icon: <BiLogoGit className="text-orange-500" />,
    },
    {
      name: "GitHub",
      icon: <IoLogoGithub className="text-black  bg-white rounded-full" />,
    },
    {
      name: "VS Code",
      icon: <VscVscode className="text-sky-500" />,
    },
    {
      name: "FramerMotion",
      icon: <TbBrandFramerMotion className="text-white" />,
    },
  ],
};
const certifications = [
  {
    title: "React Development",
    issuer: "SheCodes",
    date: "May 2024",
    link: `https://www.shecodes.io/certificates/7b888db9346f47cf3dbb4226903ed597?_gl=1*17ahh6c*_gcl_au*MjEwMTU0OTgxNy4xNzQyMjMxMTI0`,
  },
  {
    title: "Web Development",
    issuer: "SheCodes",
    date: "Feburary 2024",
    link: `https://www.shecodes.io/certificates/982ada137bab4cb75f04172ca13c1f81?_gl=1*g9fd4z*_gcl_au*MjEwMTU0OTgxNy4xNzQyMjMxMTI0`,
  },
  {
    title: "Responsive Web Development",
    issuer: "SheCodes",
    date: "April 2024",
    link: `https://www.shecodes.io/certificates/593af71407413acedadc952392f8b394?_gl=1*1shdhpl*_gcl_au*MjEwMTU0OTgxNy4xNzQyMjMxMTI0`,
  },
  {
    title: "Introduction to Artificial Intelligence",
    issuer: "SheCodes",
    date: "March 2024",
    link: `https://www.shecodes.io/certificates/47809886a1097f3d03305bd5f4c36c7d?_gl=1*1d16mp8*_gcl_au*MjEwMTU0OTgxNy4xNzQyMjMxMTI0`,
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center mt-[40vh]"
    >
      <div class="max-w-[800px] p-8 text-center">
        <h2 class="text-4xl font-bold mb-20 bg-gradient-to-r from-violet-700 to-pink-600 bg-clip-text text-transparent leading-right">
          About Me
        </h2>
        <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <h3 className="text-2xl text-violet-500 font-bold text-center mb-6">
            Skills
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            {skills.technologies.map((tech, idx) => (
              <div key={idx} className="flex items-center m-4">
                <span className="text-4xl mr-2">{tech.icon}</span>
                <span className="text-gray-400 ">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all mt-10">
          <h3 className="text-2xl text-pink-400 font-bold text-center mb-6">
            Certification
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="border border-purple-400 rounded-xl p-4 shadow hover:shadow-md transition"
              >
                <h3 className="text-xl text-purple-200 font-semibold mb-1">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  Issued by {cert.issuer} – {cert.date}
                </p>
                <button className="z-10 mt-4 cursor-pointer font-bold text-pink-200 md:w-auto p-4 border border-pink-400 rounded-xl hover:-translate-y-1 bg-pink-800/10">
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    View Certification
                  </a>
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center space-x-4 mt-6">
          <button className="z-10 mt-4 cursor-pointer font-bold text-gray-300 md:w-auto p-4 border border-purple-400 rounded-xl hover:-translate-y-1 bg-purple-800/20">
            <a href={resume} download="resume">
              Download Resume
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;

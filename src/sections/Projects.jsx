import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";

const projects = [
  {
    img: project1,
    title: "Travel Project",
    description: "Built with HTML, CSS and Bootstrap",
    link: `https://travelprague.netlify.app/`,
  },
  {
    img: project2,
    title: "AI Quote Generator",
    description: "Built with HTML, CSS, JavaScript and AI API",
    link: `https://aiquotegeneratorlq.netlify.app/`,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center mt-40"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all mt-6"
            >
              <h3 className="text-pink-400 text-2xl font-bold mb-4">
                {project.title}
              </h3>{" "}
              <img src={project.img} alt={project.title} className="w-full" />
              <p className="text-xl text-gray-600 my-6">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-500 hover:text-pink-400"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

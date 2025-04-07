import { FaGithub, FaExternalLinkAlt, FaNodeJs } from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiPostgresql,
} from "react-icons/si";
import EzTravel from "../../../../assets/images/ez.travel.png";
import RecognitionNotes from "../../../../assets/images/recognitionNotes.png";

const projects = [
  {
    title: "Ez Travel",
    date: "Jul 2024 - Ago 2024",
    image: EzTravel,
    description:
      "O Ez Travel é um projeto que desenvolvi porque amo viajar e sempre gosto de planejar cada detalhe para aproveitar ao máximo. Pensando nisso, criei uma plataforma onde é possível organizar roteiros, adicionar atividades, convidar amigos e salvar links úteis, como vídeos de restaurantes ou pontos turísticos. O projeto foi desenvolvido com tecnologias modernas tanto no frontend quanto no backend. Utilizei React, TypeScript e TailwindCSS para uma interface dinâmica e responsiva, enquanto no backend empreguei Node.js, Fastify e Prisma, garantindo alta performance e um banco de dados eficiente com PostgreSQL.",
    technologies: [
      { icon: SiTypescript, color: "text-blue-500" },
      { icon: SiHtml5, color: "text-orange-600" },
      { icon: SiCss3, color: "text-blue-400" },
      { icon: SiReact, color: "text-cyan-500" },
      { icon: SiTailwindcss, color: "text-teal-400" },
      { icon: FaNodeJs, color: "text-green-500" },
      { icon: SiPostgresql, color: "text-blue-600" },
    ],
    github: "https://github.com/victorwaraujo/projeto-ez-travel",
    live: "https://projeto-ez-travel-frontend.onrender.com/",
  },
  {
    title: "Speech Notes",
    date: "Jan 2024 - Mar 2024",
    image: RecognitionNotes,
    description:
      "Desenvolvi este projeto para facilitar meu próprio fluxo de trabalho: enquanto estou codando, uso o Speech Notes para registrar ideias e anotações rapidamente por voz, sem perder o foco. A aplicação utiliza uma API externa de reconhecimento de áudio, convertendo minha fala em texto de forma prática e eficiente. No backend, utilizei Node.js com TypeScript, e no frontend optei por algo simples, apenas para visualização, usando React, Vite e Tailwind CSS para uma interface leve e responsiva.",
    technologies: [
      { icon: SiTypescript, color: "text-blue-500" },
      { icon: SiHtml5, color: "text-orange-600" },
      { icon: SiCss3, color: "text-blue-400" },
      { icon: SiReact, color: "text-cyan-500" },
      { icon: SiTailwindcss, color: "text-teal-400" },
    ],
    github: "https://github.com/victorwaraujo/Projeto-NLW-Node.js",
    live: "https://speech-recognition-notes.onrender.com/",
  },
  // {
  //   title: "Projeto 3",
  //   date: "Abr 2024 - Jun 2024",
  //   image: "/images/project3.png",
  //   description:
  //     "Descrição breve do projeto 3. Explicação sobre as funcionalidades e tecnologias utilizadas.",
  //   technologies: [
  //     { icon: SiTypescript, color: "text-blue-500" },
  //     { icon: SiHtml5, color: "text-orange-600" },
  //     { icon: SiCss3, color: "text-blue-400" },
  //     { icon: SiReact, color: "text-cyan-500" },
  //     { icon: SiTailwindcss, color: "text-teal-400" },
  //   ],
  //   github: "https://github.com/seu-usuario/projeto3",
  //   live: "https://projeto3.com",
  // },
  // {
  //   title: "Projeto 4",
  //   date: "Jul 2024 - Presente",
  //   image: "/images/project4.png",
  //   description:
  //     "Descrição breve do projeto 4. Explicação sobre as funcionalidades e tecnologias utilizadas.",
  //   technologies: [
  //     { icon: SiTypescript, color: "text-blue-500" },
  //     { icon: SiHtml5, color: "text-orange-600" },
  //     { icon: SiCss3, color: "text-blue-400" },
  //     { icon: SiReact, color: "text-cyan-500" },
  //     { icon: SiTailwindcss, color: "text-teal-400" },
  //   ],
  //   github: "https://github.com/seu-usuario/projeto4",
  //   live: "https://projeto4.com",
  // },
];

const Projects = () => {
  return (
    <div
      id="projetos"
      className="bg-slate-900 py-16 px-5 flex flex-col items-center relative"
    >
      <h1 className="absolute text-8xl md:text-10xl text-slate-800 font-bold opacity-20 top-6 md:top-0">
        Projetos
      </h1>

      <h2
        className="text-4xl md:text-6xl text-orange-500 font-bold relative bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 
             bg-clip-text text-transparent animate-gradient"
      >
        Meus Projetos
      </h2>

      <div className="flex md:grid md:grid-cols-2 gap-6 md:gap-10 overflow-x-auto md:overflow-visible snap-x snap-mandatory px-2 mt-16 w-full max-w-7xl scrollbar-hide">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-slate-800 p-6 rounded-lg shadow-lg text-white transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer snap-start min-w-[90%] sm:min-w-[80%] md:min-w-0"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg mb-4"
            />

            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="text-gray-400 text-sm">{project.date}</p>
            <p className="text-gray-300 mt-2">{project.description}</p>

            <div className="flex gap-3 mt-3">
              {project.technologies.map((tech, i) => (
                <tech.icon key={i} className={`w-6 h-6 ${tech.color}`} />
              ))}
            </div>

            <div className="flex gap-4 mt-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaExternalLinkAlt className="w-6 h-6" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

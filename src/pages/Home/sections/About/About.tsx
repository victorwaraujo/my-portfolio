import { HiAcademicCap, HiBriefcase } from "react-icons/hi";
import {
  SiCss3,
  SiGit,
  SiHtml5,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";

const skills = [
  { name: "Git", icon: SiGit, color: "text-orange-500" },
  { name: "HTML", icon: SiHtml5, color: "text-red-500" },
  { name: "CSS", icon: SiCss3, color: "text-blue-500" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-teal-400" },
  { name: "React", icon: SiReact, color: "text-cyan-500" },
  { name: "Vite", icon: SiVite, color: "text-purple-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-gray-300" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-600" },
];

const About = () => {
  return (
    <div
      id="sobre"
      className="bg-slate-900 min-h-screen flex flex-col items-center py-10 px-5 relative md:gap-8"
    >
      <h1 className="absolute text-8xl md:text-10xl text-slate-800 font-bold opacity-20 top-0">
        Sobre
      </h1>
      <h2
        className="text-4xl md:text-6xl text-orange-500 font-bold relative md:top-6 bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 
             bg-clip-text text-transparent animate-gradient"
      >
        Sobre mim
      </h2>

      <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 mt-10 max-w-4xl md:mt-20">
        <div className="bg-slate-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center text-white flex-1 min-h-[150px]">
          <HiBriefcase className="w-12 h-12 text-purple-400" />
          <h3 className="text-xl font-bold mt-3">Experiência</h3>
          <p className="text-gray-400">2 anos de experiência</p>
        </div>
        <div className="bg-slate-800 p-6  rounded-lg shadow-lg flex flex-col items-center text-center text-white flex-1 min-h-[150px]">
          <HiAcademicCap className="w-12 h-12 text-orange-600" />
          <h3 className="text-xl font-bold mt-3">Educação</h3>
          <p className="text-gray-400">Bacharelado em Engenharia Mecânica - UEA</p>
        </div>
      </div>

      <p className="text-gray-300 text-center text-lg md:text-xl max-w-3xl mt-10">
        Sou Desenvolvedor Full Stack com experiência em Node.js, React e
        TypeScript, especializado no desenvolvimento de APIs REST e aplicações
        web modernas. Com formação em Engenharia Mecânica, desenvolvi projetos
        completos envolvendo autenticação, banco de dados e interfaces
        dinâmicas. Também atuei como instrutor de CAD/CAM na Universidade do Estado do Amazonas.Sou proativo,
        organizado e sempre em busca de aprendizado e inovação na tecnologia.
        <br />
        <br />
        Me destaco por minha proatividade, organização e facilidade em trabalhar
        em equipe. Estou sempre buscando aprender e contribuir com soluções
        inovadoras no universo da tecnologia.
      </p>

      <h3 className="text-3xl text-white font-bold mt-10">Habilidades</h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-5 max-w-4xl">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-slate-800 p-4 rounded-lg shadow-lg flex flex-col items-center transition-transform duration-300 hover:scale-110 hover:shadow-2xl cursor-pointer"
          >
            <skill.icon className={`w-8 h-8 mb-2 ${skill.color}`} />
            <span className="text-white font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;


import { HiAcademicCap, HiBriefcase } from "react-icons/hi"

const About = () => {
  return (
    <div className="bg-slate-900 min-h-screen flex flex-col items-center py-10 px-5 relative md:gap-8">
      
      <h1 className="absolute text-8xl md:text-10xl text-slate-800 font-bold opacity-20 top-0">
        Sobre
      </h1>
      <h2 className="text-4xl md:text-6xl text-orange-500 font-bold relative md:top-6">
        Sobre mim
      </h2>

      
      <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 mt-10 max-w-4xl md:mt-20">
        <div className="bg-slate-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-white flex-1 h-full">
          <HiBriefcase className="w-12 h-12 text-purple-400" />
          <h3 className="text-xl font-bold mt-3">Experiência</h3>
          <p className="text-gray-400">2 anos de experiência</p>
        </div>
        <div className="bg-slate-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center text-white flex-1 h-full">
          <HiAcademicCap className="w-12 h-12 text-orange-600" />
          <h3 className="text-xl font-bold mt-3">Educação</h3>
          <p className="text-gray-400">Bacharelado em Engenharia Mecânica</p>
        </div>
      </div>

      <p className="text-gray-300 text-center text-lg md:text-xl max-w-3xl mt-10">
        Sou apaixonado por tecnologia e desenvolvimento de software. Tenho habilidades em resolução de problemas, trabalho em equipe e aprendizado contínuo. Sempre buscando me aprimorar e contribuir com projetos inovadores.
      </p>

      <h3 className="text-3xl text-white font-bold mt-10">Habilidades</h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-5 max-w-4xl">
        {[
          "Git","HTML", "CSS", "Typescript", "Tailwind",
          "React", "Vite", "Next", "NodeJs",
          "PostgreSQL"
        ].map((skill) => (
          <div
            key={skill}
            className="bg-slate-800 text-white px-4 py-2 rounded-lg shadow-md text-center"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  )
}

export default About
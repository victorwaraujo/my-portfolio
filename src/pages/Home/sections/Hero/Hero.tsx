import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa"
import Avatar from "../../../../assets/images/avatar.jpg"
import { SiDocker, SiNextdotjs, SiPostgresql, SiTailwindcss, SiTypescript} from "react-icons/si"



const Hero = () => {

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id)
        if (section) {
            section.scrollIntoView({ behavior: "smooth" })
        }
    }
  
    return (
      <>
        <div id="inicio"className="bg-slate-900 min-h-screen flex items-center pt-2 md:pt-10 pb-10 ">
            <div className="container max-w-7xl mx-auto flex flex-col justify-center text-white md:flex-row md:justify-around items-center gap-10">
                <div className="flex flex-col md:flex-row items-center gap-10 md:gap-80 mt-20">
                    <div className="relative w-28 sm:w-32 md:w-48 h-auto">
                        <div className="absolute top-4 left-4 w-28 sm:w-32 md:w-48 h-full border-4 border-orange-500 rounded-md shadow-[0px_0px_20px_rgba(255,119,0,0.6)] animate-pulse"></div>
                        <img 
                            src={Avatar} 
                            alt="Avatar" 
                            className="relative w-28 sm:w-32 z-10 md:w-48 h-auto border border-slate-400 rounded-md" />
                    </div>
                    
                    <div className="flex flex-col items-center gap-2 md:gap-6">
                        <h1 className="text-3xl md:text-6xl font-bold">Victor Araujo</h1>
                        <p className="text-2xl md:text-4xl text-slate-200 mt-1 md:mt-2 w-full text-center">Desenvolvedor de Software Full Stack</p>
                        <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6 mt-4 pb-5">
                            <FaHtml5 className="w-10 h-10 md:w-12 md:h-12 text-orange-600 transition-transform duration-300 hover:scale-110" />
                            <FaCss3Alt className="w-10 h-10 md:w-12 md:h-12 text-blue-400 transition-transform duration-300 hover:scale-110" />
                            <SiTypescript className="w-10 h-10 md:w-12 md:h-12 text-blue-500 transition-transform duration-300 hover:scale-110" />
                            <SiTailwindcss className="w-10 h-10 md:w-12 md:h-12 text-sky-400 transition-transform duration-300 hover:scale-110" />
                            <FaReact className="w-10 h-10 md:w-12 md:h-12 text-cyan-400 transition-transform duration-300 hover:scale-110" />
                            <SiDocker className="w-10 h-10 md:w-12 md:h-12 text-cyan-500 transition-transform duration-300 hover:scale-110" />
                            <SiNextdotjs className="w-10 h-10 md:w-12 md:h-12 text-white transition-transform duration-300 hover:scale-110" />
                            <FaNodeJs className="w-10 h-10 md:w-12 md:h-12 text-green-500 transition-transform duration-300 hover:scale-110" />
                            <SiPostgresql className="w-10 h-10 md:w-12 md:h-12 text-blue-600 transition-transform duration-300 hover:scale-110" />
                        </div>
                        <div  className="w-full flex justify-center md:justify-end ">
                            <button onClick={() => scrollToSection("contato")} className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-1 px-2 tracking-wide border-2 border-orange-700 hover:from-orange-600 hover:to-orange-700 transition-all duration-300 hover:scale-105 shadow-md rounded">Contate-me.</button>
                        </div>
                    </div>
                 </div>    
            </div>
        </div>    
      </>
    )
  }
  
  export default Hero
  
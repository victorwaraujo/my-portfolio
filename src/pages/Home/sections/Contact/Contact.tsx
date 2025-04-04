

import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"

const Contact = () => {
  return (
    <div id="contato" className="bg-slate-800 min-h-[40vh] md:min-h-[30vh] flex flex-col justify-center items-center px-5 pb-10">
      
      <h2 className="text-3xl md:text-5xl text-orange-500 mt-10 font-bold bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 
             bg-clip-text text-transparent animate-gradient">
        Contate-me
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-8 mt-8 max-w-5xl w-full text-white">
        <a 
          href="https://www.linkedin.com/in/victorwaraujo" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex flex-col items-center hover:scale-105 transition-transform"
        >
          <FaLinkedin className="text-blue-500 text-3xl" />
          <h3 className="font-bold mt-2">LinkedIn</h3>
          <p className="text-gray-400 text-center">www.linkedin.com/in/victorwaraujo</p>
        </a>

        <a 
          href="https://github.com/victorwaraujo" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex flex-col items-center hover:scale-105 transition-transform"
        >
          <FaGithub className="text-lime-500 text-3xl" />
          <h3 className="font-bold mt-2">GitHub</h3>
          <p className="text-gray-400 text-center">github.com/victorwaraujo</p>
        </a>

        <a 
          href="mailto:victorwaraujo@gmail.com" 
          className="flex flex-col items-center hover:scale-105 transition-transform"
        >
          <FaEnvelope className="text-white text-3xl" />
          <h3 className="font-bold mt-2">Email</h3>
          <p className="text-gray-400 text-center">victorwaraujo@gmail.com</p>
        </a>
      </div>


    </div>
  )
}

export default Contact
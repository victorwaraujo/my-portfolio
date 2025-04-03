

import { FaWhatsapp, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"

const Contact = () => {
  return (
    <div className="bg-slate-800 min-h-[40vh] md:min-h-[30vh] flex flex-col justify-center items-center relative  px-5">
      
      <h2 className="text-3xl md:text-5xl text-orange-500 font-bold ">
        Contate-me
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-8 mt-8 max-w-5xl w-full text-white">
        
        <div className="flex flex-col items-center">
          <FaWhatsapp className="text-green-400 text-3xl" />
          <h3 className="font-bold mt-2">WhatsApp</h3>
          <p className="text-gray-400 text-center">+55 92 984675181</p>
        </div>

        <div className="flex flex-col items-center">
          <FaLinkedin className="text-blue-500 text-3xl" />
          <h3 className="font-bold mt-2">LinkedIn</h3>
          <p className="text-gray-400 text-center">www.linkedin.com/in/victorwaraujo</p>
        </div>

        <div className="flex flex-col items-center">
          <FaGithub className="text-white text-3xl" />
          <h3 className="font-bold mt-2">GitHub</h3>
          <p className="text-gray-400 text-center">https://github.com/victorwaraujo</p>
        </div>

        <div className="flex flex-col items-center">
          <FaEnvelope className="text-white text-3xl" />
          <h3 className="font-bold mt-2">Email</h3>
          <p className="text-gray-400 text-center">victorwaraujo@gmail.com</p>
        </div>
      </div>


    </div>
  )
}

export default Contact
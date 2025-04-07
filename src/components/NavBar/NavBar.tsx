import { useState } from "react"
import Logo from "../../assets/images/logoVictor.png"
import { FiMenu, FiX } from "react-icons/fi"

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setMenuOpen(false);
        }
    }
  
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-slate-950/80 backdrop-blur-sm text-white shadow-md">
        <div className="container max-w-7xl mx-auto flex items-center justify-between h-20 px-4  md:px-16">
            <img 
                src={Logo} 
                alt="Victor Araujo Logo" 
                className="h-12 w-auto object-contain cursor-pointer" 
                onClick={() => scrollToSection('inicio')} 
            />
            <ul className="hidden md:flex space-x-6 text-lg">
                <li className={`cursor-pointer border-b-2 border-transparent hover:border-orange-400`} onClick={() => scrollToSection("inicio")} >Início</li>
                <li className={`cursor-pointer border-b-2 border-transparent hover:border-orange-400`} onClick={() => scrollToSection("sobre")} >Sobre</li>
                <li className={`cursor-pointer border-b-2 border-transparent hover:border-orange-400`} onClick={() => scrollToSection("projetos")} >Projetos</li>
                <li className={`cursor-pointer border-b-2 border-transparent hover:border-orange-400`} onClick={() => scrollToSection("contato")} >Contato</li>
            </ul>

            <button className="md:hidden text-2xl transition-transform duration-200 hover:scale-110" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FiX /> : <FiMenu />}
            </button>
        </div>

        {menuOpen && (
            <ul className="md:hidden flex flex-col items-center space-y-6 bg-gradient-to-b from-slate-900 to-slate-800 shadow-lg py-6 absolute top-20 left-0 w-full z-40 transition-transform duration-300">
                <li className="hover:text-orange-400 cursor-pointer" onClick={() => scrollToSection("inicio")}>Início</li>
                <li className="hover:text-orange-400 cursor-pointer" onClick={() => scrollToSection("sobre")}>Sobre</li>
                <li className="hover:text-orange-400 cursor-pointer" onClick={() => scrollToSection("projetos")}>Projetos</li>
                <li className="hover:text-orange-400 cursor-pointer" onClick={() => scrollToSection("contato")}>Contato</li>
            </ul>
        )}

        <div className="h-0.5 bg-gradient-to-b from-slate-900 to-slate-800"></div>
      </nav>
    )
  }
  
  export default NavBar
  
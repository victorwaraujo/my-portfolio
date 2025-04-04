import { useState } from "react"
import Logo from "../../assets/images/logoVictor.png"

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
      <nav className="bg-slate-900 text-white">
        <div className="container max-w-7xl mx-auto flex items-center justify-between h-20 px-4  md:px-8">
            <img src={Logo} alt="Victor Araujo Logo" className="h-40 cursor-pointer" onClick={() => scrollToSection('inicio')} />
            <ul className="hidden md:flex space-x-6 text-lg">
                <li className="hover:text-orange-400 cursor-pointer" onClick={() => scrollToSection("inicio")} >Início</li>
                <li className="hover:text-orange-400 cursor-pointer" onClick={() => scrollToSection("sobre")} >Sobre</li>
                <li className="hover:text-orange-400 cursor-pointer" onClick={() => scrollToSection("projetos")} >Projetos</li>
                <li className="hover:text-orange-400 cursor-pointer" onClick={() => scrollToSection("contato")} >Contato</li>
            </ul>

            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? "✖" : "☰"}

            </button>
        </div>

        {menuOpen && (
            <ul className="md:hidden flex flex-col items-center space-y-4 bg-slate-800 py-4">
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
  
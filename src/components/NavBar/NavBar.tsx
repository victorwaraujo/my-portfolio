import { useState } from "react"


const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
  
    return (
      <nav className="bg-slate-900 text-white">
        <div className="container max-w-7xl mx-auto flex items-center justify-between h-20 px-4  md:px-8">
            <h1 className="text-2xl font-bold">Victor Araujo</h1>
            <ul className="hidden md:flex space-x-6 text-lg">
                <li className="hover:text-orange-400 cursor-pointer">Início</li>
                <li className="hover:text-orange-400 cursor-pointer">Sobre</li>
                <li className="hover:text-orange-400 cursor-pointer">Projetos</li>
                <li className="hover:text-orange-400 cursor-pointer">Contato</li>
            </ul>

            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? "✖" : "☰"}

            </button>
        </div>

        {menuOpen && (
            <ul className="md:hidden flex flex-col items-center space-y-4 bg-slate-800 py-4">
                <li className="hover:text-orange-400 cursor-pointer">Início</li>
                <li className="hover:text-orange-400 cursor-pointer">Sobre</li>
                <li className="hover:text-orange-400 cursor-pointer">Projetos</li>
                <li className="hover:text-orange-400 cursor-pointer">Contato</li>
            </ul>
        )}

        <div className="h-0.5 bg-gradient-to-b from-slate-900 to-slate-800"></div>
      </nav>
    )
  }
  
  export default NavBar
  
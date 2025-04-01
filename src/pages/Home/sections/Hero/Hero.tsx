import Avatar from "../../../../assets/images/avatar.jpg"
const Hero = () => {
  
    return (
      <>
        <div className="bg-slate-900 min-h-screen">
            <div className="container max-w-7xl mx-auto flex flex-col justify-center h-screen text-white md:flex-row items-center md:justify-around gap-20">
                <div className="relative w-64 h-auto">
                    <div className="absolute top-6 left-6 w-64 h-full border-4 border-orange-500 rounded-sm"></div>
                    <img 
                        src={Avatar} 
                        alt="Avatar" 
                        className="relative z-10 w-64 h-auto" />
                </div>
                <div className="flex flex-col items-center justify-center gap-2 md:gap-3">
                    <h1 className="text-4xl md:text-6xl font-bold">Victor Araujo</h1>
                    <p className="text-2xl md:text-4xl text-slate-200 mt-1 md:mt-2">Desenvolvedor Software Full Stack</p>
                </div>
            </div>
        </div>    
      </>
    )
  }
  
  export default Hero
  
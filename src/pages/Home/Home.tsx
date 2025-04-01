import NavBar from "../../components/NavBar/NavBar"
import About from "./sections/About/About"
import Contact from "./sections/Contact/Contact"
import Hero from "./sections/Hero/Hero"
import Projects from "./sections/Projects/Projects"

const Home = () => {
  
    return (
      <>
        <NavBar />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </>
    )
  }
  
  export default Home
  
import { Navbar } from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import Sobre from './components/sections/Sobre'
import Tecnologias from './components/sections/Tecnologias'
import Processo from './components/sections/Processo'
import Projetos from './components/sections/Projetos'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Tecnologias />
        <Processo />
        <Projetos />
      </main>
    </>
  )
}

export default App

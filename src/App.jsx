import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Sobre from './components/sections/Sobre'
import Tecnologias from './components/sections/Tecnologias'
import Processo from './components/sections/Processo'
import Projetos from './components/sections/Projetos'
import Contato from './components/sections/Contato'

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
        <Contato />
      </main>
      <Footer />
    </>
  )
}

export default App

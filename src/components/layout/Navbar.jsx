import { useEffect, useRef, useState } from 'react'
import { links } from '../../data/navegacao'
import { useSecaoAtiva } from '../../hooks/useSecaoAtiva'

// Fica fora do componente para ser criado uma vez só. Dentro, seria um array
// novo a cada render, e o useEffect do useSecaoAtiva rodaria toda hora.
const ids = links.map((link) => link.id)

// Linha roxa fina na base da navbar que enche conforme a página rola.
// Atualiza o estilo direto pelo ref, sem useState: a rolagem dispara muitos
// eventos por segundo, e assim a navbar não precisa renderizar de novo a cada um.
function BarraDeProgresso() {
  const barra = useRef(null)

  useEffect(() => {
    const atualizar = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      const progresso = total > 0 ? window.scrollY / total : 0
      barra.current.style.transform = `scaleX(${progresso})`
    }

    atualizar()
    window.addEventListener('scroll', atualizar, { passive: true })
    window.addEventListener('resize', atualizar)
    return () => {
      window.removeEventListener('scroll', atualizar)
      window.removeEventListener('resize', atualizar)
    }
  }, [])

  return (
    <div
      ref={barra}
      aria-hidden="true"
      className="absolute -bottom-px left-0 h-0.5 w-full origin-left scale-x-0 bg-(--accent)"
    />
  )
}

// Barra de navegação fixa no topo (sticky): acompanha a rolagem da página.
// Os links são âncoras (#id) que levam até cada seção.
// No celular, os links ficam num menu que abre pelo botão hambúrguer.
export function Navbar() {
  const [aberto, setAberto] = useState(false)
  const ativa = useSecaoAtiva(ids)

  // Com o menu aberto, a tecla Esc fecha. O "ouvinte" só existe enquanto
  // o menu está aberto, e a função de limpeza remove quando ele fecha.
  useEffect(() => {
    if (!aberto) return

    const fecharComEsc = (evento) => {
      if (evento.key === 'Escape') setAberto(false)
    }

    window.addEventListener('keydown', fecharComEsc)
    return () => window.removeEventListener('keydown', fecharComEsc)
  }, [aberto])

  const fecharMenu = () => setAberto(false)

  // Os 3 risquinhos do hambúrguer. Ao abrir, o de cima e o de baixo giram
  // e se cruzam formando um X, e o do meio some.
  const risco = 'absolute h-0.5 w-5 rounded-full bg-current transition duration-300 ease-out motion-reduce:transition-none'

  // Links do desktop: um sublinhado roxo (o ::after) que cresce do centro
  // no hover e fica aceso na seção ativa.
  const linkDesktop = (id) =>
    `relative py-1 text-sm transition-colors duration-200 hover:text-(--accent)
     after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-full after:rounded-full
     after:bg-(--accent) after:origin-center after:transition-transform after:duration-300
     motion-reduce:after:transition-none hover:after:scale-x-100 ${
       ativa === id ? 'text-(--accent) after:scale-x-100' : 'text-(--text) after:scale-x-0'
     }`

  return (
    <header className="sticky top-0 z-50 border-b border-(--border) bg-(--bg)/80 backdrop-blur">
      <nav
        aria-label="Principal"
        className="max-w-2xl mx-auto px-6 h-14 flex items-center justify-between"
      >
        <a
          href="#inicio"
          aria-label="Manoel Justino, voltar ao início"
          onClick={fecharMenu}
          className="text-lg font-extrabold tracking-tighter text-(--accent)"
        >
          MJ
        </a>

        <ul className="hidden sm:flex items-center gap-6">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                aria-current={ativa === link.id ? 'location' : undefined}
                className={linkDesktop(link.id)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setAberto(!aberto)}
          aria-expanded={aberto}
          aria-controls="menu-celular"
          aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
          className="sm:hidden relative -mr-2 w-10 h-10 flex items-center justify-center cursor-pointer text-(--text-h)"
        >
          <span className={`${risco} ${aberto ? 'rotate-45' : '-translate-y-1.5'}`} />
          <span className={`${risco} ${aberto ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`${risco} ${aberto ? '-rotate-45' : 'translate-y-1.5'}`} />
        </button>
      </nav>

      <BarraDeProgresso />

      {/* Painel do celular. absolute: ele fica POR CIMA da página, em vez de
          empurrar o conteúdo para baixo. Assim, ao tocar num link, a página não
          "pula" quando o menu fecha, e a seção para no lugar certo.
          O truque grid-rows-[0fr] → [1fr] anima a altura de 0 até o tamanho do
          conteúdo. inert: fechado, os links não recebem foco pelo teclado nem
          são lidos pelo leitor de tela. */}
      <div
        id="menu-celular"
        inert={!aberto}
        className={`sm:hidden absolute inset-x-0 top-full grid bg-(--bg)/95 transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
          aberto ? 'grid-rows-[1fr] border-b border-(--border)' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <ul className="max-w-2xl mx-auto px-6 pb-4 flex flex-col">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={fecharMenu}
                  aria-current={ativa === link.id ? 'location' : undefined}
                  className={`block py-3 text-base border-b border-(--border) transition-colors duration-200 hover:text-(--accent) ${
                    ativa === link.id ? 'text-(--accent)' : 'text-(--text)'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}

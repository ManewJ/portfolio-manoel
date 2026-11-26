import { useEffect, useState } from 'react'
import { links } from '../../data/navegacao'

// Barra de navegação fixa no topo (sticky): acompanha a rolagem da página.
// Os links são âncoras (#id) que levam até cada seção.
// No celular, os links ficam num menu que abre pelo botão hambúrguer.
export function Navbar() {
  const [aberto, setAberto] = useState(false)

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
                className="text-sm text-(--text) transition-colors duration-200 hover:text-(--accent)"
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
                  className="block py-3 text-base text-(--text) border-b border-(--border) transition-colors duration-200 hover:text-(--accent)"
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

import { links } from '../../data/navegacao'

// Barra de navegação fixa no topo (sticky): acompanha a rolagem da página.
// Os links são âncoras (#id) que levam até cada seção.
export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-(--border) bg-(--bg)/80 backdrop-blur">
      <nav
        aria-label="Principal"
        className="max-w-2xl mx-auto px-6 h-14 flex items-center justify-between"
      >
        <a
          href="#inicio"
          aria-label="Manoel Justino, voltar ao início"
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
      </nav>
    </header>
  )
}

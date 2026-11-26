// Etiqueta informativa: destaques do Hero, tecnologias e stack dos projetos.
// Não é clicável, por isso usa cursor-default (seta) e só acende borda e fundo no hover.
export function Tag({ children }) {
  return (
    <span className="px-3 py-1 rounded-md border border-(--border) text-sm cursor-default transition-colors duration-200 hover:border-(--accent-border) hover:bg-(--accent-bg)">
      {children}
    </span>
  )
}

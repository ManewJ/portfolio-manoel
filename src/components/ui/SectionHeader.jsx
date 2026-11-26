// Cabeçalho padrão das seções: rótulo pequeno, título e descrição opcional.
// Usar sempre este componente garante que todas as seções fiquem iguais.
export function SectionHeader({ rotulo, titulo, children }) {
  return (
    <>
      <span className="text-xs font-medium text-(--accent) uppercase tracking-wider mb-3 block">
        {rotulo}
      </span>

      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-(--text-h) mb-6">
        {titulo}
      </h2>

      {children && (
        <p className="text-base text-(--text) leading-relaxed">
          {children}
        </p>
      )}
    </>
  )
}

import { categorias } from '../../data/tecnologias'

function Tecnologias() {
  return (
    // pt-4/sm:pt-8 (bem menor que pb) evita que o padding desta seção
    // some ao padding-bottom do Sobre, criando um gap duplicado
    <section id="tecnologias" className="max-w-2xl mx-auto px-6 pt-4 pb-16 sm:pt-8 sm:pb-24 text-left">

      <span className="text-xs font-medium text-(--accent) uppercase tracking-wider mb-3 block">
        Tecnologias
      </span>

      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-(--text-h) mb-6">
        Stack organizada por área de atuação.
      </h2>

      <p className="text-base text-(--text) leading-relaxed">
        Tecnologias aplicadas em projetos reais — do front-end ao mobile, com testes
        automatizados e ferramentas de versionamento no fluxo do dia a dia.
      </p>

      {/* grid de 2 colunas — mesmo padrão do Sobre, economiza espaço vertical
          e mantém consistência visual entre as seções. mt-10 isola do parágrafo */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
        {categorias.map((categoria) => (
          <div
            key={categoria.nome}
            className="rounded-2xl border border-(--border) bg-(--code-bg) p-5 shadow-(--shadow)"
          >
            <h3 className="text-sm font-semibold text-(--text-h) uppercase tracking-wide mb-3">
              {categoria.nome}
            </h3>
            <div className="flex flex-wrap gap-2">
              {categoria.itens.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 rounded-md border border-(--border) text-sm transition-colors duration-200 hover:border-(--accent-border) hover:bg-(--accent-bg)"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Tecnologias
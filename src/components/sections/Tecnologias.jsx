import { SectionHeader } from '../ui/SectionHeader'
import { Tag } from '../ui/Tag'
import { categorias } from '../../data/tecnologias'

function Tecnologias() {
  return (
    // pt-4/sm:pt-8 (bem menor que pb) evita que o padding desta seção
    // some ao padding-bottom do Sobre, criando um gap duplicado
    <section id="tecnologias" className="max-w-2xl mx-auto px-6 pt-4 pb-16 sm:pt-8 sm:pb-24 text-left">

      <SectionHeader rotulo="Tecnologias" titulo="Stack organizada por área de atuação.">
        Tecnologias aplicadas em projetos reais — do front-end ao mobile, com testes automatizados e ferramentas de versionamento no fluxo do dia a dia.
      </SectionHeader>

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
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Tecnologias
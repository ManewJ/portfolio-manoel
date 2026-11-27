import { projetos } from '../../data/projetos'
import { IconeGithub, IconeLinkExterno } from '../ui/icons'
import { SectionHeader } from '../ui/SectionHeader'
import { Tag } from '../ui/Tag'

function Projetos() {
  return (
    <section id="projetos" className="max-w-2xl mx-auto px-6 pt-4 pb-16 sm:pt-8 sm:pb-24 text-left">

      <SectionHeader rotulo="Projetos" titulo="Projetos que aplicam a teoria na prática.">
        Do mobile à web — cada projeto resolve um problema real, com honestidade sobre o que já está pronto e o que ainda está em construção.
      </SectionHeader>

      <div className="grid grid-cols-1 gap-6 mt-10">
        {projetos.map((projeto) => (
          <div
            key={projeto.titulo}
            className="rounded-2xl border border-(--border) bg-(--code-bg) p-6 shadow-(--shadow)"
          >
            <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
              <h3 className="text-lg font-semibold text-(--text-h)">
                {projeto.titulo}
              </h3>
              <span
                className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                  projeto.status === 'Implementado'
                    ? 'bg-green-500/10 text-green-800 dark:text-green-400 border border-green-500/30'
                    : 'bg-amber-500/10 text-amber-800 dark:text-amber-400 border border-amber-500/30'
                }`}
              >
                {projeto.status}
              </span>
            </div>

            <p className="text-base text-(--text) leading-relaxed mb-4">
              {projeto.descricao}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {projeto.stack.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>

            {/* Links: já nascem "acesos" (cor de destaque + fundo sutil sempre visíveis),
                menores que as tags de stack (text-xs em vez de text-sm) — isso os
                diferencia visualmente das tags, que só acendem no hover */}
            {projeto.links.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {projeto.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-(--accent-border) bg-(--accent-bg) text-xs font-medium text-(--accent) transition-colors duration-200 hover:bg-(--accent) hover:text-(--bg)"
                  >
                    {link.label === 'GitHub' ? <IconeGithub /> : <IconeLinkExterno />}
                    {link.label === 'GitHub' ? 'Ver código' : link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projetos